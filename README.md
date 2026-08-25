# Awesome Effect

Libraries, tools, apps, and learning material for [Effect](https://effect.website), the TypeScript library for typed errors, dependency injection, concurrency, and streams.

Effect 4 is the current major. The list is split by it: Effect v4 core is what ships with Effect 4, Ecosystem libraries are third-party packages that work next to it, and Effect v3 legacy holds the packages that were merged into core plus libraries still pinned to `effect@3`. Tools, apps, examples, and learning resources follow.

<img src="assets/pills/updated.svg" alt="Last updated 2026-08-25">

## More

- <img src="assets/icons/apps.svg" alt=""> [Applications and examples](applications.md) - Open source apps built on Effect, plus templates and starters.
- <img src="assets/icons/learning.svg" alt=""> [Learning Effect](learning.md) - Courses, patterns, articles, talks, and podcasts.
- <img src="assets/icons/community.svg" alt=""> [Community and adoption](community.md) - Meetups, official channels, and companies using Effect.

## Contents

- [Effect v4 core](#effect-v4-core)
  - [Links](#links)
  - [Core packages](#core-packages)
  - [Official tooling and repos](#official-tooling-and-repos)
- [Ecosystem libraries](#ecosystem-libraries)
  - [State management and UI](#state-management-and-ui)
  - [Framework integrations](#framework-integrations)
  - [HTTP, RPC, and API](#http-rpc-and-api)
  - [OpenAPI and code generation](#openapi-and-code-generation)
  - [Schema, data types, and utilities](#schema-data-types-and-utilities)
  - [Databases and storage](#databases-and-storage)
  - [Local-first and sync](#local-first-and-sync)
  - [Messaging, jobs, workflows, and actors](#messaging-jobs-workflows-and-actors)
  - [Cloud and infrastructure](#cloud-and-infrastructure)
  - [AI, agents, and MCP](#ai-agents-and-mcp)
  - [Agent skills and rules](#agent-skills-and-rules)
  - [Testing](#testing)
  - [Logging, tracing, and observability](#logging-tracing-and-observability)
  - [CLI and terminal](#cli-and-terminal)
  - [Service SDKs and API clients](#service-sdks-and-api-clients)
  - [Authentication and authorization](#authentication-and-authorization)
  - [Blockchain](#blockchain)
- [Effect v3 legacy](#effect-v3-legacy)
  - [Packages merged into Effect v4](#packages-merged-into-effect-v4)
  - [Libraries for Effect v3](#libraries-for-effect-v3)
- [Development tools](#development-tools)
  - [Editors and language service](#editors-and-language-service)
  - [Linting and code style](#linting-and-code-style)
  - [Scaffolding and migration](#scaffolding-and-migration)
  - [Playgrounds and visualizers](#playgrounds-and-visualizers)
- [Effect in other languages](#effect-in-other-languages)
- [Other lists](#other-lists)

## <img src="assets/pills/v4.svg" alt="Effect v4"> Effect v4 core

### Links

- <img src="assets/icons/web.svg" alt="Website"> [Documentation (v4)](https://effect.website/docs/v4) - Docs for the Effect 4 release candidate.
- <img src="assets/icons/web.svg" alt="Website"> [Documentation (v3)](https://effect.website/docs/v3) - Docs for Effect 3.
- <img src="assets/icons/web.svg" alt="Website"> [API reference (v4)](https://effect.website/docs/v4/api) - Generated API docs for Effect 4.
- <img src="assets/icons/web.svg" alt="Website"> [API reference (v3)](https://effect.website/docs/v3/api) - Generated API docs for Effect 3.
- <img src="assets/icons/article.svg" alt="Article"> [Blog](https://effect.website/blog) - Release notes, recaps, and announcements.
- <img src="assets/icons/article.svg" alt="Article"> [This Week in Effect](https://effect.website/blog?category=this-week-in-effect#blog-grid) - Weekly newsletter with releases, community projects, and events. Most entries in this list were first announced there.
- <img src="assets/icons/web.svg" alt="Website"> [Community hub](https://effect.website/community-hub) - Meetup calendar, social links, and event submission form.
- <img src="assets/icons/web.svg" alt="Website"> [Effect jobs](https://effect.website/effect-jobs) - Job board for roles that use Effect.
- <img src="assets/icons/web.svg" alt="Website"> [Adoption partners](https://effect.website/adoption-partners) - Consultancies that help teams adopt Effect.
- <img src="assets/icons/web.svg" alt="Website"> [Myths about Effect](https://effect.website/myths) - Official page answering common objections.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/effect](https://github.com/Effect-TS/effect) - The monorepo. The `main` branch is Effect 4.
- <img src="assets/icons/web.svg" alt="Website"> [Merch store](https://effect.website/merch/) - Effect-branded items.

### Core packages

Published from the Effect-TS/effect monorepo at the shared v4 version. Packages that only exist for Effect 3 are under Effect v3 legacy.

- <img src="assets/icons/npm.svg" alt="npm"> [effect](https://www.npmjs.com/package/effect) - The core library: Effect, Layer, Schema, Stream, Config, Metric, Cache, and more. In v4 it also holds what used to be separate packages under `effect/unstable/*`: ai, cli, cluster, devtools, eventlog, http, httpapi, jsonschema, observability, persistence, process, reactivity, rpc, schema, socket, sql, workflow, and workers.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/platform-node](https://www.npmjs.com/package/@effect/platform-node) - Node.js implementations of the platform interfaces.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/platform-bun](https://www.npmjs.com/package/@effect/platform-bun) - Bun implementations of the platform interfaces.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/platform-browser](https://www.npmjs.com/package/@effect/platform-browser) - Browser implementations of the platform interfaces.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/platform-deno](https://www.npmjs.com/package/@effect/platform-deno) - Deno implementations of the platform interfaces.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-pg](https://www.npmjs.com/package/@effect/sql-pg) - PostgreSQL driver.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-pglite](https://www.npmjs.com/package/@effect/sql-pglite) - PGlite driver for PostgreSQL in WebAssembly.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-mysql2](https://www.npmjs.com/package/@effect/sql-mysql2) - MySQL driver.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-mssql](https://www.npmjs.com/package/@effect/sql-mssql) - Microsoft SQL Server driver.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-clickhouse](https://www.npmjs.com/package/@effect/sql-clickhouse) - ClickHouse driver.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-libsql](https://www.npmjs.com/package/@effect/sql-libsql) - libSQL and Turso driver.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-d1](https://www.npmjs.com/package/@effect/sql-d1) - Cloudflare D1 driver.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-sqlite-node](https://www.npmjs.com/package/@effect/sql-sqlite-node) - SQLite driver for Node.js.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-sqlite-bun](https://www.npmjs.com/package/@effect/sql-sqlite-bun) - SQLite driver for Bun.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-sqlite-wasm](https://www.npmjs.com/package/@effect/sql-sqlite-wasm) - SQLite driver for browsers via WebAssembly.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-sqlite-react-native](https://www.npmjs.com/package/@effect/sql-sqlite-react-native) - SQLite driver for React Native.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-sqlite-do](https://www.npmjs.com/package/@effect/sql-sqlite-do) - SQLite driver for Cloudflare Durable Objects.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/ai-openai](https://www.npmjs.com/package/@effect/ai-openai) - OpenAI provider.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/ai-anthropic](https://www.npmjs.com/package/@effect/ai-anthropic) - Anthropic provider.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/ai-openrouter](https://www.npmjs.com/package/@effect/ai-openrouter) - OpenRouter provider.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/ai-openai-compat](https://www.npmjs.com/package/@effect/ai-openai-compat) - Provider for OpenAI-compatible APIs.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/atom-react](https://www.npmjs.com/package/@effect/atom-react) - React bindings for the Atom reactive state module. The v3 predecessor is `@effect-atom/atom-react`, listed under Effect v3 legacy.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/atom-solid](https://www.npmjs.com/package/@effect/atom-solid) - SolidJS bindings for Atom.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/atom-vue](https://www.npmjs.com/package/@effect/atom-vue) - Vue bindings for Atom.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/opentelemetry](https://www.npmjs.com/package/@effect/opentelemetry) - Export Effect spans, metrics, and logs through OpenTelemetry.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/vitest](https://www.npmjs.com/package/@effect/vitest) - `it.effect`, `it.live`, `it.scoped`, and TestClock helpers for Vitest.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/openapi-generator](https://www.npmjs.com/package/@effect/openapi-generator) - Generate Schema types, HTTP clients, and HttpApi modules from OpenAPI specs.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/language-service](https://www.npmjs.com/package/@effect/language-service) - TypeScript language service plugin with Effect-specific diagnostics, quick fixes, and refactors.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/tsgo](https://www.npmjs.com/package/@effect/tsgo) - TypeScript-Go build with the Effect language service compiled in. Includes an LSP-based linter.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/eslint-plugin](https://www.npmjs.com/package/@effect/eslint-plugin) - ESLint rules for Effect projects, such as `dprint` formatting and no-import-from-barrel.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/docgen](https://www.npmjs.com/package/@effect/docgen) - Documentation generator that type-checks the examples in JSDoc.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/build-utils](https://www.npmjs.com/package/@effect/build-utils) - Build scripts used to package Effect libraries.

### Official tooling and repos

- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/effect-smol](https://github.com/Effect-TS/effect-smol) - Where Effect 4 was developed before it moved to the main repo. Kept for history.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/docgen](https://github.com/Effect-TS/docgen) - Source for `@effect/docgen`.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/build-utils](https://github.com/Effect-TS/build-utils) - Source for `@effect/build-utils`.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/website](https://github.com/Effect-TS/website) - Source for effect.website, built with Astro.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/discord-bot](https://github.com/Effect-TS/discord-bot) - The community Discord bot, written with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/wa-sqlite](https://github.com/Effect-TS/wa-sqlite) - Fork of wa-sqlite used by `@effect/sql-sqlite-wasm`.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/next-release-action](https://github.com/Effect-TS/next-release-action) - GitHub Action for staged release branches from changesets.

## <img src="assets/pills/eco.svg" alt="Ecosystem"> Ecosystem libraries

Third-party libraries that work next to Effect 4. An entry ending in <img src="assets/tags/v4.svg" alt="Effect v4"> publishes an `effect` peer range that accepts 4.x. No tag means the range is open-ended or the project publishes none; check before you depend on it.

### State management and UI

- <img src="assets/icons/github.svg" alt="GitHub"> [sproott/effect-atom-svelte](https://github.com/sproott/effect-atom-svelte) - Svelte bindings for Effect Atom. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [nhattran998/tanstack-db-atom](https://github.com/nhattran998/tanstack-db-atom) - Atoms that wrap TanStack DB collections and queries.
- <img src="assets/icons/github.svg" alt="GitHub"> [typeonce-dev/effect-xstate](https://github.com/typeonce-dev/effect-xstate) - XState actor integration for Effect Atom. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [foldkit/foldkit](https://github.com/foldkit/foldkit) - Frontend framework built on Effect, with Elm-style update loops, a UI component set, DevTools MCP, and server rendering. [Site](https://foldkit.dev).
- <img src="assets/icons/github.svg" alt="GitHub"> [tarkaworks/foldocs](https://github.com/tarkaworks/foldocs) - Documentation site framework built on Foldkit.
- <img src="assets/icons/github.svg" alt="GitHub"> [stefvw93/weft](https://github.com/stefvw93/weft) - Reactive DOM library where every node is an Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [m9tdev/verrex](https://github.com/m9tdev/verrex) - UI framework where the A, E, R channels of an Effect survive from every leaf of the view tree to the root.
- <img src="assets/icons/github.svg" alt="GitHub"> [doeixd/effect-atom-jsx](https://github.com/doeixd/effect-atom-jsx) - Fine-grained JSX runtime with Layer-provided services, async atoms, and optimistic actions. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [lself1022/effer](https://github.com/lself1022/effer) - UI library built on lit-html with Effect at the core.
- <img src="assets/icons/github.svg" alt="GitHub"> [stax-ui/stax](https://github.com/stax-ui/stax) - Reactive UI framework based on Effect primitives.
- <img src="assets/icons/github.svg" alt="GitHub"> [Thiladev/effect-view](https://github.com/Thiladev/effect-view) - Write React function components as Effects. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [bmvantunes/effect-view-server](https://github.com/bmvantunes/effect-view-server) - Turns validated source streams into typed snapshots and deltas for React and other clients. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [frondruntime/frond](https://github.com/frondruntime/frond) - Frontend runtime for React and MobX-facing application state.
- <img src="assets/icons/github.svg" alt="GitHub"> [SuttonKyle/effect-ts-react-stable-hooks](https://github.com/SuttonKyle/effect-ts-react-stable-hooks) - Port of fp-ts-react-stable-hooks to Effect. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [Inalegwu/EffectCanvas](https://github.com/Inalegwu/EffectCanvas) - Canvas renderer for React driven by Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [timurrakhimzhan/unitflow](https://github.com/timurrakhimzhan/unitflow) - Effect-first state manager.
- <img src="assets/icons/github.svg" alt="GitHub"> [Handfish/effstate](https://github.com/Handfish/effstate) - Actor-based state management built on Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [zaymonoid/katha](https://github.com/zaymonoid/katha) - State management with saga-pattern side effects on Effect's structured concurrency.
- <img src="assets/icons/github.svg" alt="GitHub"> [run4w4y/effect-state-tree](https://github.com/run4w4y/effect-state-tree) - Experimental state tree with immutable snapshots and typed commits for Effect and Schema.
- <img src="assets/icons/github.svg" alt="GitHub"> [typeonce-dev/effect-machine](https://github.com/typeonce-dev/effect-machine) - Schema-first state machines and statecharts. Home of the proposed Machine API while it incubates. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [cevr/effect-machine](https://github.com/cevr/effect-machine) - Schema-first state machines with compile-time transition checks, state-scoped effects, and persistence.
- <img src="assets/icons/github.svg" alt="GitHub"> [umpire-tools/umpire](https://github.com/umpire-tools/umpire) - Reactive derived state for forms with interdependent options. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [carloitaben/conform-to-effect](https://github.com/carloitaben/conform-to-effect) - Conform helpers that validate forms with Effect Schema.
- <img src="assets/icons/github.svg" alt="GitHub"> [react-hook-form/resolvers](https://github.com/react-hook-form/resolvers) - Includes an Effect Schema resolver for React Hook Form.
- <img src="assets/icons/web.svg" alt="Website"> [Alette Signal](https://alette-os.com) - Frontend data fetching library built with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [julia-script/effect-motion](https://github.com/julia-script/effect-motion) - Animation primitives on Effect. <img src="assets/tags/v4.svg" alt="Effect v4">

### Framework integrations

- <img src="assets/icons/github.svg" alt="GitHub"> [voidhashcom/effect-query](https://github.com/voidhashcom/effect-query) - TanStack Query adapter that works with Effect RPC and HttpApi clients. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [tiesen243/effect-tanstack-query](https://github.com/tiesen243/effect-tanstack-query) - Bridge Effect HttpApi clients into TanStack Query options. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [EthanShoeDev/effect-tanstack-start](https://github.com/EthanShoeDev/effect-tanstack-start) - Serve Effect HttpApi from TanStack Start.
- <img src="assets/icons/github.svg" alt="GitHub"> [artisanstreet/svelte-effect-runtime](https://github.com/artisanstreet/svelte-effect-runtime) - Effect runtime for Svelte components.
- <img src="assets/icons/github.svg" alt="GitHub"> [RATIU5/sveltekit-effect-runtime](https://github.com/RATIU5/sveltekit-effect-runtime) - Wrappers for running Effect in SvelteKit handlers, loaders, and actions. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [kuroski/effect-svelte](https://github.com/kuroski/effect-svelte) - Run Effect programs in SvelteKit load and remote functions with error, redirect, and form handling.
- <img src="assets/icons/github.svg" alt="GitHub"> [heddendorp/effect-angular](https://github.com/heddendorp/effect-angular) - Angular adapters for Effect Platform HttpClient and Effect RPC. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [glitchkids/press.gk](https://github.com/glitchkids/press.gk) - Git-based CMS for Astro with an Effect runtime and Cloudflare deployment.
- <img src="assets/icons/github.svg" alt="GitHub"> [honojs/middleware](https://github.com/honojs/middleware) - Contains `@hono/effect-validator`, a Hono validator middleware for Effect Schema.
- <img src="assets/icons/github.svg" alt="GitHub"> [kylobyte-dev/keel](https://github.com/kylobyte-dev/keel) - Fastify 5 backend framework with Effect Schema as type provider and controllers as Effect services.
- <img src="assets/icons/github.svg" alt="GitHub"> [daotl/fastify-type-provider-effect-schema](https://github.com/daotl/fastify-type-provider-effect-schema) - Effect Schema type provider for Fastify.
- <img src="assets/icons/github.svg" alt="GitHub"> [tatemz/effect-htmx](https://github.com/tatemz/effect-htmx) - Effect Platform, Bun, MVC, and HTMX.
- <img src="assets/icons/github.svg" alt="GitHub"> [PatrickOgilvie/popcomputer-web](https://github.com/PatrickOgilvie/popcomputer-web) - Inertia.js-style server-driven SPA adapter for Hono on Cloudflare with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [rjdellecese/confect](https://github.com/rjdellecese/confect) - Convex with Effect: define schemas, validators, and functions as Effect services.
- <img src="assets/icons/github.svg" alt="GitHub"> [austinm911/effect-zero](https://github.com/austinm911/effect-zero) - Effect-backed server adapters for Zero sync mutators. Supports Effect v3 and v4.
- <img src="assets/icons/github.svg" alt="GitHub"> [realms-labs/effect-zero](https://github.com/realms-labs/effect-zero) - Another Effect integration for Zero mutators.
- <img src="assets/icons/github.svg" alt="GitHub"> [osuki-dev/vite-plugin-effect](https://github.com/osuki-dev/vite-plugin-effect) - Vite plugin exposing a backend API and RPC gateway as a virtual client module. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [effect-app/libs](https://github.com/effect-app/libs) - Application libraries from effect-app, covering API contracts, client, and Vue integration.
- <img src="assets/icons/github.svg" alt="GitHub"> [effect-native/effect-native](https://github.com/effect-native/effect-native) - Native platform tools built on Effect: cr-sqlite service, OpenRouter client, and schemas. Effect v4 packages published under `@beta`.
- <img src="assets/icons/github.svg" alt="GitHub"> [rockware-ai/nx](https://github.com/rockware-ai/nx) - Nx plugins that scaffold Effect libraries, services, and Node apps with `@effect/vitest`.

### HTTP, RPC, and API

- <img src="assets/icons/github.svg" alt="GitHub"> [utopyin/effect-orpc](https://github.com/utopyin/effect-orpc) - Effect integration for oRPC.
- <img src="assets/icons/github.svg" alt="GitHub"> [Sebastian-Prisacariu/effect-trpc](https://github.com/Sebastian-Prisacariu/effect-trpc) - tRPC-style ergonomics for Effect apps. Experimental.
- <img src="assets/icons/github.svg" alt="GitHub"> [adamjosefus/fx-fetch](https://github.com/adamjosefus/fx-fetch) - Immutable, clonable HTTP fetching built on Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [TheDevMinerTV/typed-at-rest](https://github.com/TheDevMinerTV/typed-at-rest) - Typesafe HTTP handlers and clients backed by Effect Schema.
- <img src="assets/icons/github.svg" alt="GitHub"> [mac-monet/effect-domain](https://github.com/mac-monet/effect-domain) - Single source of truth for an API, derived into servers and clients. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [thomasfosterau/effect-jsonapi](https://github.com/thomasfosterau/effect-jsonapi) - Define and implement JSON:API-compliant APIs. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [gabeins/effect-jsonapi](https://github.com/gabeins/effect-jsonapi) - JSON:API spec support for Effect. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [Dr-Nikson/effect-grpc](https://github.com/Dr-Nikson/effect-grpc) - gRPC and Protobuf for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [erikshestopal/effect-protobuf](https://github.com/erikshestopal/effect-protobuf) - Generate Effect Schemas from `.proto` files and encode or decode binary, ProtoJSON, and text formats. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [modevol-com/gqloom](https://github.com/modevol-com/gqloom) - GraphQL schema and resolvers from runtime types, with an Effect Schema adapter.
- <img src="assets/icons/github.svg" alt="GitHub"> [egriff38/effect-graphql](https://github.com/egriff38/effect-graphql) - Prototype code-first GraphQL on Effect Schema and RPC. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [anomalyco/effect-http-recorder](https://github.com/anomalyco/effect-http-recorder) - Record Effect HTTP and WebSocket traffic once, replay from JSON cassettes in tests. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [joepjoosten/odata-effect](https://github.com/joepjoosten/odata-effect) - Tree-shakable OData V2 and V4 client for SAP services with code generation.
- <img src="assets/icons/github.svg" alt="GitHub"> [successkrisz/effect-packages](https://github.com/successkrisz/effect-packages) - `effect-lambda` AWS Lambda wrappers and `effect-oauth-client`, an OAuth 2.0 client credentials helper for the v4 HttpClient.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/multipasta](https://github.com/tim-smart/multipasta) - Cross-platform multipart parser used by `@effect/platform`.

### OpenAPI and code generation

- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/openapi-gen](https://github.com/tim-smart/openapi-gen) - Generate Effect HTTP clients from OpenAPI specs.
- <img src="assets/icons/github.svg" alt="GitHub"> [lucas-barake/openapi-gen](https://github.com/lucas-barake/openapi-gen) - Generate Effect Schema types and HttpClient implementations from OpenAPI specs.
- <img src="assets/icons/github.svg" alt="GitHub"> [jbt95/openapi-effect](https://github.com/jbt95/openapi-effect) - Generate Effect Schema and HTTP clients from OpenAPI 3.0 and 3.1. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [astahmer/typed-openapi](https://github.com/astahmer/typed-openapi) - Headless TypeScript API client generator with Effect Schema output.
- <img src="assets/icons/github.svg" alt="GitHub"> [orval-labs/orval](https://github.com/orval-labs/orval) - OpenAPI client generator with an `@orval/effect` target.
- <img src="assets/icons/github.svg" alt="GitHub"> [daotl/ts-to-effect-schema](https://github.com/daotl/ts-to-effect-schema) - Generate Effect Schemas from TypeScript types and interfaces.
- <img src="assets/icons/github.svg" alt="GitHub"> [use-drzl/drzl](https://github.com/use-drzl/drzl) - Drizzle codegen with `@drzl/generator-effect` and `@drzl/generator-effect-http` targets.
- <img src="assets/icons/github.svg" alt="GitHub"> [Michael4d45/effect-schema-generator](https://github.com/Michael4d45/effect-schema-generator) - Effect Schema generator.

### Schema, data types, and utilities

- <img src="assets/icons/github.svg" alt="GitHub"> [joepjoosten/effect-avro](https://github.com/joepjoosten/effect-avro) - Five `@effect-avro` packages for Avro schemas and binary data. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-json](https://github.com/PaulJPhilp/effect-json) - Schema-driven JSON serialization.
- <img src="assets/icons/npm.svg" alt="npm"> [effect-yaml](https://www.npmjs.com/package/effect-yaml) - YAML utilities from the Effect 2 era.
- <img src="assets/icons/github.svg" alt="GitHub"> [osbytes/standard-schema-faker](https://github.com/osbytes/standard-schema-faker) - Seeded fake data for Standard Schema validators, Effect Schema included.
- <img src="assets/icons/github.svg" alt="GitHub"> [saiashirwad/effect-grammar](https://github.com/saiashirwad/effect-grammar) - Effect Schema, but for text formats. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [tvshevchuk/effect-schema-geojson](https://github.com/tvshevchuk/effect-schema-geojson) - Schemas for GeoJSON types.
- <img src="assets/icons/github.svg" alt="GitHub"> [leonitousconforti/effect-schemas](https://github.com/leonitousconforti/effect-schemas) - Shared schemas used across the author's projects. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [arckit-dev/effect](https://github.com/arckit-dev/effect) - Schema utilities for domain modeling with branded types.
- <img src="assets/icons/github.svg" alt="GitHub"> [just-be-dev/effect-typed-id](https://github.com/just-be-dev/effect-typed-id) - TypeID spec implementation. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [rjdellecese/effect-units](https://github.com/rjdellecese/effect-units) - Typed quantities and unit conversions checked by the type system. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [parischap/effect-libs](https://github.com/parischap/effect-libs) - Date and number parsing and formatting, sscanf and sprintf templating, pretty printing, and ANSI styles.
- <img src="assets/icons/github.svg" alt="GitHub"> [overengineeringstudio/effect-utils](https://github.com/overengineeringstudio/effect-utils) - Utilities and integrations collected from the author's production apps.
- <img src="assets/icons/github.svg" alt="GitHub"> [spencerbeggs/effected](https://github.com/spencerbeggs/effected) - Git, commands, and YAML services, the app plumbing Effect leaves to you. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [ayronforge/haversack](https://github.com/ayronforge/haversack) - Typed services for email, analytics, feature flags, payments, auth, and blob storage.
- <img src="assets/icons/github.svg" alt="GitHub"> [nunofyobiz/effect-extras](https://github.com/nunofyobiz/effect-extras) - Convenience wrappers and data structures that fill gaps in core modules. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [ggallovalle/effext](https://github.com/ggallovalle/effext) - Extensions exploring what belongs in the standard library.
- <img src="assets/icons/github.svg" alt="GitHub"> [ethanniser/effect-distributed-lock](https://github.com/ethanniser/effect-distributed-lock) - Distributed semaphore with pluggable backends. In active development.
- <img src="assets/icons/github.svg" alt="GitHub"> [jacob-ebey/mini-effect](https://github.com/jacob-ebey/mini-effect) - Minimal lazy, composable, cancellable effect system, not compatible with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [typesugar/typesugar](https://github.com/typesugar/typesugar) - Compile-time macros for TypeScript with an Effect package.
- <img src="assets/icons/github.svg" alt="GitHub"> [nikelborm/effect-garden](https://github.com/nikelborm/effect-garden) - Monorepo of small Effect packages and an oxlint import plugin.
- <img src="assets/icons/github.svg" alt="GitHub"> [systemfsoftware/systemfsoftware](https://github.com/systemfsoftware/systemfsoftware) - Effect libraries and developer tooling for functional software architecture, spanning v3 and v4.
- <img src="assets/icons/github.svg" alt="GitHub"> [dataquail/effect-server-utils](https://github.com/dataquail/effect-server-utils) - Utility libraries for Effect servers.

### Databases and storage

- <img src="assets/icons/github.svg" alt="GitHub"> [drizzle-team/drizzle-orm](https://github.com/drizzle-team/drizzle-orm) - Drizzle added an `@effect/sql-pg` driver with an async design for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [relsunkaev/effect-qb](https://github.com/relsunkaev/effect-qb) - Typed SQL query builder that renders per dialect and executes through Effect SQL. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/effect-sql-kysely](https://github.com/TylorS/effect-sql-kysely) - `@effect/sql` interface for Kysely.
- <img src="assets/icons/github.svg" alt="GitHub"> [gloomweaver/effql](https://github.com/gloomweaver/effql) - Code generation in the style of sqlc for Effect SQL, driven by PostgreSQL introspection.
- <img src="assets/icons/github.svg" alt="GitHub"> [eikster-dk/sqlc-gen-better-typescript](https://github.com/eikster-dk/sqlc-gen-better-typescript) - Plugin for sqlc that emits Effect v4 or plain async code from SQL queries.
- <img src="assets/icons/github.svg" alt="GitHub"> [m9tdev/effect-prisma-generator](https://github.com/m9tdev/effect-prisma-generator) - Prisma generator that emits an Effect service wrapper with typed errors and transactions. Supports Effect v3 and v4.
- <img src="assets/icons/github.svg" alt="GitHub"> [Cyberistic/Prisma-Effect-Schema-Generator](https://github.com/Cyberistic/Prisma-Effect-Schema-Generator) - Prisma generator that emits an Effect Schema per model. Supports Effect v3 and v4.
- <img src="assets/icons/github.svg" alt="GitHub"> [al3xanderwalker/redfx](https://github.com/al3xanderwalker/redfx) - Redis with typed commands, schema-typed keys, pub/sub and streams as Effect Streams, and caching.
- <img src="assets/icons/github.svg" alt="GitHub"> [6qat/effect-redis](https://github.com/6qat/effect-redis) - Effect wrapper for Redis.
- <img src="assets/icons/github.svg" alt="GitHub"> [jmenga/effect-dynamodb](https://github.com/jmenga/effect-dynamodb) - DynamoDB ORM with schema and geo packages. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [evryg-org/effect-contrib](https://github.com/evryg-org/effect-contrib) - Neo4j client, schema, and Vitest helpers from Evryg. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [jellologic/starrocks-sdk](https://github.com/jellologic/starrocks-sdk) - StarRocks SDK with Effect services, Stream Load, and a query builder.
- <img src="assets/icons/github.svg" alt="GitHub"> [alphaiv-project/supabase-effect](https://github.com/alphaiv-project/supabase-effect) - Supabase JS client wrapper. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [fwal/effect-firebase](https://github.com/fwal/effect-firebase) - Firebase adapters for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [jbt95/effect-kv](https://github.com/jbt95/effect-kv) - Cloudflare KV wrapper.
- <img src="assets/icons/github.svg" alt="GitHub"> [jpb06/effect-cloudflare-r2-layer](https://github.com/jpb06/effect-cloudflare-r2-layer) - Layer for Cloudflare R2 storage.
- <img src="assets/icons/web.svg" alt="Website"> [Cortex](https://cortex-vector.vercel.app) - Effect-native ORM for vector databases.
- <img src="assets/icons/github.svg" alt="GitHub"> [Lucas-Bur/effect-memfs](https://github.com/Lucas-Bur/effect-memfs) - Platform-agnostic in-memory file system. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [leonitousconforti/eftar](https://github.com/leonitousconforti/eftar) - GNU ustar tar implementation on Effect streams.

### Local-first and sync

- <img src="assets/icons/github.svg" alt="GitHub"> [lucas-barake/effect-local](https://github.com/lucas-barake/effect-local) - Local-first mutation log on Effect v4, Automerge, SQLite, and Effect RPC.
- <img src="assets/icons/github.svg" alt="GitHub"> [evelant/synchrotron](https://github.com/evelant/synchrotron) - Offline-first multiplayer sync for PostgreSQL with PGlite that converges without conflict resolution code.
- <img src="assets/icons/github.svg" alt="GitHub"> [michaelshimeles/self-sync](https://github.com/michaelshimeles/self-sync) - Sync engine for SvelteKit with reactive IndexedDB state, WebSockets, and PostgreSQL or MySQL adapters.
- <img src="assets/icons/github.svg" alt="GitHub"> [typeonce-dev/sync-engine-web](https://github.com/typeonce-dev/sync-engine-web) - Sync engine on React, Web Workers, Effect, and Loro.
- <img src="assets/icons/github.svg" alt="GitHub"> [kevmodrome/tablinum](https://github.com/kevmodrome/tablinum) - Local-first data layer backed by Nostr.
- <img src="assets/icons/github.svg" alt="GitHub"> [humanlayer/effect-durable-streams](https://github.com/humanlayer/effect-durable-streams) - Durable Streams protocol server as a portable Effect v4 app with swappable platform Layers.

### Messaging, jobs, workflows, and actors

- <img src="assets/icons/github.svg" alt="GitHub"> [TeamWarp/effect-mq](https://github.com/TeamWarp/effect-mq) - Background jobs with schema-first definitions, a worker runtime, and a PostgreSQL store inside your Drizzle schema. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [erikshestopal/effect-inngest](https://github.com/erikshestopal/effect-inngest) - Durable workflows with Inngest, Effect-native steps, and Layer injection.
- <img src="assets/icons/github.svg" alt="GitHub"> [fdarian/effect-hatchet](https://github.com/fdarian/effect-hatchet) - Hatchet bindings with an in-memory implementation for tests.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/effect-genserver](https://github.com/tim-smart/effect-genserver) - GenServer-style actors that work with cluster, RPC, or Atom.
- <img src="assets/icons/github.svg" alt="GitHub"> [cevr/effect-encore](https://github.com/cevr/effect-encore) - Declarative actors and durable workflows for `@effect/cluster`. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [crosshatch/liminal](https://github.com/crosshatch/liminal) - Effect, actors, and Cloudflare.
- <img src="assets/icons/npm.svg" alt="npm"> [rivetkit/effect](https://www.npmjs.com/package/@rivetkit/effect) - Effect SDK for Rivet actors. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [golemcloud/effect-golem](https://github.com/golemcloud/effect-golem) - Author durable Golem agents with <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [CodeForBreakfast/eventsourcing](https://github.com/CodeForBreakfast/eventsourcing) - Event sourcing library on Effect, with `bun-test-effect` and ESLint packages in the same repo.
- <img src="assets/icons/github.svg" alt="GitHub"> [Mufraggi/effect-workflow-viz](https://github.com/Mufraggi/effect-workflow-viz) - Remix dashboard for visualizing `@effect/workflow` runs.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/cluster-docker](https://github.com/tim-smart/cluster-docker) - Effect Cluster running in Docker.

### Cloud and infrastructure

- <img src="assets/icons/github.svg" alt="GitHub"> [alchemy-run/alchemy](https://github.com/alchemy-run/alchemy) - Infrastructure as code written as Effect programs.
- <img src="assets/icons/github.svg" alt="GitHub"> [alchemy-run/distilled](https://github.com/alchemy-run/distilled) - Effect-native SDKs for cloud providers generated from Smithy and OpenAPI models. Includes `distilled-aws`.
- <img src="assets/icons/github.svg" alt="GitHub"> [alchemy-run/distilled-cloudflare](https://github.com/alchemy-run/distilled-cloudflare) - Typed Cloudflare SDK for R2, KV, Workers, Queues, Workflows, and DNS.
- <img src="assets/icons/github.svg" alt="GitHub"> [floydspace/effect-aws](https://github.com/floydspace/effect-aws) - AWS SDK clients and a Lambda handler wrapped as Effect services. Effect v3. [Docs](https://floydspace.github.io/effect-aws).
- <img src="assets/icons/github.svg" alt="GitHub"> [kondaurovDev/aws-sdk](https://github.com/kondaurovDev/aws-sdk) - Generates an AWS SDK wrapper for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [kondaurovDev/effortless-aws](https://github.com/kondaurovDev/effortless-aws) - Code-first serverless framework that derives AWS infrastructure from handlers.
- <img src="assets/icons/github.svg" alt="GitHub"> [danieljvdm/effect-cf](https://github.com/danieljvdm/effect-cf) - Primitives for Cloudflare Workers and bindings. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [jbt95/effect-cf](https://github.com/jbt95/effect-cf) - Typed clients for Cloudflare Workers with schema validation.
- <img src="assets/icons/github.svg" alt="GitHub"> [nr1brolyfan/effectful-cloudflare](https://github.com/nr1brolyfan/effectful-cloudflare) - Interact with Cloudflare resources. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [aryasaatvik/effect-platform-cloudflare](https://github.com/aryasaatvik/effect-platform-cloudflare) - Run an Effect HTTP router as a Cloudflare Worker. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [backpine/effect-worker](https://github.com/backpine/effect-worker) - Cloudflare Worker with request-scoped database connections via `HttpApiMiddleware`.
- <img src="assets/icons/github.svg" alt="GitHub"> [acoyfellow/lab](https://github.com/acoyfellow/lab) - Sandboxed isolates on Cloudflare Workers with typed capabilities.
- <img src="assets/icons/github.svg" alt="GitHub"> [jonbeckman/cf-container-orchestrator](https://github.com/jonbeckman/cf-container-orchestrator) - Orchestrate Cloudflare Containers with replica sets and restart policies.
- <img src="assets/icons/github.svg" alt="GitHub"> [siebix-studio/effect-reusables](https://github.com/siebix-studio/effect-reusables) - Cloudflare Browser Run and Resend services. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [entropitor/terraform-providers](https://github.com/entropitor/terraform-providers) - Write Terraform providers in TypeScript with Effect. [Blog post](https://entropitor.com/blog/terraform-provider-in-typescript).
- <img src="assets/icons/github.svg" alt="GitHub"> [leonitousconforti/the-moby-effect](https://github.com/leonitousconforti/the-moby-effect) - Moby and Docker API client. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [leonitousconforti/the-wireguard-effect](https://github.com/leonitousconforti/the-wireguard-effect) - Cross-platform WireGuard client on wireguard-go. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [leonitousconforti/efffrida](https://github.com/leonitousconforti/efffrida) - Compatibility layers between Frida's JavaScript API and Effect packages.
- <img src="assets/icons/github.svg" alt="GitHub"> [flux-control-solutions/Effect-modbus-rs](https://github.com/flux-control-solutions/Effect-modbus-rs) - Modbus communication over Rust napi bindings. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [jpb06/effect-github-actions-layer](https://github.com/jpb06/effect-github-actions-layer) - Layer for the GitHub Actions toolkit.
- <img src="assets/icons/github.svg" alt="GitHub"> [jpb06/effect-octokit-layer](https://github.com/jpb06/effect-octokit-layer) - Layer for Octokit.

### AI, agents, and MCP

- <img src="assets/icons/github.svg" alt="GitHub"> [betalyra/effect-uai](https://github.com/betalyra/effect-uai) - Building blocks for agentic AI with provider packages. Effect v4. [Docs](https://effect-uai.betalyra.com).
- <img src="assets/icons/github.svg" alt="GitHub"> [humanlayer/fold](https://github.com/humanlayer/fold) - Provider-agnostic, isomorphic agent core with an optional coding agent, CLI, and TUI.
- <img src="assets/icons/github.svg" alt="GitHub"> [doeixd/effect-agent](https://github.com/doeixd/effect-agent) - Agent execution kernel: sessions, runs, turns, steering, and typed lifecycle events.
- <img src="assets/icons/github.svg" alt="GitHub"> [danieljvdm/effect-agent](https://github.com/danieljvdm/effect-agent) - Agent engine package. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [mpsuesser/effect-autoagent](https://github.com/mpsuesser/effect-autoagent) - Define agents as declarative blueprints and run them as Effect services.
- <img src="assets/icons/github.svg" alt="GitHub"> [clavia-labs/tardigrade](https://github.com/clavia-labs/tardigrade) - Framework for durable, modular agents.
- <img src="assets/icons/github.svg" alt="GitHub"> [tylerjrbuell/reactive-agents-ts](https://github.com/tylerjrbuell/reactive-agents-ts) - Composable LLM agent framework where the same code runs in every runtime.
- <img src="assets/icons/github.svg" alt="GitHub"> [spiritledsoftware/commissary](https://github.com/spiritledsoftware/commissary) - Composable agent builder. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [semantiv-ai/effectful](https://github.com/semantiv-ai/effectful) - LLM task pipelines compiled to Effect programs.
- <img src="assets/icons/github.svg" alt="GitHub"> [saiashirwad/roop](https://github.com/saiashirwad/roop) - Coding agent runtime built on Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [lvndry/jazz](https://github.com/lvndry/jazz) - CLI for creating autonomous agents with real-world capabilities.
- <img src="assets/icons/github.svg" alt="GitHub"> [betalyra/cuttlekit](https://github.com/betalyra/cuttlekit) - Generative UI toolkit that streams LLM-built interfaces into a sandbox.
- <img src="assets/icons/github.svg" alt="GitHub"> [kitlangton/rune](https://github.com/kitlangton/rune) - Give an agent one confined TypeScript-shaped code tool instead of a tool catalog.
- <img src="assets/icons/github.svg" alt="GitHub"> [acoyfellow/effect-agents](https://github.com/acoyfellow/effect-agents) - Five example agents on Effect v4 with one local and one Cloudflare entrypoint. [Site](https://effect-agents.coey.dev).
- <img src="assets/icons/github.svg" alt="GitHub"> [mpsuesser/effect-claudecode](https://github.com/mpsuesser/effect-claudecode) - Write Claude Code plugins with Effect v4: hooks, skills, settings, and MCP servers.
- <img src="assets/icons/github.svg" alt="GitHub"> [k3dom/pi-plugins](https://github.com/k3dom/pi-plugins) - Single-purpose plugins for the pi agent harness built on Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [egriff38/effect-herdr](https://github.com/egriff38/effect-herdr) - SDK for the herdr terminal agent multiplexer. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/effect-mcp](https://github.com/tim-smart/effect-mcp) - MCP server that gives agents Effect documentation search. Published as `effect-mcp` and as a Docker image.
- <img src="assets/icons/github.svg" alt="GitHub"> [niklaserik/effect-mcp](https://github.com/niklaserik/effect-mcp) - Another MCP server for fetching Effect docs.
- <img src="assets/icons/github.svg" alt="GitHub"> [cipher-rc5/firecrawl-mcp-effect](https://github.com/cipher-rc5/firecrawl-mcp-effect) - Self-hostable Firecrawl MCP server.
- <img src="assets/icons/github.svg" alt="GitHub"> [seanwessmith/bun-mcp](https://github.com/seanwessmith/bun-mcp) - MCP server for Bun documentation.
- <img src="assets/icons/github.svg" alt="GitHub"> [dearlordylord/huly-mcp](https://github.com/dearlordylord/huly-mcp) - MCP server and CLI for the Huly platform.
- <img src="assets/icons/github.svg" alt="GitHub"> [glassBead-tc/audius-mcp-atris](https://github.com/glassBead-tc/audius-mcp-atris) - Code Mode MCP server for the Audius music platform.
- <img src="assets/icons/github.svg" alt="GitHub"> [yovanoc/effect-cdp](https://github.com/yovanoc/effect-cdp) - Chrome DevTools Protocol client on `@effect/platform` with streaming. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [LordCoughmann/effect-libs-browser](https://github.com/LordCoughmann/effect-libs-browser) - Browser automation for Workers and edge runtimes with Playwright, Stagehand, and CDP packages. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [acoyfellow/ralphwiggums](https://github.com/acoyfellow/ralphwiggums) - Prompt-driven browser automation on Cloudflare Workers.
- <img src="assets/icons/github.svg" alt="GitHub"> [acoyfellow/unsurf](https://github.com/acoyfellow/unsurf) - Turn any website into a typed API.
- <img src="assets/icons/github.svg" alt="GitHub"> [millionco/expect](https://github.com/millionco/expect) - Lets agents test your code in a real browser.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-ai-cli](https://github.com/PaulJPhilp/effect-ai-cli) - CLI for the `@effect/ai` package.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-supermemory](https://github.com/PaulJPhilp/effect-supermemory) - Supermemory client.
- <img src="assets/icons/github.svg" alt="GitHub"> [erayack/effect-gpt](https://github.com/erayack/effect-gpt) - Transformer LLM built from scratch with Effect, covering tokenization, training, and inference.
- <img src="assets/icons/github.svg" alt="GitHub"> [mikearnaldi/effect-torch](https://github.com/mikearnaldi/effect-torch) - Experimental tensor library with a Rust backend on candle, by the Effect author.
- <img src="assets/icons/github.svg" alt="GitHub"> [lloydrichards/edu_effect-rag-builder](https://github.com/lloydrichards/edu_effect-rag-builder) - RAG prototype with ChromaDB.

### Agent skills and rules

- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/skills](https://github.com/Effect-TS/skills) - Official skills for skill-aware coding agents, including the [effect-v3-to-v4](https://www.skills.sh/effect-ts/skills/effect-v3-to-v4) migration skill.
- <img src="assets/icons/github.svg" alt="GitHub"> [kitlangton/skills](https://github.com/kitlangton/skills) - Kit Langton's local Effect skill. Pairs with Effect Solutions in [learning.md](learning.md#courses-and-guides).
- <img src="assets/icons/github.svg" alt="GitHub"> [joelhooks/effectts-skills](https://github.com/joelhooks/effectts-skills) - Effect v4 skill covering services, layers, schemas, errors, testing, HTTP, CLI, and config.
- <img src="assets/icons/github.svg" alt="GitHub"> [betalyra/effect-skills](https://github.com/betalyra/effect-skills) - Opinionated best-practice guidelines for Effect codebases.
- <img src="assets/icons/github.svg" alt="GitHub"> [mrevanzak/effect-ts-skills](https://github.com/mrevanzak/effect-ts-skills) - Skills compatible with skills.sh.
- <img src="assets/icons/github.svg" alt="GitHub"> [artimath/effect-skills](https://github.com/artimath/effect-skills) - Skills for AI coding agents.
- <img src="assets/icons/github.svg" alt="GitHub"> [teeverc/effect-ts](https://github.com/teeverc/effect-ts) - Skills for Effect v3 and v4.
- <img src="assets/icons/github.svg" alt="GitHub"> [pekochan069/effect-skills](https://github.com/pekochan069/effect-skills) - Skills for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [andrueandersoncs/claude-skill-effect-ts](https://github.com/andrueandersoncs/claude-skill-effect-ts) - Claude Code plugin with skills, commands, and agents.
- <img src="assets/icons/github.svg" alt="GitHub"> [ivanacostarubio/effect-ts](https://github.com/ivanacostarubio/effect-ts) - Claude Code skill for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [adamthewilliam/promptbuddy-agent-skills](https://github.com/adamthewilliam/promptbuddy-agent-skills) - Skills for Expo, Effect, and Bun.
- <img src="assets/icons/web.svg" alt="Website"> [Effect best practices on skills.sh](https://skills.sh/makisuo/skills/effect-best-practices) - Skill by Makisuo.
- <img src="assets/icons/github.svg" alt="GitHub"> [dojofoo/dojofoo](https://github.com/dojofoo/dojofoo) - Coding practices and courses with an Effect package.
- <img src="assets/icons/github.svg" alt="GitHub"> [mpsuesser/pi-effect-harness](https://github.com/mpsuesser/pi-effect-harness) - Extension for pi that enforces Effect v4 practices during agent sessions.
- <img src="assets/icons/github.svg" alt="GitHub"> [mpsuesser/opencode-effect-enforcer](https://github.com/mpsuesser/opencode-effect-enforcer) - OpenCode plugin with 44 regex and AST rules that block Effect anti-patterns in real time.
- <img src="assets/icons/github.svg" alt="GitHub"> [doeixd/opencode-ralph-rlm](https://github.com/doeixd/opencode-ralph-rlm) - OpenCode plugin for Ralph outer-loop development, built on Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [iskandarsulaili/hermes-ultimate-coding](https://github.com/iskandarsulaili/hermes-ultimate-coding) - Hermes agent plugins including Effect guidance.
- <img src="assets/icons/github.svg" alt="GitHub"> [directormac/effect-v4-docs](https://github.com/directormac/effect-v4-docs) - Effect v4 docs packaged for agents.
- <img src="assets/icons/github.svg" alt="GitHub"> [1045290202/effect-ts-doc-skill](https://github.com/1045290202/effect-ts-doc-skill) - Effect v3 docs as a Chinese-language knowledge base skill.
- <img src="assets/icons/github.svg" alt="GitHub"> [FOSSforlife/effect-guides](https://github.com/FOSSforlife/effect-guides) - Personal Claude-written guides for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [dtechvision/great-repo-files](https://github.com/dtechvision/great-repo-files) - Files to add to Bun and Effect projects.
- <img src="assets/icons/article.svg" alt="Article"> [The one weird git trick that makes coding agents more Effect-ive](https://effect.website/blog/the-one-weird-git-trick-that-makes-coding-agents-more-effect-ive/) - Official guide to giving agents the Effect source.

### Testing

- <img src="assets/icons/github.svg" alt="GitHub"> [tatemz/effect-bdd](https://github.com/tatemz/effect-bdd) - Runner for Gherkin `.feature` files. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [cevr/effect-bun-test](https://github.com/cevr/effect-bun-test) - Test helpers for `bun test`.
- <img src="assets/icons/github.svg" alt="GitHub"> [wezter96/spana](https://github.com/wezter96/spana) - End-to-end testing across React Native and web from one test suite.
- <img src="assets/icons/github.svg" alt="GitHub"> [middle-ages/effect-ts-laws](https://github.com/middle-ages/effect-ts-laws) - Property-based law tests for type class instances.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/effect](https://github.com/Effect-TS/effect/tree/main/packages/tools/doctest) - `@effect/doctest` runs the examples in JSDoc as tests. <img src="assets/tags/v4.svg" alt="Effect v4">

### Logging, tracing, and observability

- <img src="assets/icons/github.svg" alt="GitHub"> [getsentry/sentry-javascript](https://github.com/getsentry/sentry-javascript) - `@sentry/effect` reports Effect errors and spans to Sentry. Supports Effect v3 and v4.
- <img src="assets/icons/github.svg" alt="GitHub"> [MapleTechLabs/maple](https://github.com/MapleTechLabs/maple) - OpenTelemetry observability platform with `@maple-dev/effect-sdk`. Runs locally as a single binary. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [Necmttn/livetrace](https://github.com/Necmttn/livetrace) - Stream Effect spans from any backend to React UIs.
- <img src="assets/icons/github.svg" alt="GitHub"> [DanielFGray/effect-devtui](https://github.com/DanielFGray/effect-devtui) - Terminal UI for Effect DevTools: traces, spans, and metrics.
- <img src="assets/icons/github.svg" alt="GitHub"> [jagreehal/effect-analyzer](https://github.com/jagreehal/effect-analyzer) - Static analysis that extracts structure, computes complexity, and draws diagrams from Effect code. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [cevr/effect-wide-event](https://github.com/cevr/effect-wide-event) - One structured event per request. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [just-be-dev/evlog-effect](https://github.com/just-be-dev/evlog-effect) - Effect bindings for evlog. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [atrim-ai/effect-span-tree-demo](https://github.com/atrim-ai/effect-span-tree-demo) - Visualize deeply nested traces with path tracking.
- <img src="assets/icons/web.svg" alt="Website"> [Lensflare](https://lensflare.dev) - macOS development observability stack for humans and agents.

### CLI and terminal

- <img src="assets/icons/github.svg" alt="GitHub"> [lloydrichards/effect-boxes](https://github.com/lloydrichards/effect-boxes) - Layout system for terminal UIs with Flex, Container, and Grid combinators. Effect v4. [Docs](https://effect-boxes.lloydrichards.dev).
- <img src="assets/icons/github.svg" alt="GitHub"> [stromseng/effective-progress](https://github.com/stromseng/effective-progress) - Progress bar for CLIs.
- <img src="assets/icons/github.svg" alt="GitHub"> [sogoiii/effect-streamdown-terminal](https://github.com/sogoiii/effect-streamdown-terminal) - Streaming markdown renderer for terminals.
- <img src="assets/icons/npm.svg" alt="npm"> [wolfcola/treeshake-check](https://www.npmjs.com/package/@wolfcola/treeshake-check) - Tree-shakeability analyzer built on `@effect/cli`.
- <img src="assets/icons/github.svg" alt="GitHub"> [davidnussio/envsec](https://github.com/davidnussio/envsec) - Secrets manager backed by native OS credential stores.
- <img src="assets/icons/github.svg" alt="GitHub"> [ccntrq/git-jira-branch](https://github.com/ccntrq/git-jira-branch) - Manage git branches for Jira tickets.

### Service SDKs and API clients

- <img src="assets/icons/github.svg" alt="GitHub"> [MateoKruk/effect-slack](https://github.com/MateoKruk/effect-slack) - Slack SDK.
- <img src="assets/icons/github.svg" alt="GitHub"> [sue27/effect-slack](https://github.com/sue27/effect-slack) - Slack SDK with retries and observability.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/dfx](https://github.com/tim-smart/dfx) - Discord library with gateway, REST, and interactions.
- <img src="assets/icons/github.svg" alt="GitHub"> [grom-dev/effect-tg](https://github.com/grom-dev/effect-tg) - Telegram bot library.
- <img src="assets/icons/github.svg" alt="GitHub"> [kondaurovDev/tg-bot-sdk](https://github.com/kondaurovDev/tg-bot-sdk) - Telegram Bot API types and client.
- <img src="assets/icons/github.svg" alt="GitHub"> [tobimori/effect-attio](https://github.com/tobimori/effect-attio) - Attio REST API on Effect's HttpClient.
- <img src="assets/icons/github.svg" alt="GitHub"> [mpsuesser/effect-prodigi](https://github.com/mpsuesser/effect-prodigi) - Prodigi print-on-demand API. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [zuub-don/tutela](https://github.com/zuub-don/tutela) - Unofficial SDK for Guardian Connect insurance APIs.
- <img src="assets/icons/github.svg" alt="GitHub"> [mannyc2/nyc-transit-kit](https://github.com/mannyc2/nyc-transit-kit) - NYC and MTA transit data APIs on Bun.
- <img src="assets/icons/github.svg" alt="GitHub"> [opsydyn/postcodesio-effect-client](https://github.com/opsydyn/postcodesio-effect-client) - Client for postcodes.io. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [triargos/sdks](https://github.com/triargos/sdks) - Procurat client. Supports Effect v3 and v4.
- <img src="assets/icons/github.svg" alt="GitHub"> [Kensei-Kimoto/kintone-effect-schema](https://github.com/Kensei-Kimoto/kintone-effect-schema) - Effect Schemas for kintone records.
- <img src="assets/icons/github.svg" alt="GitHub"> [mmlngl/effect-messagekit](https://github.com/mmlngl/effect-messagekit) - Toolkit for building and testing messaging app integrations.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/effect-obsidian](https://github.com/tim-smart/effect-obsidian) - Write Obsidian plugins with Effect.

### Authentication and authorization

- <img src="assets/icons/github.svg" alt="GitHub"> [alex-golubev/better-auth-effect-adapter](https://github.com/alex-golubev/better-auth-effect-adapter) - Better Auth database adapter for `@effect/sql`.
- <img src="assets/icons/github.svg" alt="GitHub"> [leonitousconforti/effect-oidc](https://github.com/leonitousconforti/effect-oidc) - OIDC provider primitives, JWT and JWKS, and HttpApi resource-server middleware. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [nr1brolyfan/effect-auth-poc](https://github.com/nr1brolyfan/effect-auth-poc) - Authentication toolkit proof of concept.
- <img src="assets/icons/github.svg" alt="GitHub"> [just-be-dev/gatehouse-effect](https://github.com/just-be-dev/gatehouse-effect) - RBAC, ABAC, and ReBAC authorization, ported from gatehouse-ts.
- <img src="assets/icons/github.svg" alt="GitHub"> [nmnmcc/ability](https://github.com/nmnmcc/ability) - CASL-inspired permission checks.

### Blockchain

- <img src="assets/icons/github.svg" alt="GitHub"> [julia-script/evm-effect](https://github.com/julia-script/evm-effect) - Ethereum Virtual Machine implementation in TypeScript built for debuggability. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [crosshatch/crosshatch](https://github.com/crosshatch/crosshatch) - x402 payments across EVM and Solana with stablecoins.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulRBerg/prb-effect](https://github.com/PaulRBerg/prb-effect) - Utilities for Web3, Next.js, and XState.
- <img src="assets/icons/github.svg" alt="GitHub"> [xstelea/radix-web3.js](https://github.com/xstelea/radix-web3.js) - Radix wallet, gateway, and transaction packages with `@radix-effects/sbor`. <img src="assets/tags/v4.svg" alt="Effect v4">

## <img src="assets/pills/legacy.svg" alt="Effect v3 legacy"> Effect v3 legacy

Kept because Effect 3 is still in use. Nothing here should be picked for a new Effect 4 project without checking for a v4 release first.

### Packages merged into Effect v4

- <img src="assets/icons/npm.svg" alt="npm"> [@effect/platform](https://www.npmjs.com/package/@effect/platform) - Runtime-agnostic HTTP client and server, file system, terminal, workers, and key-value store interfaces. In v4: `effect/unstable/http`, `httpapi`, `socket`, `workers`, and `process`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/rpc](https://www.npmjs.com/package/@effect/rpc) - Schema-typed RPC over HTTP, WebSocket, or workers. In v4: `effect/unstable/rpc`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/cluster](https://www.npmjs.com/package/@effect/cluster) - Entities, sharding, and messaging across processes. In v4: `effect/unstable/cluster`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/workflow](https://www.npmjs.com/package/@effect/workflow) - Durable workflows on top of cluster. In v4: `effect/unstable/workflow`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/cli](https://www.npmjs.com/package/@effect/cli) - Command-line parsing, subcommands, prompts, and help generation. In v4: `effect/unstable/cli`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/printer](https://www.npmjs.com/package/@effect/printer) - Pretty-printer for documents, with [@effect/printer-ansi](https://www.npmjs.com/package/@effect/printer-ansi) for terminal colors.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql](https://www.npmjs.com/package/@effect/sql) - SQL client, migrations, and schema-typed queries. In v4: `effect/unstable/sql`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-drizzle](https://www.npmjs.com/package/@effect/sql-drizzle) - Run Drizzle queries through `@effect/sql`. Effect v3 only. Drizzle itself now ships an `@effect/sql-pg` driver, listed under Databases and storage.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/sql-kysely](https://www.npmjs.com/package/@effect/sql-kysely) - Run Kysely queries through `@effect/sql`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/ai](https://www.npmjs.com/package/@effect/ai) - Provider-agnostic language model, tool calling, and embeddings API. In v4: `effect/unstable/ai`.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/ai-google](https://www.npmjs.com/package/@effect/ai-google) - Google Gemini provider.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/ai-amazon-bedrock](https://www.npmjs.com/package/@effect/ai-amazon-bedrock) - Amazon Bedrock provider.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/typeclass](https://www.npmjs.com/package/@effect/typeclass) - Functor, Monad, Semigroup, and other type classes.
- <img src="assets/icons/npm.svg" alt="npm"> [@effect/experimental](https://www.npmjs.com/package/@effect/experimental) - Modules under trial before they move to core, such as DevTools, event logs, and persistence. In v4: `effect/unstable/devtools`, `eventlog`, and `persistence`.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/effect-atom](https://github.com/tim-smart/effect-atom) - Reactive state for Effect v3, published as `@effect-atom/atom` with React, Solid, Vue, and LiveStore bindings. In v4 the same design ships in core as `@effect/atom-*`.

### Libraries for Effect v3

Peer dependency stops at 3.x, or no commits since before the Effect 4 release candidates.

#### State management and UI

- <img src="assets/icons/github.svg" alt="GitHub"> [ericc-ch/effect-atom-solid](https://github.com/ericc-ch/effect-atom-solid) - SolidJS bindings for effect-atom.
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/typed](https://github.com/TylorS/typed) - Web application framework on Effect with push-based streams, routing, and templating. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [VasilVelikov00/effective-ui](https://github.com/VasilVelikov00/effective-ui) - Composable UI framework built on Effect. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [ToliaGuy/reffect](https://github.com/ToliaGuy/reffect) - React bindings for Effect. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [81reap/react-effect](https://github.com/81reap/react-effect) - Package for full-stack React and Effect applications. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [pkishorez/use-effect-ts](https://github.com/pkishorez/use-effect-ts) - React hooks for running Effects. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [nemmtor/injectio](https://github.com/nemmtor/injectio) - Turn React components into Effects that can return values, for modals and dialogs opened from code. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [savkelita/tea-effect](https://github.com/savkelita/tea-effect) - The Elm Architecture for TypeScript with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [derrickbeining/effect-mvu](https://github.com/derrickbeining/effect-mvu) - Port of the Elm architecture to Effect. Last updated 2023.
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/typed-lazy-ref](https://github.com/TylorS/typed-lazy-ref) - Lazily evaluated, streaming state management. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/typed-async-data](https://github.com/TylorS/typed-async-data) - Loading, success, failure, and optimistic states for async data. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/typed-navigation](https://github.com/TylorS/typed-navigation) - Browser navigation on the Navigation API with a History API fallback. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/typed-route](https://github.com/TylorS/typed-route) - Type-safe, bidirectional route matching and interpolation on Effect Schema. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [lucas-barake/effect-form](https://github.com/lucas-barake/effect-form) - Forms with Effect Schema validation and React bindings.
- <img src="assets/icons/github.svg" alt="GitHub"> [hannoeru/formik-effect-schema](https://github.com/hannoeru/formik-effect-schema) - Effect Schema validation for Formik. Last updated 2024.

#### Framework integrations

- <img src="assets/icons/github.svg" alt="GitHub"> [mcrovero/effect-nextjs](https://github.com/mcrovero/effect-nextjs) - Typed helpers for Next.js App Router pages, layouts, server components, and actions.
- <img src="assets/icons/github.svg" alt="GitHub"> [khanetor/effect-remix](https://github.com/khanetor/effect-remix) - Adapters for using Effect in Remix loaders and actions. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [JonahPlusPlus/solid-effect](https://github.com/JonahPlusPlus/solid-effect) - Utilities for using Effect in SolidJS. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [devx-op/effectify](https://github.com/devx-op/effectify) - Monorepo of integrations: Solid bindings for effect-atom, Better Auth for Node, and more.
- <img src="assets/icons/github.svg" alt="GitHub"> [withstudiocms/studiocms](https://github.com/withstudiocms/studiocms) - Astro headless CMS whose `@withstudiocms/effect` package wraps Effect for Astro integrations.
- <img src="assets/icons/github.svg" alt="GitHub"> [nounder/effect-start](https://github.com/nounder/effect-start) - Declarative full-stack apps with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [adamgoose/raycast-effect](https://github.com/adamgoose/raycast-effect) - Write Raycast extensions with Effect. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [mikearnaldi/vite-remix-effect](https://github.com/mikearnaldi/vite-remix-effect) - Remix on Vite with Effect, by the Effect author. Last updated 2023.
- <img src="assets/icons/github.svg" alt="GitHub"> [mikearnaldi/effect-remix-stream](https://github.com/mikearnaldi/effect-remix-stream) - Streaming responses from Remix with Effect. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-Community/react](https://github.com/Effect-Community/react) - React integration with Query and Effect from the Effect 2 era. Last updated 2023.

#### HTTP, RPC, and API

- <img src="assets/icons/github.svg" alt="GitHub"> [sukovanej/effect-http](https://github.com/sukovanej/effect-http) - Declarative HTTP APIs with OpenAPI generation. Predates `HttpApi` in `@effect/platform`, which covers the same ground.
- <img src="assets/icons/github.svg" alt="GitHub"> [bastikohn/effect-grpc](https://github.com/bastikohn/effect-grpc) - gRPC with a `protoc` plugin that generates Effect services.
- <img src="assets/icons/npm.svg" alt="npm"> [semyenov/effect-graphql](https://www.npmjs.com/package/@semyenov/effect-graphql) - Type-safe GraphQL schemas and resolvers with Effect Schema.
- <img src="assets/icons/github.svg" alt="GitHub"> [nrf110/effect-gql](https://github.com/nrf110/effect-gql) - Experimental GraphQL framework for Effect.
- <img src="assets/icons/npm.svg" alt="npm"> [pothos-plugin-effect](https://www.npmjs.com/package/pothos-plugin-effect) - Pothos GraphQL plugin for resolvers that return Effects.
- <img src="assets/icons/github.svg" alt="GitHub"> [Makisuo/effect-rpc-tanstack-devtools](https://github.com/Makisuo/effect-rpc-tanstack-devtools) - TanStack Devtools panel for Effect RPC requests and timings. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/effect-http](https://github.com/tim-smart/effect-http) - Early HTTP toolkit that became `@effect/platform`. Last updated 2023.

#### OpenAPI and code generation

- <img src="assets/icons/github.svg" alt="GitHub"> [fortanix/openapi-to-effect](https://github.com/fortanix/openapi-to-effect) - Generate Effect Schema definitions from an OpenAPI document.
- <img src="assets/icons/github.svg" alt="GitHub"> [davidgoli/effect-openapi-server-gen](https://github.com/davidgoli/effect-openapi-server-gen) - Generate an HttpApi server from an OpenAPI schema. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [omar-dulaimi/supawatch](https://github.com/omar-dulaimi/supawatch) - Compiles a PostgreSQL schema into validators, types, and API layers, with an Effect target.
- <img src="assets/icons/github.svg" alt="GitHub"> [fasciajs/fascia](https://github.com/fasciajs/fascia) - Describe a schema once, emit zod, arktype, effect, or valibot, and OpenAPI and JSON Schema.

#### Schema, data types, and utilities

- <img src="assets/icons/github.svg" alt="GitHub"> [jessekelly881/effect-schema-compilers](https://github.com/jessekelly881/effect-schema-compilers) - Compile Effect Schemas to fakers, empty values, and semigroups. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [jessekelly881/effect-types](https://github.com/jessekelly881/effect-types) - Schemas organized by data type. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [AMar4enko/effect-schema-compiler](https://github.com/AMar4enko/effect-schema-compiler) - Ergonomic compiler for Effect Schema ASTs.
- <img src="assets/icons/github.svg" alt="GitHub"> [AMar4enko/effect-schema-avro](https://github.com/AMar4enko/effect-schema-avro) - Avro codec for Effect Schema. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [jessekelly881/effect-yaml](https://github.com/jessekelly881/effect-yaml) - YAML parsing helpers.
- <img src="assets/icons/github.svg" alt="GitHub"> [srinitude/effect-json-schema](https://github.com/srinitude/effect-json-schema) - Effect Schema adapter for Standard JSON Schema V1.
- <img src="assets/icons/github.svg" alt="GitHub"> [harrysolovay/standard-json-schema](https://github.com/harrysolovay/standard-json-schema) - Turn Standard Schema types, Effect Schema included, into JSON Schema. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [middle-ages/effect-schema-viz](https://github.com/middle-ages/effect-schema-viz) - Render Effect Schemas as Graphviz diagrams.
- <img src="assets/icons/github.svg" alt="GitHub"> [dudeofawesome/effect-schemas](https://github.com/dudeofawesome/effect-schemas) - Common data schemas.
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/typed-id](https://github.com/TylorS/typed-id) - UUID, NanoID, and ULID generation. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [TylorS/templeffect](https://github.com/TylorS/templeffect) - Templating with Effect Schema parameter validation and nesting. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-mdx](https://github.com/PaulJPhilp/effect-mdx) - Parse, compile, and manipulate MDX. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-regex](https://github.com/PaulJPhilp/effect-regex) - Regex processing CLI and library. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-env](https://github.com/PaulJPhilp/effect-env) - Environment variables with schema validation. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [emergente-labs/effect-env](https://github.com/emergente-labs/effect-env) - Environment variable configuration with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [hychen/effect-builder](https://github.com/hychen/effect-builder) - Immutable builder pattern with runtime validation. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [sukovanej/effect-monocle](https://github.com/sukovanej/effect-monocle) - Port of monocle-ts optics. Effect v3, last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [middle-ages/effect-ts-folds](https://github.com/middle-ages/effect-ts-folds) - Recursion schemes for Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [nipakke/effect-pantry](https://github.com/nipakke/effect-pantry) - Add-ons for Node.js apps such as typed events.
- <img src="assets/icons/github.svg" alt="GitHub"> [lishaduck/effect-utils](https://github.com/lishaduck/effect-utils) - Small utilities for Effect. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [embedded-insurance/effect-use](https://github.com/embedded-insurance/effect-use) - Collection of Effect services. Last updated 2025.
- <img src="assets/icons/npm.svg" alt="npm"> [limwa/effect-bits](https://www.npmjs.com/package/@limwa/effect-bits) - Utilities for working with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [konkerdotdev/effect-ts-prelude](https://github.com/konkerdotdev/effect-ts-prelude) - Prelude re-exports. Effect v3, last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [jpb06/effect-errors](https://github.com/jpb06/effect-errors) - Pretty error reporting with source snippets and spans.
- <img src="assets/icons/github.svg" alt="GitHub"> [btravstack/unthrown](https://github.com/btravstack/unthrown) - Errors as values with a separate defect channel, with an Effect adapter.
- <img src="assets/icons/github.svg" alt="GitHub"> [spion/effect-tagged-contextual-error](https://github.com/spion/effect-tagged-contextual-error) - Tagged errors with context, inspired by Rust's anyhow. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [harrysolovay/toyffect](https://github.com/harrysolovay/toyffect) - Toy re-implementation of `Effect.gen` and `Context.Tag` for learning how Effect works. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [clayroach/effect-sugar](https://github.com/clayroach/effect-sugar) - For-comprehension style `gen` blocks via esbuild, tsc, and TS plugin transforms. Last updated 2025.

#### Databases and storage

- <img src="assets/icons/github.svg" alt="GitHub"> [emergente-labs/effect-sql-model](https://github.com/emergente-labs/effect-sql-model) - Compile Effect Schema and `@effect/sql` model definitions into Drizzle tables.
- <img src="assets/icons/npm.svg" alt="npm"> [effect-sql-kysely](https://www.npmjs.com/package/effect-sql-kysely) - Kysely with `@effect/sql`, typed queries.
- <img src="assets/icons/github.svg" alt="GitHub"> [Fredx87/effect-kysely](https://github.com/Fredx87/effect-kysely) - Kysely adapter. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [pigoz/effect-sql](https://github.com/pigoz/effect-sql) - Relational databases with Effect, from before `@effect/sql`. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/sqlfx](https://github.com/tim-smart/sqlfx) - The SQL toolkit that became `@effect/sql`. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [samuelho-dev/prisma-effect-kysely](https://github.com/samuelho-dev/prisma-effect-kysely) - Generate Kysely-compatible Effect Schemas from Prisma models.
- <img src="assets/icons/github.svg" alt="GitHub"> [jessekelly881/zenstack-effect](https://github.com/jessekelly881/zenstack-effect) - ZenStack plugin for Effect. Last updated 2025.
- <img src="assets/icons/npm.svg" alt="npm"> [akoenig/effect-sql-inline-migrations](https://www.npmjs.com/package/@akoenig/effect-sql-inline-migrations) - Migration loader that does not read the file system.
- <img src="assets/icons/github.svg" alt="GitHub"> [doubleloop-io/effect-mongodb](https://github.com/doubleloop-io/effect-mongodb) - MongoDB toolkit with typed collections.
- <img src="assets/icons/github.svg" alt="GitHub"> [Gialicus/effect-ts-mongodb](https://github.com/Gialicus/effect-ts-mongodb) - MongoDB driver wrapper. Last updated 2023.
- <img src="assets/icons/github.svg" alt="GitHub"> [envoy1084/effect-redis](https://github.com/envoy1084/effect-redis) - Redis bindings with transactions and pipelines.
- <img src="assets/icons/github.svg" alt="GitHub"> [Vortex-Dimension-Digital/effect-redis-bun](https://github.com/Vortex-Dimension-Digital/effect-redis-bun) - KeyValueStore implementation on Bun's Redis client.
- <img src="assets/icons/npm.svg" alt="npm"> [effect-supabase](https://www.npmjs.com/package/effect-supabase) - Supabase client wrapper.
- <img src="assets/icons/github.svg" alt="GitHub"> [jys9962/effect-ts-typeorm](https://github.com/jys9962/effect-ts-typeorm) - TypeORM integration.
- <img src="assets/icons/github.svg" alt="GitHub"> [jessekelly881/effect-idb](https://github.com/jessekelly881/effect-idb) - IndexedDB wrapper.
- <img src="assets/icons/github.svg" alt="GitHub"> [juemrami/effect-idb](https://github.com/juemrami/effect-idb) - IndexedDB wrapper with a transaction API.
- <img src="assets/icons/github.svg" alt="GitHub"> [nounder/effect-memfs](https://github.com/nounder/effect-memfs) - In-memory file system for mocking and tests. Last updated 2025.

#### Local-first and sync

- <img src="assets/icons/github.svg" alt="GitHub"> [dxos/dxos](https://github.com/dxos/dxos) - Local-first platform and the Composer workspace app. Its ECHO database uses Effect Schema. Publishes `@dxos/effect`.

#### Messaging, jobs, workflows, and actors

- <img src="assets/icons/github.svg" alt="GitHub"> [spiko-tech/effect-messaging](https://github.com/spiko-tech/effect-messaging) - Message broker toolkit with AMQP and NATS packages.
- <img src="assets/icons/github.svg" alt="GitHub"> [floydspace/effect-kafka](https://github.com/floydspace/effect-kafka) - Kafka producers and consumers. [Docs](https://floydspace.github.io/effect-kafka). Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-actor](https://github.com/PaulJPhilp/effect-actor) - Actor model on Effect. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [ReventlessDev/reventless-core](https://github.com/ReventlessDev/reventless-core) - Event-sourced CQRS framework in ReScript with an Effect package.
- <img src="assets/icons/github.svg" alt="GitHub"> [embedded-insurance/diachronic](https://github.com/embedded-insurance/diachronic) - Evolving durable programs on Temporal with Effect Schema. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [emre-yildiz-dev/effect-graph](https://github.com/emre-yildiz-dev/effect-graph) - Superstep graph engine with typed state, reducers, routing, and human-in-the-loop.
- <img src="assets/icons/github.svg" alt="GitHub"> [sellooh/effect-cluster-via-sst](https://github.com/sellooh/effect-cluster-via-sst) - Effect Cluster deployed with the SST Cluster component. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-Deprecated/query](https://github.com/Effect-Deprecated/query) - Request batching and caching from Effect 2, now built into core. Archived.

#### Cloud and infrastructure

- <img src="assets/icons/github.svg" alt="GitHub"> [floydspace/aws-lambda-effect-runtime](https://github.com/floydspace/aws-lambda-effect-runtime) - Experimental custom Lambda runtime for Effect. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [pierskarsenbarg/effect-pulumi](https://github.com/pierskarsenbarg/effect-pulumi) - Effect composability for Pulumi programs.
- <img src="assets/icons/github.svg" alt="GitHub"> [triargos/effect-hcloud](https://github.com/triargos/effect-hcloud) - Hetzner Cloud client.
- <img src="assets/icons/github.svg" alt="GitHub"> [fiws/effect-libreoffice](https://github.com/fiws/effect-libreoffice) - Convert documents through LibreOffice.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-Deprecated/process](https://github.com/Effect-Deprecated/process) - Child process library ported from zio-process. Archived.

#### AI, agents, and MCP

- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/EffectiveAgent](https://github.com/PaulJPhilp/EffectiveAgent) - Application framework for concurrent AI agents. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [jambudipa/dynamic-flow](https://github.com/jambudipa/dynamic-flow) - Generate complete LLM execution graphs at runtime. Last updated 2025.
- <img src="assets/icons/npm.svg" alt="npm"> [ai-task-runner-effect](https://www.npmjs.com/package/ai-task-runner-effect) - Runner for named AI tasks with validator-agnostic codecs.
- <img src="assets/icons/npm.svg" alt="npm"> [hypen-space/gloop-effect](https://www.npmjs.com/package/@hypen-space/gloop-effect) - Typed, observable agent loops on gloop-loop.
- <img src="assets/icons/github.svg" alt="GitHub"> [kpritam/cliq](https://github.com/kpritam/cliq) - CLI coding agent with multiple providers, written to show how coding agents work. [Docs](https://kpritam.github.io/cliq). Last updated 2025.
- <img src="assets/icons/npm.svg" alt="npm"> [claude-code-effect](https://www.npmjs.com/package/claude-code-effect) - SDK for the Claude Code CLI with typed `generateText` and `generateObject`.
- <img src="assets/icons/npm.svg" alt="npm"> [mannyc1/pi-agent-effect](https://www.npmjs.com/package/@mannyc1/pi-agent-effect) - Effect platform adapter for pi-agent-core.
- <img src="assets/icons/github.svg" alt="GitHub"> [Kastalien-Research/mcp-effect-sdk](https://github.com/Kastalien-Research/mcp-effect-sdk) - MCP SDK for the 2025-07-28 spec written with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [paoloricciuti/tmcp](https://github.com/paoloricciuti/tmcp) - Framework-agnostic MCP SDK with an `@tmcp/adapter-effect` schema adapter.
- <img src="assets/icons/github.svg" alt="GitHub"> [glassBead-tc/effect-airtable-mcp](https://github.com/glassBead-tc/effect-airtable-mcp) - Airtable MCP server.
- <img src="assets/icons/github.svg" alt="GitHub"> [grzegorz-bielski/extrospec](https://github.com/grzegorz-bielski/extrospec) - Toy RAG CLI on LlamaIndex. Last updated 2024.

#### Testing

- <img src="assets/icons/github.svg" alt="GitHub"> [Jobflow-io/effect-playwright](https://github.com/Jobflow-io/effect-playwright) - Playwright as Effect services and layers for browser automation and scraping.
- <img src="assets/icons/github.svg" alt="GitHub"> [isthatcentered/testing-effect-ts-lightning-talk-examples](https://github.com/isthatcentered/testing-effect-ts-lightning-talk-examples) - Code from an Effect Days 2025 lightning talk on testing. Last updated 2025.

#### Logging, tracing, and observability

- <img src="assets/icons/github.svg" alt="GitHub"> [sukovanej/effect-log](https://github.com/sukovanej/effect-log) - Logger implementations. Effect v3, last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [rashedInt32/effect-logger-pretty](https://github.com/rashedInt32/effect-logger-pretty) - Colored console logger, silent in production. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [IMax153/effect-ts-logging](https://github.com/IMax153/effect-ts-logging) - Logging with correlation and pluggable backends. Last updated 2023.
- <img src="assets/icons/github.svg" alt="GitHub"> [observe-ts/observe-ts](https://github.com/observe-ts/observe-ts) - Structural observability for Effect programs. Last updated 2025.
- <img src="assets/icons/npm.svg" alt="npm"> [jrkienle/posthog-effect](https://www.npmjs.com/package/@jrkienle/posthog-effect) - PostHog bindings.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-Deprecated/otel](https://github.com/Effect-Deprecated/otel) - OpenTelemetry from Effect 2, replaced by `@effect/opentelemetry`. Archived.

#### CLI and terminal

- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-cli-tui](https://github.com/PaulJPhilp/effect-cli-tui) - Interactive prompts and display utilities on top of `@effect/cli`. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/figlet](https://github.com/Effect-TS/figlet) - FIGlet font parser and renderer. Last updated 2024.

#### Service SDKs and API clients

- <img src="assets/icons/github.svg" alt="GitHub"> [rubywwwilde/Teleffect](https://github.com/rubywwwilde/Teleffect) - Telegram Bot API client. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [blissito/whatsapp-sdk](https://github.com/blissito/whatsapp-sdk) - WhatsApp Business API SDK. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [PaulJPhilp/effect-notion](https://github.com/PaulJPhilp/effect-notion) - Proxy server for the Notion API. Last updated 2025.
- <img src="assets/icons/npm.svg" alt="npm"> [effect-stripe](https://www.npmjs.com/package/effect-stripe) - Stripe wrapper.
- <img src="assets/icons/github.svg" alt="GitHub"> [Malvolio/printify-effect](https://github.com/Malvolio/printify-effect) - Printify print-on-demand API. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [betalyra/wordpress-effect](https://github.com/betalyra/wordpress-effect) - WordPress client.
- <img src="assets/icons/github.svg" alt="GitHub"> [kevinmichaelchen/book-effect](https://github.com/kevinmichaelchen/book-effect) - Book metadata from Hardcover, Open Library, and Google Books. Last updated 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [tvsudhir2/edlink-effect-sdk](https://github.com/tvsudhir2/edlink-effect-sdk) - Edlink SDK.

#### Authentication and authorization

- <img src="assets/icons/github.svg" alt="GitHub"> [betalyra/sorry-dave](https://github.com/betalyra/sorry-dave) - Authorization library. Last updated 2025.

#### Blockchain

- <img src="assets/icons/github.svg" alt="GitHub"> [evmts/voltaire](https://github.com/evmts/voltaire) - Ethereum primitives with a `voltaire-effect` package for typed contract calls.
- <img src="assets/icons/github.svg" alt="GitHub"> [HeliosLang/effect](https://github.com/HeliosLang/effect) - Effect version of the Helios off-chain library for Cardano.

## <img src="assets/pills/tools.svg" alt="Dev tools"> Development tools

### Editors and language service

- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/language-service](https://github.com/Effect-TS/language-service) - TypeScript plugin with diagnostics for missing errors in `yield*`, unused layers, and more. Works in any editor that uses tsserver.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/tsgo](https://github.com/Effect-TS/tsgo) - TypeScript-Go build with the Effect language service and an LSP-based linter.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/vscode-extension](https://github.com/Effect-TS/vscode-extension) - VS Code extension with a DevTools panel for traces, metrics, and fiber inspection. [Marketplace](https://marketplace.visualstudio.com/items?itemName=effectful-tech.effect-vscode).
- <img src="assets/icons/github.svg" alt="GitHub"> [RATIU5/zed-effect-tsgo](https://github.com/RATIU5/zed-effect-tsgo) - Zed extension for `@effect/tsgo`. [Zed extension page](https://zed.dev/extensions/effect-language-service-tsgo).
- <img src="assets/icons/github.svg" alt="GitHub"> [kriegcloud/effect-jetbrains-plugin](https://github.com/kriegcloud/effect-jetbrains-plugin) - JetBrains plugin for `@effect/tsgo` and DevTools.
- <img src="assets/icons/github.svg" alt="GitHub"> [rashedInt32/effect-error-pretty.nvim](https://github.com/rashedInt32/effect-error-pretty.nvim) - Neovim formatter that renders Effect, Stream, and Layer type mismatches as channel-aware boxes.
- <img src="assets/icons/github.svg" alt="GitHub"> [nikelborm/effect-language-service-repro](https://github.com/nikelborm/effect-language-service-repro) - Reproductions for language service issues.

### Linting and code style

- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/eslint-plugin](https://github.com/Effect-TS/eslint-plugin) - Official ESLint rules.
- <img src="assets/icons/github.svg" alt="GitHub"> [OperationalFallacy/biome-effect-linting-rules](https://github.com/OperationalFallacy/biome-effect-linting-rules) - Biome Grit rules for Effect, published as `@catenarycloud/linteffect`.
- <img src="assets/icons/github.svg" alt="GitHub"> [mpsuesser/oxlint-plugin-effect](https://github.com/mpsuesser/oxlint-plugin-effect) - Opinionated oxlint plugin for <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [mpsuesser/effect-oxlint](https://github.com/mpsuesser/effect-oxlint) - Write oxlint custom rules with <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [cevr/effect-oxlint](https://github.com/cevr/effect-oxlint) - Strict, non-type-aware oxlint plugin that blocks Promise control flow and imperative failure handling in Effect code. <img src="assets/tags/v4.svg" alt="Effect v4">
- <img src="assets/icons/github.svg" alt="GitHub"> [EduSantosBrito/effect-rules](https://github.com/EduSantosBrito/effect-rules) - Rules for oxlint that catch untyped error channels and unsafe boundary parsing.
- <img src="assets/icons/github.svg" alt="GitHub"> [zaniluca/effect-rules](https://github.com/zaniluca/effect-rules) - Rules for oxlint with companion remediation skills.
- <img src="assets/icons/github.svg" alt="GitHub"> [opsydyn/oxlint-effect](https://github.com/opsydyn/oxlint-effect) - Rules for oxlint.
- <img src="assets/icons/github.svg" alt="GitHub"> [tiara-stack/native-tooling](https://github.com/tiara-stack/native-tooling) - Rules for tsgolint.
- <img src="assets/icons/github.svg" alt="GitHub"> [effect-app/tsgolint-fork](https://github.com/effect-app/tsgolint-fork) - Fork of oxlint-tsgolint with a model codegen subcommand.
- <img src="assets/icons/github.svg" alt="GitHub"> [aiya000/haskellish-effect-ts](https://github.com/aiya000/haskellish-effect-ts) - ESLint plugin and config enforcing Haskell-like discipline.
- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/slopcop](https://github.com/Effect-TS/slopcop) - GitHub bot that triages pull requests on the Effect repo. Written with Effect, deployed to Cloudflare via Alchemy.

### Scaffolding and migration

- <img src="assets/icons/github.svg" alt="GitHub"> [Effect-TS/codemod](https://github.com/Effect-TS/codemod) - Official codemods. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [aridyckovsky/effect-migrate](https://github.com/aridyckovsky/effect-migrate) - Migration toolkit for adopting Effect with coding agents.
- <img src="assets/icons/github.svg" alt="GitHub"> [rxssula/effect-http-starter](https://github.com/rxssula/effect-http-starter) - Scaffold HTTP server projects with CRUD endpoints, health checks, Scalar docs, and OpenAPI output.
- <img src="assets/icons/github.svg" alt="GitHub"> [lloydrichards/stack-effect](https://github.com/lloydrichards/stack-effect) - Scaffold applications with community conventions.
- <img src="assets/icons/github.svg" alt="GitHub"> [samuelho-dev/monorepo-library-generator](https://github.com/samuelho-dev/monorepo-library-generator) - Generate Effect libraries in Nx monorepos.
- <img src="assets/icons/github.svg" alt="GitHub"> [coffeeispower/create-ben-app](https://github.com/coffeeispower/create-ben-app) - Bun, Effect, and Next.js scaffolder.
- <img src="assets/icons/github.svg" alt="GitHub"> [mmlngl/steiger](https://github.com/mmlngl/steiger) - Scaffold DDD modules with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [jpb06/bump-package](https://github.com/jpb06/bump-package) - GitHub Action that bumps versions from commit messages, written with Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [jpb06/coverage-badges-action](https://github.com/jpb06/coverage-badges-action) - GitHub Action for coverage badges, written with Effect.
- <img src="assets/icons/npm.svg" alt="npm"> [effect-patterns-cli](https://www.npmjs.com/package/effect-patterns-cli) - Search and install patterns from EffectPatterns.

### Playgrounds and visualizers

- <img src="assets/icons/web.svg" alt="Website"> [Effect Playground](https://effect.website/play) - Official in-browser editor.
- <img src="assets/icons/github.svg" alt="GitHub"> [kitlangton/visual-effect](https://github.com/kitlangton/visual-effect) - Interactive visualizations of Effect programs. [Site](https://effect.kitlangton.com).
- <img src="assets/icons/web.svg" alt="Website"> [effect-atom visualizer](https://effect-atom.kitlangton.com) - Interactive examples for effect-atom, also by Kit Langton.
- <img src="assets/icons/github.svg" alt="GitHub"> [topheman/effect-viz](https://github.com/topheman/effect-viz) - Runtime visualizer with fiber tree, timeline, and execution log. [Site](https://effect-viz.vercel.app).
- <img src="assets/icons/web.svg" alt="Website"> [effect-ts.vercel.app playground](https://effect-ts.vercel.app/playground) - Browser-only playground with no server.
- <img src="assets/icons/github.svg" alt="GitHub"> [srdjan/visual-effect-deno-ssr](https://github.com/srdjan/visual-effect-deno-ssr) - Interactive visualizations rendered server-side with Deno.

## Effect in other languages

Ports and libraries that borrow Effect's design outside TypeScript.

- <img src="assets/icons/github.svg" alt="GitHub"> [Industrial/id_effect](https://github.com/Industrial/id_effect) - Rust `Effect<A, E, R>` with context, layers, and pipe.
- <img src="assets/icons/github.svg" alt="GitHub"> [Almaju/effect-rs](https://github.com/Almaju/effect-rs) - Functional effect framework for Rust inspired by Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [SylphxAI/effect](https://github.com/SylphxAI/effect) - Functional programming utilities for Dart inspired by Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [tim-smart/elemental](https://github.com/tim-smart/elemental) - Effect system and dependency management for Dart. Last updated 2024.
- <img src="assets/icons/github.svg" alt="GitHub"> [lachenmayer/SwiftEffect](https://github.com/lachenmayer/SwiftEffect) - Experimental effect system for Swift inspired by ZIO and Effect.
- <img src="assets/icons/github.svg" alt="GitHub"> [kevin-lee/effectie](https://github.com/kevin-lee/effectie) - Tool for FP effect libraries in Scala.
- <img src="assets/icons/web.svg" alt="Website"> [ZIO](https://zio.dev) - The Scala library Effect's design descends from.
- <img src="assets/icons/github.svg" alt="GitHub"> [thefrontside/effection](https://github.com/thefrontside/effection) - Structured concurrency for JavaScript, a different design. Has an `@effectionx/effect-ts` bridge.

## Other lists

- <img src="assets/icons/github.svg" alt="GitHub"> [m9tdev/awesome-effect](https://github.com/m9tdev/awesome-effect) - Earlier list, last updated July 2025.
- <img src="assets/icons/github.svg" alt="GitHub"> [evryg-org/awesome-effect-ts](https://github.com/evryg-org/awesome-effect-ts) - Short list from Evryg.
- <img src="assets/icons/github.svg" alt="GitHub"> [betalyra/awesome-effect-ts](https://github.com/betalyra/awesome-effect-ts) - List from Betalyra.
- <img src="assets/icons/github.svg" alt="GitHub"> [lvndry/awesome-effect-ts](https://github.com/lvndry/awesome-effect-ts) - List with a contribution checklist.
- <img src="assets/icons/github.svg" alt="GitHub"> [sundaray/awesome-effect](https://github.com/sundaray/awesome-effect) - Learning resources.
- <img src="assets/icons/github.svg" alt="GitHub"> [marbemac/llms-effect](https://github.com/marbemac/llms-effect) - Repositories picked for LLM-assisted learning.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Entries must exist, must be reachable, and must say what the thing does. Run `bun run check` before opening a pull request.
