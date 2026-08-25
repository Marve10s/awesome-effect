const README = new URL("../README.md", import.meta.url);
const CONCURRENCY = 16;
const TIMEOUT_MS = 20_000;
const SKIP_HOSTS = new Set(["twitter.com", "x.com", "www.linkedin.com", "open.spotify.com", "podcasts.apple.com", "discord.gg"]);
const UA = "Mozilla/5.0 (compatible; awesome-effect-link-check; +https://github.com/Marve10s/awesome-effect)";

type Result = { url: string; status: number; ok: boolean; error?: string };

const markdown = await Bun.file(README).text();
const urls = [...new Set([...markdown.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]))];

// npmjs.com rate-limits page requests; the registry answers the same question without limits.
const target = (url: string) => {
  const m = url.match(/^https:\/\/www\.npmjs\.com\/package\/(.+)$/);
  return m ? `https://registry.npmjs.org/${m[1]}` : url;
};

async function probe(url: string): Promise<Result> {
  const request = (method: "HEAD" | "GET") =>
    fetch(target(url), { method, redirect: "follow", signal: AbortSignal.timeout(TIMEOUT_MS), headers: { "user-agent": UA } });
  try {
    let res = await request("HEAD");
    if (res.status === 405 || res.status === 403 || res.status === 404) res = await request("GET");
    return { url, status: res.status, ok: res.ok };
  } catch (error) {
    const message = error instanceof Error ? (error.name === "TimeoutError" ? "timeout" : error.message) : String(error);
    return { url, status: 0, ok: false, error: message };
  }
}

const queue = urls.filter((u) => !SKIP_HOSTS.has(new URL(u).hostname));
const results: Result[] = [];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (let next = queue.shift(); next; next = queue.shift()) results.push(await probe(next));
  }),
);

const failures = results.filter((r) => !r.ok).sort((a, b) => a.url.localeCompare(b.url));
console.log(`${urls.length} unique URLs, ${results.length} checked, ${urls.length - results.length} skipped by host, ${failures.length} failing`);
for (const f of failures) console.log(`  ${f.status || f.error}\t${f.url}`);
process.exit(failures.length ? 1 : 0);
