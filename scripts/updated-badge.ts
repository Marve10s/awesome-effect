// Writes assets/pills/updated.svg for today's date (or the date passed as the first argument).
const date = Bun.argv[2] ?? new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`expected YYYY-MM-DD, got ${date}`);
const label = "Last updated";
const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";
const labelWidth = 80;
const dateWidth = 74;
const width = 8 + 16 + 6 + labelWidth + 6 + dateWidth + 9;
const height = 24;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img"><rect x=".5" y=".5" width="${width - 1}" height="${height - 1}" rx="${(height - 1) / 2}" fill="#ffffff" stroke="#d0d7de"/><g transform="translate(8,4)" fill="none" stroke="#57606a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="3" width="11" height="10" rx="1.5"/><path d="M2.5 6.5h11M5.5 1.8v2.4M10.5 1.8v2.4"/></g><text x="30" y="16" font-family="${font}" font-size="12" font-weight="600" fill="#57606a">${label}</text><text x="${30 + labelWidth + 6}" y="16" font-family="${font}" font-size="12" font-weight="600" fill="#24292f">${date}</text></svg>`;
await Bun.write(new URL("../assets/pills/updated.svg", import.meta.url), svg);
console.log(`assets/pills/updated.svg -> ${date}`);
