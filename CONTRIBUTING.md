# Contributing

Pull requests are welcome. The bar for an entry is low on popularity and high on accuracy.

## What belongs here

- Libraries, tools, apps, templates, and learning material that use or target Effect.
- Ports of Effect's design to other languages go under "Effect in other languages".
- Companies go under "Companies using Effect" only with a public source: a talk, a blog post, a podcast episode, or an issue of This Week in Effect.

Star counts do not matter. A one-star library that works is fine. A dead link is not.

## What does not belong

- Packages named "effect" that are unrelated to Effect (React `useEffect` hooks, visual effects, After Effects).
- Private repos, paywalled content without a public description, or job postings.
- Duplicates. Search the README before adding.

## Entry format

One line per entry, following [awesome-rust](https://github.com/rust-unofficial/awesome-rust):

```markdown
- [owner/repo](https://github.com/owner/repo) - What it does, in one sentence ending with a period.
```

Rules:

- Link text is `owner/repo` for GitHub projects. Use the project name for sites, courses, and packages that only exist on npm.
- The description says what the thing does. No adjectives like "powerful", "blazing", or "production-ready".
- Add "Effect v4." at the end when the package's `effect` peer dependency only accepts 4.x. Add "Effect v3." when it only accepts 3.x. Say nothing when both work or when it is not a library.
- Add "Last updated YYYY." when the repo has had no commits since 2024. Do not remove such entries; readers still find them useful for reference.
- Keep entries within a section sorted roughly by relevance, official first. Exact ordering is not enforced.
- Sentence-case headings. No emoji.

## Before opening a pull request

```sh
bun run check
```

`bun run check` runs `awesome-lint` on the README and `scripts/check-links.ts` on every URL. Both must pass. `bun run stale` prints GitHub repos that are archived or have had no push in twelve months; it is informational and runs weekly in CI.

## Removing entries

Open a pull request that removes the line and says why in the description. Reasons that qualify: the repo is gone, the package is deprecated with a named replacement, or the description was wrong and cannot be fixed.
