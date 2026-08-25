const ROOT = new URL("..", import.meta.url);
const FILES = ["README.md", "applications.md", "learning.md", "community.md"];
const STALE_AFTER_DAYS = 365;
const CONCURRENCY = 8;
const token = Bun.env.GITHUB_TOKEN;

type Repo = { full_name: string; archived: boolean; pushed_at: string };
type Result =
  | { repo: string; missing: true }
  | { repo: string; error: string }
  | { repo: string; archived: boolean; pushedAt: string; ageDays: number; renamedTo?: string };

const markdown = (await Promise.all(FILES.map((f) => Bun.file(new URL(f, ROOT)).text()))).join("\n");
const repos = [...new Set([...markdown.matchAll(/https:\/\/github\.com\/([\w.-]+\/[\w.-]+)/g)].map((m) => m[1]))];

async function inspect(repo: string): Promise<Result> {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: { accept: "application/vnd.github+json", ...(token ? { authorization: `Bearer ${token}` } : {}) },
  });
  if (res.status === 404) return { repo, missing: true };
  if (!res.ok) return { repo, error: `${res.status} ${await res.text()}` };
  const data = (await res.json()) as Repo;
  const ageDays = Math.floor((Date.now() - Date.parse(data.pushed_at)) / 86_400_000);
  return {
    repo,
    archived: data.archived,
    pushedAt: data.pushed_at.slice(0, 10),
    ageDays,
    renamedTo: data.full_name.toLowerCase() !== repo.toLowerCase() ? data.full_name : undefined,
  };
}

const queue = [...repos];
const results: Result[] = [];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (let next = queue.shift(); next; next = queue.shift()) results.push(await inspect(next));
  }),
);

const missing = results.filter((r) => "missing" in r);
const errors = results.filter((r): r is Extract<Result, { error: string }> => "error" in r);
const live = results.filter((r): r is Extract<Result, { ageDays: number }> => "ageDays" in r);
const renamed = live.filter((r) => r.renamedTo);
const archived = live.filter((r) => r.archived);
const stale = live.filter((r) => !r.archived && r.ageDays > STALE_AFTER_DAYS).sort((a, b) => b.ageDays - a.ageDays);

function list<T>(title: string, rows: T[], fmt: (row: T) => string) {
  if (!rows.length) return;
  console.log(`\n${title} (${rows.length})`);
  for (const r of rows) console.log(`  ${fmt(r)}`);
}

console.log(`${repos.length} GitHub repos checked`);
list("Missing", missing, (r) => r.repo);
list("Renamed", renamed, (r) => `${r.repo} -> ${r.renamedTo}`);
list("Archived", archived, (r) => `${r.repo} (last push ${r.pushedAt})`);
list(`No push in ${STALE_AFTER_DAYS} days`, stale, (r) => `${r.repo} (last push ${r.pushedAt}, ${r.ageDays} days)`);
list("API errors", errors, (r) => `${r.repo}: ${r.error}`);
process.exit(missing.length || errors.length ? 1 : 0);
