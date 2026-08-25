# Awesome Effect

Libraries, tools, apps, and learning material for [Effect](https://effect.website), the TypeScript library for typed errors, dependency injection, concurrency, and streams.

Effect 4 is the current major. The list is split by it: Effect v4 core is what ships with Effect 4, Ecosystem libraries are third-party packages that work next to it, and Effect v3 legacy holds the packages that were merged into core plus libraries still pinned to `effect@3`. Tools, apps, examples, and learning resources follow.

Last updated: 2026-08-25.

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
- [Applications](#applications)
- [Examples, templates, and starters](#examples-templates-and-starters)
- [Resources](#resources)
  - [Courses and guides](#courses-and-guides)
  - [Patterns and reference](#patterns-and-reference)
  - [Articles](#articles)
  - [Videos and talks](#videos-and-talks)
  - [Podcasts](#podcasts)
  - [Community](#community)
  - [Companies using Effect](#companies-using-effect)
  - [Effect in other languages](#effect-in-other-languages)
  - [Other lists](#other-lists)

## Effect v4 core

### Links

- [Documentation (v4)](https://effect.website/docs/v4) - Docs for the Effect 4 release candidate.
- [Documentation (v3)](https://effect.website/docs/v3) - Docs for Effect 3.
- [API reference (v4)](https://effect.website/docs/v4/api) - Generated API docs for Effect 4.
- [API reference (v3)](https://effect.website/docs/v3/api) - Generated API docs for Effect 3.
- [Blog](https://effect.website/blog) - Release notes, recaps, and announcements.
- [This Week in Effect](https://effect.website/blog?category=this-week-in-effect#blog-grid) - Weekly newsletter with releases, community projects, and events. Most entries in this list were first announced there.
- [Community hub](https://effect.website/community-hub) - Meetup calendar, social links, and event submission form.
- [Effect jobs](https://effect.website/effect-jobs) - Job board for roles that use Effect.
- [Adoption partners](https://effect.website/adoption-partners) - Consultancies that help teams adopt Effect.
- [Myths about Effect](https://effect.website/myths) - Official page answering common objections.
- [Effect-TS/effect](https://github.com/Effect-TS/effect) - The monorepo. The `main` branch is Effect 4.
- [Merch store](https://effect.website/merch/) - Effect-branded items.

### Core packages

Published from the Effect-TS/effect monorepo at the shared v4 version. Packages that only exist for Effect 3 are under Effect v3 legacy.

- [effect](https://www.npmjs.com/package/effect) - The core library: Effect, Layer, Schema, Stream, Config, Metric, Cache, and more. In v4 it also holds what used to be separate packages under `effect/unstable/*`: ai, cli, cluster, devtools, eventlog, http, httpapi, jsonschema, observability, persistence, process, reactivity, rpc, schema, socket, sql, workflow, and workers.
- [@effect/platform-node](https://www.npmjs.com/package/@effect/platform-node) - Node.js implementations of the platform interfaces.
- [@effect/platform-bun](https://www.npmjs.com/package/@effect/platform-bun) - Bun implementations of the platform interfaces.
- [@effect/platform-browser](https://www.npmjs.com/package/@effect/platform-browser) - Browser implementations of the platform interfaces.
- [@effect/platform-deno](https://www.npmjs.com/package/@effect/platform-deno) - Deno implementations of the platform interfaces.
- [@effect/sql-pg](https://www.npmjs.com/package/@effect/sql-pg) - PostgreSQL driver.
- [@effect/sql-pglite](https://www.npmjs.com/package/@effect/sql-pglite) - PGlite driver for PostgreSQL in WebAssembly.
- [@effect/sql-mysql2](https://www.npmjs.com/package/@effect/sql-mysql2) - MySQL driver.
- [@effect/sql-mssql](https://www.npmjs.com/package/@effect/sql-mssql) - Microsoft SQL Server driver.
- [@effect/sql-clickhouse](https://www.npmjs.com/package/@effect/sql-clickhouse) - ClickHouse driver.
- [@effect/sql-libsql](https://www.npmjs.com/package/@effect/sql-libsql) - libSQL and Turso driver.
- [@effect/sql-d1](https://www.npmjs.com/package/@effect/sql-d1) - Cloudflare D1 driver.
- [@effect/sql-sqlite-node](https://www.npmjs.com/package/@effect/sql-sqlite-node) - SQLite driver for Node.js.
- [@effect/sql-sqlite-bun](https://www.npmjs.com/package/@effect/sql-sqlite-bun) - SQLite driver for Bun.
- [@effect/sql-sqlite-wasm](https://www.npmjs.com/package/@effect/sql-sqlite-wasm) - SQLite driver for browsers via WebAssembly.
- [@effect/sql-sqlite-react-native](https://www.npmjs.com/package/@effect/sql-sqlite-react-native) - SQLite driver for React Native.
- [@effect/sql-sqlite-do](https://www.npmjs.com/package/@effect/sql-sqlite-do) - SQLite driver for Cloudflare Durable Objects.
- [@effect/ai-openai](https://www.npmjs.com/package/@effect/ai-openai) - OpenAI provider.
- [@effect/ai-anthropic](https://www.npmjs.com/package/@effect/ai-anthropic) - Anthropic provider.
- [@effect/ai-openrouter](https://www.npmjs.com/package/@effect/ai-openrouter) - OpenRouter provider.
- [@effect/ai-openai-compat](https://www.npmjs.com/package/@effect/ai-openai-compat) - Provider for OpenAI-compatible APIs.
- [@effect/atom-react](https://www.npmjs.com/package/@effect/atom-react) - React bindings for the Atom reactive state module. The v3 predecessor is `@effect-atom/atom-react`, listed under Effect v3 legacy.
- [@effect/atom-solid](https://www.npmjs.com/package/@effect/atom-solid) - SolidJS bindings for Atom.
- [@effect/atom-vue](https://www.npmjs.com/package/@effect/atom-vue) - Vue bindings for Atom.
- [@effect/opentelemetry](https://www.npmjs.com/package/@effect/opentelemetry) - Export Effect spans, metrics, and logs through OpenTelemetry.
- [@effect/vitest](https://www.npmjs.com/package/@effect/vitest) - `it.effect`, `it.live`, `it.scoped`, and TestClock helpers for Vitest.
- [@effect/openapi-generator](https://www.npmjs.com/package/@effect/openapi-generator) - Generate Schema types, HTTP clients, and HttpApi modules from OpenAPI specs.
- [@effect/language-service](https://www.npmjs.com/package/@effect/language-service) - TypeScript language service plugin with Effect-specific diagnostics, quick fixes, and refactors.
- [@effect/tsgo](https://www.npmjs.com/package/@effect/tsgo) - TypeScript-Go build with the Effect language service compiled in. Includes an LSP-based linter.
- [@effect/eslint-plugin](https://www.npmjs.com/package/@effect/eslint-plugin) - ESLint rules for Effect projects, such as `dprint` formatting and no-import-from-barrel.
- [@effect/docgen](https://www.npmjs.com/package/@effect/docgen) - Documentation generator that type-checks the examples in JSDoc.
- [@effect/build-utils](https://www.npmjs.com/package/@effect/build-utils) - Build scripts used to package Effect libraries.

### Official tooling and repos

- [Effect-TS/effect-smol](https://github.com/Effect-TS/effect-smol) - Where Effect 4 was developed before it moved to the main repo. Kept for history.
- [Effect-TS/docgen](https://github.com/Effect-TS/docgen) - Source for `@effect/docgen`.
- [Effect-TS/build-utils](https://github.com/Effect-TS/build-utils) - Source for `@effect/build-utils`.
- [Effect-TS/website](https://github.com/Effect-TS/website) - Source for effect.website, built with Astro.
- [Effect-TS/discord-bot](https://github.com/Effect-TS/discord-bot) - The community Discord bot, written with Effect.
- [Effect-TS/wa-sqlite](https://github.com/Effect-TS/wa-sqlite) - Fork of wa-sqlite used by `@effect/sql-sqlite-wasm`.
- [Effect-TS/next-release-action](https://github.com/Effect-TS/next-release-action) - GitHub Action for staged release branches from changesets.

## Ecosystem libraries

Third-party libraries that work next to Effect 4 or whose peer range does not exclude it.

### State management and UI

- [sproott/effect-atom-svelte](https://github.com/sproott/effect-atom-svelte) - Svelte bindings for Effect Atom. Effect v4.
- [nhattran998/tanstack-db-atom](https://github.com/nhattran998/tanstack-db-atom) - Atoms that wrap TanStack DB collections and queries.
- [typeonce-dev/effect-xstate](https://github.com/typeonce-dev/effect-xstate) - XState actor integration for Effect Atom. Effect v4.
- [foldkit/foldkit](https://github.com/foldkit/foldkit) - Frontend framework built on Effect, with Elm-style update loops, a UI component set, DevTools MCP, and server rendering. [Site](https://foldkit.dev).
- [tarkaworks/foldocs](https://github.com/tarkaworks/foldocs) - Documentation site framework built on Foldkit.
- [stefvw93/weft](https://github.com/stefvw93/weft) - Reactive DOM library where every node is an Effect.
- [m9tdev/verrex](https://github.com/m9tdev/verrex) - UI framework where the A, E, R channels of an Effect survive from every leaf of the view tree to the root.
- [doeixd/effect-atom-jsx](https://github.com/doeixd/effect-atom-jsx) - Fine-grained JSX runtime with Layer-provided services, async atoms, and optimistic actions. Effect v4.
- [lself1022/effer](https://github.com/lself1022/effer) - UI library built on lit-html with Effect at the core.
- [stax-ui/stax](https://github.com/stax-ui/stax) - Reactive UI framework based on Effect primitives.
- [Thiladev/effect-view](https://github.com/Thiladev/effect-view) - Write React function components as Effects. Effect v4.
- [bmvantunes/effect-view-server](https://github.com/bmvantunes/effect-view-server) - Turns validated source streams into typed snapshots and deltas for React and other clients. Effect v4.
- [frondruntime/frond](https://github.com/frondruntime/frond) - Frontend runtime for React and MobX-facing application state.
- [SuttonKyle/effect-ts-react-stable-hooks](https://github.com/SuttonKyle/effect-ts-react-stable-hooks) - Port of fp-ts-react-stable-hooks to Effect. Last updated 2024.
- [Inalegwu/EffectCanvas](https://github.com/Inalegwu/EffectCanvas) - Canvas renderer for React driven by Effect.
- [timurrakhimzhan/unitflow](https://github.com/timurrakhimzhan/unitflow) - Effect-first state manager.
- [Handfish/effstate](https://github.com/Handfish/effstate) - Actor-based state management built on Effect.
- [zaymonoid/katha](https://github.com/zaymonoid/katha) - State management with saga-pattern side effects on Effect's structured concurrency.
- [run4w4y/effect-state-tree](https://github.com/run4w4y/effect-state-tree) - Experimental state tree with immutable snapshots and typed commits for Effect and Schema.
- [typeonce-dev/effect-machine](https://github.com/typeonce-dev/effect-machine) - Schema-first state machines and statecharts. Home of the proposed Machine API while it incubates. Effect v4.
- [cevr/effect-machine](https://github.com/cevr/effect-machine) - Schema-first state machines with compile-time transition checks, state-scoped effects, and persistence.
- [umpire-tools/umpire](https://github.com/umpire-tools/umpire) - Reactive derived state for forms with interdependent options. Effect v4.
- [carloitaben/conform-to-effect](https://github.com/carloitaben/conform-to-effect) - Conform helpers that validate forms with Effect Schema.
- [react-hook-form/resolvers](https://github.com/react-hook-form/resolvers) - Includes an Effect Schema resolver for React Hook Form.
- [Alette Signal](https://alette-os.com) - Frontend data fetching library built with Effect.
- [julia-script/effect-motion](https://github.com/julia-script/effect-motion) - Animation primitives on Effect. Effect v4.

### Framework integrations

- [voidhashcom/effect-query](https://github.com/voidhashcom/effect-query) - TanStack Query adapter that works with Effect RPC and HttpApi clients. Effect v4.
- [tiesen243/effect-tanstack-query](https://github.com/tiesen243/effect-tanstack-query) - Bridge Effect HttpApi clients into TanStack Query options. Effect v4.
- [EthanShoeDev/effect-tanstack-start](https://github.com/EthanShoeDev/effect-tanstack-start) - Serve Effect HttpApi from TanStack Start.
- [artisanstreet/svelte-effect-runtime](https://github.com/artisanstreet/svelte-effect-runtime) - Effect runtime for Svelte components.
- [RATIU5/sveltekit-effect-runtime](https://github.com/RATIU5/sveltekit-effect-runtime) - Wrappers for running Effect in SvelteKit handlers, loaders, and actions. Effect v4.
- [kuroski/effect-svelte](https://github.com/kuroski/effect-svelte) - Run Effect programs in SvelteKit load and remote functions with error, redirect, and form handling. Effect v3.
- [heddendorp/effect-angular](https://github.com/heddendorp/effect-angular) - Angular adapters for Effect Platform HttpClient and Effect RPC. Effect v4.
- [glitchkids/press.gk](https://github.com/glitchkids/press.gk) - Git-based CMS for Astro with an Effect runtime and Cloudflare deployment.
- [honojs/middleware](https://github.com/honojs/middleware) - Contains `@hono/effect-validator`, a Hono validator middleware for Effect Schema.
- [kylobyte-dev/keel](https://github.com/kylobyte-dev/keel) - Fastify 5 backend framework with Effect Schema as type provider and controllers as Effect services.
- [daotl/fastify-type-provider-effect-schema](https://github.com/daotl/fastify-type-provider-effect-schema) - Effect Schema type provider for Fastify.
- [tatemz/effect-htmx](https://github.com/tatemz/effect-htmx) - Effect Platform, Bun, MVC, and HTMX.
- [PatrickOgilvie/popcomputer-web](https://github.com/PatrickOgilvie/popcomputer-web) - Inertia.js-style server-driven SPA adapter for Hono on Cloudflare with Effect.
- [rjdellecese/confect](https://github.com/rjdellecese/confect) - Convex with Effect: define schemas, validators, and functions as Effect services.
- [austinm911/effect-zero](https://github.com/austinm911/effect-zero) - Effect-backed server adapters for Zero sync mutators. Supports Effect v3 and v4.
- [realms-labs/effect-zero](https://github.com/realms-labs/effect-zero) - Another Effect integration for Zero mutators.
- [osuki-dev/vite-plugin-effect](https://github.com/osuki-dev/vite-plugin-effect) - Vite plugin exposing a backend API and RPC gateway as a virtual client module. Effect v4.
- [effect-app/libs](https://github.com/effect-app/libs) - Application libraries from effect-app, covering API contracts, client, and Vue integration.
- [effect-native/effect-native](https://github.com/effect-native/effect-native) - Native platform tools built on Effect: cr-sqlite service, OpenRouter client, and schemas. Effect v4 packages published under `@beta`.
- [rockware-ai/nx](https://github.com/rockware-ai/nx) - Nx plugins that scaffold Effect libraries, services, and Node apps with `@effect/vitest`.

### HTTP, RPC, and API

- [utopyin/effect-orpc](https://github.com/utopyin/effect-orpc) - Effect integration for oRPC.
- [Sebastian-Prisacariu/effect-trpc](https://github.com/Sebastian-Prisacariu/effect-trpc) - tRPC-style ergonomics for Effect apps. Experimental.
- [adamjosefus/fx-fetch](https://github.com/adamjosefus/fx-fetch) - Immutable, clonable HTTP fetching built on Effect.
- [TheDevMinerTV/typed-at-rest](https://github.com/TheDevMinerTV/typed-at-rest) - Typesafe HTTP handlers and clients backed by Effect Schema.
- [mac-monet/effect-domain](https://github.com/mac-monet/effect-domain) - Single source of truth for an API, derived into servers and clients. Effect v4.
- [thomasfosterau/effect-jsonapi](https://github.com/thomasfosterau/effect-jsonapi) - Define and implement JSON:API-compliant APIs. Effect v4.
- [gabeins/effect-jsonapi](https://github.com/gabeins/effect-jsonapi) - JSON:API spec support for Effect. Effect v4.
- [Dr-Nikson/effect-grpc](https://github.com/Dr-Nikson/effect-grpc) - gRPC and Protobuf for Effect.
- [erikshestopal/effect-protobuf](https://github.com/erikshestopal/effect-protobuf) - Generate Effect Schemas from `.proto` files and encode or decode binary, ProtoJSON, and text formats. Effect v4.
- [modevol-com/gqloom](https://github.com/modevol-com/gqloom) - GraphQL schema and resolvers from runtime types, with an Effect Schema adapter.
- [egriff38/effect-graphql](https://github.com/egriff38/effect-graphql) - Prototype code-first GraphQL on Effect Schema and RPC. Effect v4.
- [anomalyco/effect-http-recorder](https://github.com/anomalyco/effect-http-recorder) - Record Effect HTTP and WebSocket traffic once, replay from JSON cassettes in tests. Effect v4.
- [joepjoosten/odata-effect](https://github.com/joepjoosten/odata-effect) - Tree-shakable OData V2 and V4 client for SAP services with code generation.
- [successkrisz/effect-packages](https://github.com/successkrisz/effect-packages) - `effect-lambda` AWS Lambda wrappers and `effect-oauth-client`, an OAuth 2.0 client credentials helper for the v4 HttpClient.
- [tim-smart/multipasta](https://github.com/tim-smart/multipasta) - Cross-platform multipart parser used by `@effect/platform`.

### OpenAPI and code generation

- [tim-smart/openapi-gen](https://github.com/tim-smart/openapi-gen) - Generate Effect HTTP clients from OpenAPI specs.
- [lucas-barake/openapi-gen](https://github.com/lucas-barake/openapi-gen) - Generate Effect Schema types and HttpClient implementations from OpenAPI specs.
- [jbt95/openapi-effect](https://github.com/jbt95/openapi-effect) - Generate Effect Schema and HTTP clients from OpenAPI 3.0 and 3.1. Effect v4.
- [astahmer/typed-openapi](https://github.com/astahmer/typed-openapi) - Headless TypeScript API client generator with Effect Schema output.
- [orval-labs/orval](https://github.com/orval-labs/orval) - OpenAPI client generator with an `@orval/effect` target.
- [daotl/ts-to-effect-schema](https://github.com/daotl/ts-to-effect-schema) - Generate Effect Schemas from TypeScript types and interfaces.
- [use-drzl/drzl](https://github.com/use-drzl/drzl) - Drizzle codegen with `@drzl/generator-effect` and `@drzl/generator-effect-http` targets.
- [Michael4d45/effect-schema-generator](https://github.com/Michael4d45/effect-schema-generator) - Effect Schema generator.

### Schema, data types, and utilities

- [joepjoosten/effect-avro](https://github.com/joepjoosten/effect-avro) - Five `@effect-avro` packages for Avro schemas and binary data. Effect v4.
- [PaulJPhilp/effect-json](https://github.com/PaulJPhilp/effect-json) - Schema-driven JSON serialization.
- [effect-yaml](https://www.npmjs.com/package/effect-yaml) - YAML utilities from the Effect 2 era.
- [osbytes/standard-schema-faker](https://github.com/osbytes/standard-schema-faker) - Seeded fake data for Standard Schema validators, Effect Schema included.
- [saiashirwad/effect-grammar](https://github.com/saiashirwad/effect-grammar) - Effect Schema, but for text formats. Effect v4.
- [tvshevchuk/effect-schema-geojson](https://github.com/tvshevchuk/effect-schema-geojson) - Schemas for GeoJSON types.
- [leonitousconforti/effect-schemas](https://github.com/leonitousconforti/effect-schemas) - Shared schemas used across the author's projects. Effect v4.
- [arckit-dev/effect](https://github.com/arckit-dev/effect) - Schema utilities for domain modeling with branded types.
- [just-be-dev/effect-typed-id](https://github.com/just-be-dev/effect-typed-id) - TypeID spec implementation. Effect v4.
- [rjdellecese/effect-units](https://github.com/rjdellecese/effect-units) - Typed quantities and unit conversions checked by the type system. Effect v4.
- [parischap/effect-libs](https://github.com/parischap/effect-libs) - Date and number parsing and formatting, sscanf and sprintf templating, pretty printing, and ANSI styles.
- [overengineeringstudio/effect-utils](https://github.com/overengineeringstudio/effect-utils) - Utilities and integrations collected from the author's production apps.
- [spencerbeggs/effected](https://github.com/spencerbeggs/effected) - Git, commands, and YAML services, the app plumbing Effect leaves to you. Effect v4.
- [ayronforge/haversack](https://github.com/ayronforge/haversack) - Typed services for email, analytics, feature flags, payments, auth, and blob storage.
- [nunofyobiz/effect-extras](https://github.com/nunofyobiz/effect-extras) - Convenience wrappers and data structures that fill gaps in core modules. Effect v4.
- [ggallovalle/effext](https://github.com/ggallovalle/effext) - Extensions exploring what belongs in the standard library.
- [ethanniser/effect-distributed-lock](https://github.com/ethanniser/effect-distributed-lock) - Distributed semaphore with pluggable backends. In active development.
- [jacob-ebey/mini-effect](https://github.com/jacob-ebey/mini-effect) - Minimal lazy, composable, cancellable effect system, not compatible with Effect.
- [typesugar/typesugar](https://github.com/typesugar/typesugar) - Compile-time macros for TypeScript with an Effect package.
- [nikelborm/effect-garden](https://github.com/nikelborm/effect-garden) - Monorepo of small Effect packages and an oxlint import plugin.
- [systemfsoftware/systemfsoftware](https://github.com/systemfsoftware/systemfsoftware) - Effect libraries and developer tooling for functional software architecture, spanning v3 and v4.
- [dataquail/effect-server-utils](https://github.com/dataquail/effect-server-utils) - Utility libraries for Effect servers.

### Databases and storage

- [drizzle-team/drizzle-orm](https://github.com/drizzle-team/drizzle-orm) - Drizzle added an `@effect/sql-pg` driver with an async design for Effect.
- [relsunkaev/effect-qb](https://github.com/relsunkaev/effect-qb) - Typed SQL query builder that renders per dialect and executes through Effect SQL. Effect v4.
- [TylorS/effect-sql-kysely](https://github.com/TylorS/effect-sql-kysely) - `@effect/sql` interface for Kysely.
- [gloomweaver/effql](https://github.com/gloomweaver/effql) - Code generation in the style of sqlc for Effect SQL, driven by PostgreSQL introspection.
- [eikster-dk/sqlc-gen-better-typescript](https://github.com/eikster-dk/sqlc-gen-better-typescript) - Plugin for sqlc that emits Effect v4 or plain async code from SQL queries.
- [m9tdev/effect-prisma-generator](https://github.com/m9tdev/effect-prisma-generator) - Prisma generator that emits an Effect service wrapper with typed errors and transactions. Supports Effect v3 and v4.
- [Cyberistic/Prisma-Effect-Schema-Generator](https://github.com/Cyberistic/Prisma-Effect-Schema-Generator) - Prisma generator that emits an Effect Schema per model. Supports Effect v3 and v4.
- [al3xanderwalker/redfx](https://github.com/al3xanderwalker/redfx) - Redis with typed commands, schema-typed keys, pub/sub and streams as Effect Streams, and caching.
- [6qat/effect-redis](https://github.com/6qat/effect-redis) - Effect wrapper for Redis.
- [jmenga/effect-dynamodb](https://github.com/jmenga/effect-dynamodb) - DynamoDB ORM with schema and geo packages. Effect v4.
- [evryg-org/effect-contrib](https://github.com/evryg-org/effect-contrib) - Neo4j client, schema, and Vitest helpers from Evryg. Effect v4.
- [jellologic/starrocks-sdk](https://github.com/jellologic/starrocks-sdk) - StarRocks SDK with Effect services, Stream Load, and a query builder.
- [alphaiv-project/supabase-effect](https://github.com/alphaiv-project/supabase-effect) - Supabase JS client wrapper. Effect v4.
- [fwal/effect-firebase](https://github.com/fwal/effect-firebase) - Firebase adapters for Effect.
- [jbt95/effect-kv](https://github.com/jbt95/effect-kv) - Cloudflare KV wrapper.
- [jpb06/effect-cloudflare-r2-layer](https://github.com/jpb06/effect-cloudflare-r2-layer) - Layer for Cloudflare R2 storage.
- [Cortex](https://cortex-vector.vercel.app) - Effect-native ORM for vector databases.
- [Lucas-Bur/effect-memfs](https://github.com/Lucas-Bur/effect-memfs) - Platform-agnostic in-memory file system. Effect v4.
- [leonitousconforti/eftar](https://github.com/leonitousconforti/eftar) - GNU ustar tar implementation on Effect streams.

### Local-first and sync

- [lucas-barake/effect-local](https://github.com/lucas-barake/effect-local) - Local-first mutation log on Effect v4, Automerge, SQLite, and Effect RPC.
- [evelant/synchrotron](https://github.com/evelant/synchrotron) - Offline-first multiplayer sync for PostgreSQL with PGlite that converges without conflict resolution code.
- [michaelshimeles/self-sync](https://github.com/michaelshimeles/self-sync) - Sync engine for SvelteKit with reactive IndexedDB state, WebSockets, and PostgreSQL or MySQL adapters.
- [typeonce-dev/sync-engine-web](https://github.com/typeonce-dev/sync-engine-web) - Sync engine on React, Web Workers, Effect, and Loro.
- [kevmodrome/tablinum](https://github.com/kevmodrome/tablinum) - Local-first data layer backed by Nostr.
- [humanlayer/effect-durable-streams](https://github.com/humanlayer/effect-durable-streams) - Durable Streams protocol server as a portable Effect v4 app with swappable platform Layers.

### Messaging, jobs, workflows, and actors

- [TeamWarp/effect-mq](https://github.com/TeamWarp/effect-mq) - Background jobs with schema-first definitions, a worker runtime, and a PostgreSQL store inside your Drizzle schema. Effect v4.
- [erikshestopal/effect-inngest](https://github.com/erikshestopal/effect-inngest) - Durable workflows with Inngest, Effect-native steps, and Layer injection.
- [fdarian/effect-hatchet](https://github.com/fdarian/effect-hatchet) - Hatchet bindings with an in-memory implementation for tests.
- [tim-smart/effect-genserver](https://github.com/tim-smart/effect-genserver) - GenServer-style actors that work with cluster, RPC, or Atom.
- [cevr/effect-encore](https://github.com/cevr/effect-encore) - Declarative actors and durable workflows for `@effect/cluster`. Effect v4.
- [crosshatch/liminal](https://github.com/crosshatch/liminal) - Effect, actors, and Cloudflare.
- [rivetkit/effect](https://www.npmjs.com/package/@rivetkit/effect) - Effect SDK for Rivet actors. Effect v4.
- [golemcloud/effect-golem](https://github.com/golemcloud/effect-golem) - Author durable Golem agents with Effect v4.
- [CodeForBreakfast/eventsourcing](https://github.com/CodeForBreakfast/eventsourcing) - Event sourcing library on Effect, with `bun-test-effect` and ESLint packages in the same repo.
- [Mufraggi/effect-workflow-viz](https://github.com/Mufraggi/effect-workflow-viz) - Remix dashboard for visualizing `@effect/workflow` runs.
- [tim-smart/cluster-docker](https://github.com/tim-smart/cluster-docker) - Effect Cluster running in Docker.

### Cloud and infrastructure

- [alchemy-run/alchemy](https://github.com/alchemy-run/alchemy) - Infrastructure as code written as Effect programs.
- [alchemy-run/distilled](https://github.com/alchemy-run/distilled) - Effect-native SDKs for cloud providers generated from Smithy and OpenAPI models. Includes `distilled-aws`.
- [alchemy-run/distilled-cloudflare](https://github.com/alchemy-run/distilled-cloudflare) - Typed Cloudflare SDK for R2, KV, Workers, Queues, Workflows, and DNS.
- [floydspace/effect-aws](https://github.com/floydspace/effect-aws) - AWS SDK clients and a Lambda handler wrapped as Effect services. Effect v3. [Docs](https://floydspace.github.io/effect-aws).
- [kondaurovDev/aws-sdk](https://github.com/kondaurovDev/aws-sdk) - Generates an AWS SDK wrapper for Effect.
- [kondaurovDev/effortless-aws](https://github.com/kondaurovDev/effortless-aws) - Code-first serverless framework that derives AWS infrastructure from handlers.
- [danieljvdm/effect-cf](https://github.com/danieljvdm/effect-cf) - Primitives for Cloudflare Workers and bindings. Effect v4.
- [jbt95/effect-cf](https://github.com/jbt95/effect-cf) - Typed clients for Cloudflare Workers with schema validation.
- [nr1brolyfan/effectful-cloudflare](https://github.com/nr1brolyfan/effectful-cloudflare) - Interact with Cloudflare resources. Effect v4.
- [aryasaatvik/effect-platform-cloudflare](https://github.com/aryasaatvik/effect-platform-cloudflare) - Run an Effect HTTP router as a Cloudflare Worker. Effect v4.
- [backpine/effect-worker](https://github.com/backpine/effect-worker) - Cloudflare Worker with request-scoped database connections via `HttpApiMiddleware`.
- [acoyfellow/lab](https://github.com/acoyfellow/lab) - Sandboxed isolates on Cloudflare Workers with typed capabilities.
- [jonbeckman/cf-container-orchestrator](https://github.com/jonbeckman/cf-container-orchestrator) - Orchestrate Cloudflare Containers with replica sets and restart policies.
- [siebix-studio/effect-reusables](https://github.com/siebix-studio/effect-reusables) - Cloudflare Browser Run and Resend services. Effect v4.
- [entropitor/terraform-providers](https://github.com/entropitor/terraform-providers) - Write Terraform providers in TypeScript with Effect. [Blog post](https://entropitor.com/blog/terraform-provider-in-typescript).
- [leonitousconforti/the-moby-effect](https://github.com/leonitousconforti/the-moby-effect) - Moby and Docker API client. Effect v4.
- [leonitousconforti/the-wireguard-effect](https://github.com/leonitousconforti/the-wireguard-effect) - Cross-platform WireGuard client on wireguard-go. Effect v4.
- [leonitousconforti/efffrida](https://github.com/leonitousconforti/efffrida) - Compatibility layers between Frida's JavaScript API and Effect packages.
- [flux-control-solutions/Effect-modbus-rs](https://github.com/flux-control-solutions/Effect-modbus-rs) - Modbus communication over Rust napi bindings. Effect v4.
- [jpb06/effect-github-actions-layer](https://github.com/jpb06/effect-github-actions-layer) - Layer for the GitHub Actions toolkit.
- [jpb06/effect-octokit-layer](https://github.com/jpb06/effect-octokit-layer) - Layer for Octokit.

### AI, agents, and MCP

- [betalyra/effect-uai](https://github.com/betalyra/effect-uai) - Building blocks for agentic AI with provider packages. Effect v4. [Docs](https://effect-uai.betalyra.com).
- [humanlayer/fold](https://github.com/humanlayer/fold) - Provider-agnostic, isomorphic agent core with an optional coding agent, CLI, and TUI.
- [doeixd/effect-agent](https://github.com/doeixd/effect-agent) - Agent execution kernel: sessions, runs, turns, steering, and typed lifecycle events.
- [danieljvdm/effect-agent](https://github.com/danieljvdm/effect-agent) - Agent engine package. Effect v4.
- [mpsuesser/effect-autoagent](https://github.com/mpsuesser/effect-autoagent) - Define agents as declarative blueprints and run them as Effect services.
- [clavia-labs/tardigrade](https://github.com/clavia-labs/tardigrade) - Framework for durable, modular agents.
- [tylerjrbuell/reactive-agents-ts](https://github.com/tylerjrbuell/reactive-agents-ts) - Composable LLM agent framework where the same code runs in every runtime.
- [spiritledsoftware/commissary](https://github.com/spiritledsoftware/commissary) - Composable agent builder. Effect v4.
- [semantiv-ai/effectful](https://github.com/semantiv-ai/effectful) - LLM task pipelines compiled to Effect programs.
- [saiashirwad/roop](https://github.com/saiashirwad/roop) - Coding agent runtime built on Effect.
- [lvndry/jazz](https://github.com/lvndry/jazz) - CLI for creating autonomous agents with real-world capabilities.
- [betalyra/cuttlekit](https://github.com/betalyra/cuttlekit) - Generative UI toolkit that streams LLM-built interfaces into a sandbox.
- [kitlangton/rune](https://github.com/kitlangton/rune) - Give an agent one confined TypeScript-shaped code tool instead of a tool catalog.
- [acoyfellow/effect-agents](https://github.com/acoyfellow/effect-agents) - Five example agents on Effect v4 with one local and one Cloudflare entrypoint. [Site](https://effect-agents.coey.dev).
- [mpsuesser/effect-claudecode](https://github.com/mpsuesser/effect-claudecode) - Write Claude Code plugins with Effect v4: hooks, skills, settings, and MCP servers.
- [k3dom/pi-plugins](https://github.com/k3dom/pi-plugins) - Single-purpose plugins for the pi agent harness built on Effect.
- [egriff38/effect-herdr](https://github.com/egriff38/effect-herdr) - SDK for the herdr terminal agent multiplexer. Effect v4.
- [tim-smart/effect-mcp](https://github.com/tim-smart/effect-mcp) - MCP server that gives agents Effect documentation search. Published as `effect-mcp` and as a Docker image.
- [niklaserik/effect-mcp](https://github.com/niklaserik/effect-mcp) - Another MCP server for fetching Effect docs.
- [cipher-rc5/firecrawl-mcp-effect](https://github.com/cipher-rc5/firecrawl-mcp-effect) - Self-hostable Firecrawl MCP server.
- [seanwessmith/bun-mcp](https://github.com/seanwessmith/bun-mcp) - MCP server for Bun documentation.
- [dearlordylord/huly-mcp](https://github.com/dearlordylord/huly-mcp) - MCP server and CLI for the Huly platform.
- [glassBead-tc/audius-mcp-atris](https://github.com/glassBead-tc/audius-mcp-atris) - Code Mode MCP server for the Audius music platform.
- [yovanoc/effect-cdp](https://github.com/yovanoc/effect-cdp) - Chrome DevTools Protocol client on `@effect/platform` with streaming. Effect v4.
- [LordCoughmann/effect-libs-browser](https://github.com/LordCoughmann/effect-libs-browser) - Browser automation for Workers and edge runtimes with Playwright, Stagehand, and CDP packages. Effect v4.
- [acoyfellow/ralphwiggums](https://github.com/acoyfellow/ralphwiggums) - Prompt-driven browser automation on Cloudflare Workers.
- [acoyfellow/unsurf](https://github.com/acoyfellow/unsurf) - Turn any website into a typed API.
- [millionco/expect](https://github.com/millionco/expect) - Lets agents test your code in a real browser.
- [PaulJPhilp/effect-ai-cli](https://github.com/PaulJPhilp/effect-ai-cli) - CLI for the `@effect/ai` package.
- [PaulJPhilp/effect-supermemory](https://github.com/PaulJPhilp/effect-supermemory) - Supermemory client.
- [erayack/effect-gpt](https://github.com/erayack/effect-gpt) - Transformer LLM built from scratch with Effect, covering tokenization, training, and inference.
- [mikearnaldi/effect-torch](https://github.com/mikearnaldi/effect-torch) - Experimental tensor library with a Rust backend on candle, by the Effect author.
- [lloydrichards/edu_effect-rag-builder](https://github.com/lloydrichards/edu_effect-rag-builder) - RAG prototype with ChromaDB.

### Agent skills and rules

- [Effect-TS/skills](https://github.com/Effect-TS/skills) - Official skills for skill-aware coding agents, including the [effect-v3-to-v4](https://www.skills.sh/effect-ts/skills/effect-v3-to-v4) migration skill.
- [kitlangton/skills](https://github.com/kitlangton/skills) - Kit Langton's local Effect skill. Pairs with Effect Solutions under Resources.
- [joelhooks/effectts-skills](https://github.com/joelhooks/effectts-skills) - Effect v4 skill covering services, layers, schemas, errors, testing, HTTP, CLI, and config.
- [betalyra/effect-skills](https://github.com/betalyra/effect-skills) - Opinionated best-practice guidelines for Effect codebases.
- [mrevanzak/effect-ts-skills](https://github.com/mrevanzak/effect-ts-skills) - Skills compatible with skills.sh.
- [artimath/effect-skills](https://github.com/artimath/effect-skills) - Skills for AI coding agents.
- [teeverc/effect-ts](https://github.com/teeverc/effect-ts) - Skills for Effect v3 and v4.
- [pekochan069/effect-skills](https://github.com/pekochan069/effect-skills) - Skills for Effect.
- [andrueandersoncs/claude-skill-effect-ts](https://github.com/andrueandersoncs/claude-skill-effect-ts) - Claude Code plugin with skills, commands, and agents.
- [ivanacostarubio/effect-ts](https://github.com/ivanacostarubio/effect-ts) - Claude Code skill for Effect.
- [adamthewilliam/promptbuddy-agent-skills](https://github.com/adamthewilliam/promptbuddy-agent-skills) - Skills for Expo, Effect, and Bun.
- [Effect best practices on skills.sh](https://skills.sh/makisuo/skills/effect-best-practices) - Skill by Makisuo.
- [dojofoo/dojofoo](https://github.com/dojofoo/dojofoo) - Coding practices and courses with an Effect package. Effect v3.
- [mpsuesser/pi-effect-harness](https://github.com/mpsuesser/pi-effect-harness) - Extension for pi that enforces Effect v4 practices during agent sessions.
- [mpsuesser/opencode-effect-enforcer](https://github.com/mpsuesser/opencode-effect-enforcer) - OpenCode plugin with 44 regex and AST rules that block Effect anti-patterns in real time.
- [doeixd/opencode-ralph-rlm](https://github.com/doeixd/opencode-ralph-rlm) - OpenCode plugin for Ralph outer-loop development, built on Effect.
- [iskandarsulaili/hermes-ultimate-coding](https://github.com/iskandarsulaili/hermes-ultimate-coding) - Hermes agent plugins including Effect guidance.
- [directormac/effect-v4-docs](https://github.com/directormac/effect-v4-docs) - Effect v4 docs packaged for agents.
- [1045290202/effect-ts-doc-skill](https://github.com/1045290202/effect-ts-doc-skill) - Effect v3 docs as a Chinese-language knowledge base skill.
- [FOSSforlife/effect-guides](https://github.com/FOSSforlife/effect-guides) - Personal Claude-written guides for Effect.
- [dtechvision/great-repo-files](https://github.com/dtechvision/great-repo-files) - Files to add to Bun and Effect projects.
- [The one weird git trick that makes coding agents more Effect-ive](https://effect.website/blog/the-one-weird-git-trick-that-makes-coding-agents-more-effect-ive/) - Official guide to giving agents the Effect source.

### Testing

- [tatemz/effect-bdd](https://github.com/tatemz/effect-bdd) - Runner for Gherkin `.feature` files. Effect v4.
- [cevr/effect-bun-test](https://github.com/cevr/effect-bun-test) - Test helpers for `bun test`.
- [wezter96/spana](https://github.com/wezter96/spana) - End-to-end testing across React Native and web from one test suite.
- [middle-ages/effect-ts-laws](https://github.com/middle-ages/effect-ts-laws) - Property-based law tests for type class instances.
- [Effect-TS/effect](https://github.com/Effect-TS/effect/tree/main/packages/tools/doctest) - `@effect/doctest` runs the examples in JSDoc as tests. Effect v4.

### Logging, tracing, and observability

- [getsentry/sentry-javascript](https://github.com/getsentry/sentry-javascript) - `@sentry/effect` reports Effect errors and spans to Sentry. Supports Effect v3 and v4.
- [MapleTechLabs/maple](https://github.com/MapleTechLabs/maple) - OpenTelemetry observability platform with `@maple-dev/effect-sdk`. Runs locally as a single binary. Effect v4.
- [Necmttn/livetrace](https://github.com/Necmttn/livetrace) - Stream Effect spans from any backend to React UIs.
- [DanielFGray/effect-devtui](https://github.com/DanielFGray/effect-devtui) - Terminal UI for Effect DevTools: traces, spans, and metrics.
- [jagreehal/effect-analyzer](https://github.com/jagreehal/effect-analyzer) - Static analysis that extracts structure, computes complexity, and draws diagrams from Effect code. Effect v4.
- [cevr/effect-wide-event](https://github.com/cevr/effect-wide-event) - One structured event per request. Effect v4.
- [just-be-dev/evlog-effect](https://github.com/just-be-dev/evlog-effect) - Effect bindings for evlog. Effect v4.
- [atrim-ai/effect-span-tree-demo](https://github.com/atrim-ai/effect-span-tree-demo) - Visualize deeply nested traces with path tracking.
- [Lensflare](https://lensflare.dev) - macOS development observability stack for humans and agents.

### CLI and terminal

- [lloydrichards/effect-boxes](https://github.com/lloydrichards/effect-boxes) - Layout system for terminal UIs with Flex, Container, and Grid combinators. Effect v4. [Docs](https://effect-boxes.lloydrichards.dev).
- [stromseng/effective-progress](https://github.com/stromseng/effective-progress) - Progress bar for CLIs.
- [sogoiii/effect-streamdown-terminal](https://github.com/sogoiii/effect-streamdown-terminal) - Streaming markdown renderer for terminals.
- [wolfcola/treeshake-check](https://www.npmjs.com/package/@wolfcola/treeshake-check) - Tree-shakeability analyzer built on `@effect/cli`.
- [davidnussio/envsec](https://github.com/davidnussio/envsec) - Secrets manager backed by native OS credential stores.
- [ccntrq/git-jira-branch](https://github.com/ccntrq/git-jira-branch) - Manage git branches for Jira tickets.

### Service SDKs and API clients

- [MateoKruk/effect-slack](https://github.com/MateoKruk/effect-slack) - Slack SDK.
- [sue27/effect-slack](https://github.com/sue27/effect-slack) - Slack SDK with retries and observability.
- [tim-smart/dfx](https://github.com/tim-smart/dfx) - Discord library with gateway, REST, and interactions.
- [grom-dev/effect-tg](https://github.com/grom-dev/effect-tg) - Telegram bot library.
- [kondaurovDev/tg-bot-sdk](https://github.com/kondaurovDev/tg-bot-sdk) - Telegram Bot API types and client.
- [tobimori/effect-attio](https://github.com/tobimori/effect-attio) - Attio REST API on Effect's HttpClient.
- [mpsuesser/effect-prodigi](https://github.com/mpsuesser/effect-prodigi) - Prodigi print-on-demand API. Effect v4.
- [zuub-don/tutela](https://github.com/zuub-don/tutela) - Unofficial SDK for Guardian Connect insurance APIs.
- [mannyc2/nyc-transit-kit](https://github.com/mannyc2/nyc-transit-kit) - NYC and MTA transit data APIs on Bun.
- [opsydyn/postcodesio-effect-client](https://github.com/opsydyn/postcodesio-effect-client) - Client for postcodes.io. Effect v4.
- [triargos/sdks](https://github.com/triargos/sdks) - Procurat client. Supports Effect v3 and v4.
- [Kensei-Kimoto/kintone-effect-schema](https://github.com/Kensei-Kimoto/kintone-effect-schema) - Effect Schemas for kintone records.
- [mmlngl/effect-messagekit](https://github.com/mmlngl/effect-messagekit) - Toolkit for building and testing messaging app integrations.
- [tim-smart/effect-obsidian](https://github.com/tim-smart/effect-obsidian) - Write Obsidian plugins with Effect.

### Authentication and authorization

- [alex-golubev/better-auth-effect-adapter](https://github.com/alex-golubev/better-auth-effect-adapter) - Better Auth database adapter for `@effect/sql`.
- [leonitousconforti/effect-oidc](https://github.com/leonitousconforti/effect-oidc) - OIDC provider primitives, JWT and JWKS, and HttpApi resource-server middleware. Effect v4.
- [nr1brolyfan/effect-auth-poc](https://github.com/nr1brolyfan/effect-auth-poc) - Authentication toolkit proof of concept.
- [just-be-dev/gatehouse-effect](https://github.com/just-be-dev/gatehouse-effect) - RBAC, ABAC, and ReBAC authorization, ported from gatehouse-ts.
- [nmnmcc/ability](https://github.com/nmnmcc/ability) - CASL-inspired permission checks.

### Blockchain

- [julia-script/evm-effect](https://github.com/julia-script/evm-effect) - Ethereum Virtual Machine implementation in TypeScript built for debuggability. Effect v4.
- [crosshatch/crosshatch](https://github.com/crosshatch/crosshatch) - x402 payments across EVM and Solana with stablecoins.
- [PaulRBerg/prb-effect](https://github.com/PaulRBerg/prb-effect) - Utilities for Web3, Next.js, and XState.
- [xstelea/radix-web3.js](https://github.com/xstelea/radix-web3.js) - Radix wallet, gateway, and transaction packages with `@radix-effects/sbor`. Effect v4.

## Effect v3 legacy

Kept because Effect 3 is still in use. Nothing here should be picked for a new Effect 4 project without checking for a v4 release first.

### Packages merged into Effect v4

- [@effect/platform](https://www.npmjs.com/package/@effect/platform) - Runtime-agnostic HTTP client and server, file system, terminal, workers, and key-value store interfaces. In v4: `effect/unstable/http`, `httpapi`, `socket`, `workers`, and `process`.
- [@effect/rpc](https://www.npmjs.com/package/@effect/rpc) - Schema-typed RPC over HTTP, WebSocket, or workers. In v4: `effect/unstable/rpc`.
- [@effect/cluster](https://www.npmjs.com/package/@effect/cluster) - Entities, sharding, and messaging across processes. In v4: `effect/unstable/cluster`.
- [@effect/workflow](https://www.npmjs.com/package/@effect/workflow) - Durable workflows on top of cluster. In v4: `effect/unstable/workflow`.
- [@effect/cli](https://www.npmjs.com/package/@effect/cli) - Command-line parsing, subcommands, prompts, and help generation. In v4: `effect/unstable/cli`.
- [@effect/printer](https://www.npmjs.com/package/@effect/printer) - Pretty-printer for documents, with [@effect/printer-ansi](https://www.npmjs.com/package/@effect/printer-ansi) for terminal colors. Effect v3 only.
- [@effect/sql](https://www.npmjs.com/package/@effect/sql) - SQL client, migrations, and schema-typed queries. In v4: `effect/unstable/sql`.
- [@effect/sql-drizzle](https://www.npmjs.com/package/@effect/sql-drizzle) - Run Drizzle queries through `@effect/sql`. Effect v3 only. Drizzle itself now ships an `@effect/sql-pg` driver, listed under Databases and storage.
- [@effect/sql-kysely](https://www.npmjs.com/package/@effect/sql-kysely) - Run Kysely queries through `@effect/sql`. Effect v3 only.
- [@effect/ai](https://www.npmjs.com/package/@effect/ai) - Provider-agnostic language model, tool calling, and embeddings API. In v4: `effect/unstable/ai`.
- [@effect/ai-google](https://www.npmjs.com/package/@effect/ai-google) - Google Gemini provider. Effect v3 only.
- [@effect/ai-amazon-bedrock](https://www.npmjs.com/package/@effect/ai-amazon-bedrock) - Amazon Bedrock provider. Effect v3 only.
- [@effect/typeclass](https://www.npmjs.com/package/@effect/typeclass) - Functor, Monad, Semigroup, and other type classes. Effect v3 only.
- [@effect/experimental](https://www.npmjs.com/package/@effect/experimental) - Modules under trial before they move to core, such as DevTools, event logs, and persistence. In v4: `effect/unstable/devtools`, `eventlog`, and `persistence`.
- [tim-smart/effect-atom](https://github.com/tim-smart/effect-atom) - Reactive state for Effect v3, published as `@effect-atom/atom` with React, Solid, Vue, and LiveStore bindings. In v4 the same design ships in core as `@effect/atom-*`.

### Libraries for Effect v3

Peer dependency stops at 3.x, or no commits since before the Effect 4 release candidates.

#### State management and UI

- [ericc-ch/effect-atom-solid](https://github.com/ericc-ch/effect-atom-solid) - SolidJS bindings for effect-atom. Effect v3.
- [TylorS/typed](https://github.com/TylorS/typed) - Web application framework on Effect with push-based streams, routing, and templating. Last updated 2025.
- [VasilVelikov00/effective-ui](https://github.com/VasilVelikov00/effective-ui) - Composable UI framework built on Effect. Last updated 2025.
- [ToliaGuy/reffect](https://github.com/ToliaGuy/reffect) - React bindings for Effect. Last updated 2025.
- [81reap/react-effect](https://github.com/81reap/react-effect) - Package for full-stack React and Effect applications. Last updated 2025.
- [pkishorez/use-effect-ts](https://github.com/pkishorez/use-effect-ts) - React hooks for running Effects. Last updated 2025.
- [nemmtor/injectio](https://github.com/nemmtor/injectio) - Turn React components into Effects that can return values, for modals and dialogs opened from code. Last updated 2025.
- [savkelita/tea-effect](https://github.com/savkelita/tea-effect) - The Elm Architecture for TypeScript with Effect. Effect v3.
- [derrickbeining/effect-mvu](https://github.com/derrickbeining/effect-mvu) - Port of the Elm architecture to Effect. Last updated 2023.
- [TylorS/typed-lazy-ref](https://github.com/TylorS/typed-lazy-ref) - Lazily evaluated, streaming state management. Last updated 2025.
- [TylorS/typed-async-data](https://github.com/TylorS/typed-async-data) - Loading, success, failure, and optimistic states for async data. Last updated 2025.
- [TylorS/typed-navigation](https://github.com/TylorS/typed-navigation) - Browser navigation on the Navigation API with a History API fallback. Last updated 2025.
- [TylorS/typed-route](https://github.com/TylorS/typed-route) - Type-safe, bidirectional route matching and interpolation on Effect Schema. Last updated 2025.
- [lucas-barake/effect-form](https://github.com/lucas-barake/effect-form) - Forms with Effect Schema validation and React bindings. Effect v3.
- [hannoeru/formik-effect-schema](https://github.com/hannoeru/formik-effect-schema) - Effect Schema validation for Formik. Last updated 2024.

#### Framework integrations

- [mcrovero/effect-nextjs](https://github.com/mcrovero/effect-nextjs) - Typed helpers for Next.js App Router pages, layouts, server components, and actions. Effect v3.
- [khanetor/effect-remix](https://github.com/khanetor/effect-remix) - Adapters for using Effect in Remix loaders and actions. Last updated 2024.
- [JonahPlusPlus/solid-effect](https://github.com/JonahPlusPlus/solid-effect) - Utilities for using Effect in SolidJS. Last updated 2024.
- [devx-op/effectify](https://github.com/devx-op/effectify) - Monorepo of integrations: Solid bindings for effect-atom, Better Auth for Node, and more. Effect v3.
- [withstudiocms/studiocms](https://github.com/withstudiocms/studiocms) - Astro headless CMS whose `@withstudiocms/effect` package wraps Effect for Astro integrations. Effect v3.
- [nounder/effect-start](https://github.com/nounder/effect-start) - Declarative full-stack apps with Effect. Effect v3.
- [adamgoose/raycast-effect](https://github.com/adamgoose/raycast-effect) - Write Raycast extensions with Effect. Last updated 2025.
- [mikearnaldi/vite-remix-effect](https://github.com/mikearnaldi/vite-remix-effect) - Remix on Vite with Effect, by the Effect author. Last updated 2023.
- [mikearnaldi/effect-remix-stream](https://github.com/mikearnaldi/effect-remix-stream) - Streaming responses from Remix with Effect. Last updated 2024.
- [Effect-Community/react](https://github.com/Effect-Community/react) - React integration with Query and Effect from the Effect 2 era. Last updated 2023.

#### HTTP, RPC, and API

- [sukovanej/effect-http](https://github.com/sukovanej/effect-http) - Declarative HTTP APIs with OpenAPI generation. Predates `HttpApi` in `@effect/platform`, which covers the same ground. Effect v3.
- [bastikohn/effect-grpc](https://github.com/bastikohn/effect-grpc) - gRPC with a `protoc` plugin that generates Effect services. Effect v3.
- [semyenov/effect-graphql](https://www.npmjs.com/package/@semyenov/effect-graphql) - Type-safe GraphQL schemas and resolvers with Effect Schema. Effect v3.
- [nrf110/effect-gql](https://github.com/nrf110/effect-gql) - Experimental GraphQL framework for Effect. Effect v3.
- [pothos-plugin-effect](https://www.npmjs.com/package/pothos-plugin-effect) - Pothos GraphQL plugin for resolvers that return Effects. Effect v3.
- [Makisuo/effect-rpc-tanstack-devtools](https://github.com/Makisuo/effect-rpc-tanstack-devtools) - TanStack Devtools panel for Effect RPC requests and timings. Last updated 2025.
- [tim-smart/effect-http](https://github.com/tim-smart/effect-http) - Early HTTP toolkit that became `@effect/platform`. Last updated 2023.

#### OpenAPI and code generation

- [fortanix/openapi-to-effect](https://github.com/fortanix/openapi-to-effect) - Generate Effect Schema definitions from an OpenAPI document. Effect v3.
- [davidgoli/effect-openapi-server-gen](https://github.com/davidgoli/effect-openapi-server-gen) - Generate an HttpApi server from an OpenAPI schema. Last updated 2025.
- [omar-dulaimi/supawatch](https://github.com/omar-dulaimi/supawatch) - Compiles a PostgreSQL schema into validators, types, and API layers, with an Effect target. Effect v3.
- [fasciajs/fascia](https://github.com/fasciajs/fascia) - Describe a schema once, emit zod, arktype, effect, or valibot, and OpenAPI and JSON Schema. Effect v3.

#### Schema, data types, and utilities

- [jessekelly881/effect-schema-compilers](https://github.com/jessekelly881/effect-schema-compilers) - Compile Effect Schemas to fakers, empty values, and semigroups. Last updated 2024.
- [jessekelly881/effect-types](https://github.com/jessekelly881/effect-types) - Schemas organized by data type. Last updated 2024.
- [AMar4enko/effect-schema-compiler](https://github.com/AMar4enko/effect-schema-compiler) - Ergonomic compiler for Effect Schema ASTs. Effect v3.
- [AMar4enko/effect-schema-avro](https://github.com/AMar4enko/effect-schema-avro) - Avro codec for Effect Schema. Last updated 2025.
- [jessekelly881/effect-yaml](https://github.com/jessekelly881/effect-yaml) - YAML parsing helpers. Effect v3.
- [srinitude/effect-json-schema](https://github.com/srinitude/effect-json-schema) - Effect Schema adapter for Standard JSON Schema V1. Effect v3.
- [harrysolovay/standard-json-schema](https://github.com/harrysolovay/standard-json-schema) - Turn Standard Schema types, Effect Schema included, into JSON Schema. Last updated 2025.
- [middle-ages/effect-schema-viz](https://github.com/middle-ages/effect-schema-viz) - Render Effect Schemas as Graphviz diagrams. Effect v3.
- [dudeofawesome/effect-schemas](https://github.com/dudeofawesome/effect-schemas) - Common data schemas. Effect v3.
- [TylorS/typed-id](https://github.com/TylorS/typed-id) - UUID, NanoID, and ULID generation. Last updated 2025.
- [TylorS/templeffect](https://github.com/TylorS/templeffect) - Templating with Effect Schema parameter validation and nesting. Last updated 2025.
- [PaulJPhilp/effect-mdx](https://github.com/PaulJPhilp/effect-mdx) - Parse, compile, and manipulate MDX. Last updated 2025.
- [PaulJPhilp/effect-regex](https://github.com/PaulJPhilp/effect-regex) - Regex processing CLI and library. Last updated 2025.
- [PaulJPhilp/effect-env](https://github.com/PaulJPhilp/effect-env) - Environment variables with schema validation. Last updated 2025.
- [emergente-labs/effect-env](https://github.com/emergente-labs/effect-env) - Environment variable configuration with Effect. Effect v3.
- [hychen/effect-builder](https://github.com/hychen/effect-builder) - Immutable builder pattern with runtime validation. Last updated 2024.
- [sukovanej/effect-monocle](https://github.com/sukovanej/effect-monocle) - Port of monocle-ts optics. Effect v3, last updated 2024. Effect v3.
- [middle-ages/effect-ts-folds](https://github.com/middle-ages/effect-ts-folds) - Recursion schemes for Effect. Effect v3.
- [nipakke/effect-pantry](https://github.com/nipakke/effect-pantry) - Add-ons for Node.js apps such as typed events. Effect v3.
- [lishaduck/effect-utils](https://github.com/lishaduck/effect-utils) - Small utilities for Effect. Last updated 2025.
- [embedded-insurance/effect-use](https://github.com/embedded-insurance/effect-use) - Collection of Effect services. Last updated 2025.
- [limwa/effect-bits](https://www.npmjs.com/package/@limwa/effect-bits) - Utilities for working with Effect. Effect v3.
- [konkerdotdev/effect-ts-prelude](https://github.com/konkerdotdev/effect-ts-prelude) - Prelude re-exports. Effect v3, last updated 2024. Effect v3.
- [jpb06/effect-errors](https://github.com/jpb06/effect-errors) - Pretty error reporting with source snippets and spans. Effect v3.
- [btravstack/unthrown](https://github.com/btravstack/unthrown) - Errors as values with a separate defect channel, with an Effect adapter. Effect v3.
- [spion/effect-tagged-contextual-error](https://github.com/spion/effect-tagged-contextual-error) - Tagged errors with context, inspired by Rust's anyhow. Last updated 2025.
- [harrysolovay/toyffect](https://github.com/harrysolovay/toyffect) - Toy re-implementation of `Effect.gen` and `Context.Tag` for learning how Effect works. Last updated 2025.
- [clayroach/effect-sugar](https://github.com/clayroach/effect-sugar) - For-comprehension style `gen` blocks via esbuild, tsc, and TS plugin transforms. Last updated 2025.

#### Databases and storage

- [emergente-labs/effect-sql-model](https://github.com/emergente-labs/effect-sql-model) - Compile Effect Schema and `@effect/sql` model definitions into Drizzle tables. Effect v3.
- [effect-sql-kysely](https://www.npmjs.com/package/effect-sql-kysely) - Kysely with `@effect/sql`, typed queries. Effect v3.
- [Fredx87/effect-kysely](https://github.com/Fredx87/effect-kysely) - Kysely adapter. Last updated 2024.
- [pigoz/effect-sql](https://github.com/pigoz/effect-sql) - Relational databases with Effect, from before `@effect/sql`. Last updated 2025.
- [tim-smart/sqlfx](https://github.com/tim-smart/sqlfx) - The SQL toolkit that became `@effect/sql`. Last updated 2024.
- [samuelho-dev/prisma-effect-kysely](https://github.com/samuelho-dev/prisma-effect-kysely) - Generate Kysely-compatible Effect Schemas from Prisma models. Effect v3.
- [jessekelly881/zenstack-effect](https://github.com/jessekelly881/zenstack-effect) - ZenStack plugin for Effect. Last updated 2025.
- [akoenig/effect-sql-inline-migrations](https://www.npmjs.com/package/@akoenig/effect-sql-inline-migrations) - Migration loader that does not read the file system. Effect v3.
- [doubleloop-io/effect-mongodb](https://github.com/doubleloop-io/effect-mongodb) - MongoDB toolkit with typed collections. Effect v3.
- [Gialicus/effect-ts-mongodb](https://github.com/Gialicus/effect-ts-mongodb) - MongoDB driver wrapper. Last updated 2023.
- [envoy1084/effect-redis](https://github.com/envoy1084/effect-redis) - Redis bindings with transactions and pipelines. Effect v3.
- [Vortex-Dimension-Digital/effect-redis-bun](https://github.com/Vortex-Dimension-Digital/effect-redis-bun) - KeyValueStore implementation on Bun's Redis client. Effect v3.
- [effect-supabase](https://www.npmjs.com/package/effect-supabase) - Supabase client wrapper. Effect v3.
- [jys9962/effect-ts-typeorm](https://github.com/jys9962/effect-ts-typeorm) - TypeORM integration. Effect v3.
- [jessekelly881/effect-idb](https://github.com/jessekelly881/effect-idb) - IndexedDB wrapper. Effect v3.
- [juemrami/effect-idb](https://github.com/juemrami/effect-idb) - IndexedDB wrapper with a transaction API. Effect v3.
- [nounder/effect-memfs](https://github.com/nounder/effect-memfs) - In-memory file system for mocking and tests. Last updated 2025.

#### Local-first and sync

- [dxos/dxos](https://github.com/dxos/dxos) - Local-first platform and the Composer workspace app. Its ECHO database uses Effect Schema. Publishes `@dxos/effect`. Effect v3.

#### Messaging, jobs, workflows, and actors

- [spiko-tech/effect-messaging](https://github.com/spiko-tech/effect-messaging) - Message broker toolkit with AMQP and NATS packages. Effect v3.
- [floydspace/effect-kafka](https://github.com/floydspace/effect-kafka) - Kafka producers and consumers. [Docs](https://floydspace.github.io/effect-kafka). Last updated 2025.
- [PaulJPhilp/effect-actor](https://github.com/PaulJPhilp/effect-actor) - Actor model on Effect. Last updated 2025.
- [ReventlessDev/reventless-core](https://github.com/ReventlessDev/reventless-core) - Event-sourced CQRS framework in ReScript with an Effect package. Effect v3.
- [embedded-insurance/diachronic](https://github.com/embedded-insurance/diachronic) - Evolving durable programs on Temporal with Effect Schema. Last updated 2024.
- [emre-yildiz-dev/effect-graph](https://github.com/emre-yildiz-dev/effect-graph) - Superstep graph engine with typed state, reducers, routing, and human-in-the-loop. Effect v3.
- [sellooh/effect-cluster-via-sst](https://github.com/sellooh/effect-cluster-via-sst) - Effect Cluster deployed with the SST Cluster component. Last updated 2025.
- [Effect-Deprecated/query](https://github.com/Effect-Deprecated/query) - Request batching and caching from Effect 2, now built into core. Archived.

#### Cloud and infrastructure

- [floydspace/aws-lambda-effect-runtime](https://github.com/floydspace/aws-lambda-effect-runtime) - Experimental custom Lambda runtime for Effect. Last updated 2025.
- [pierskarsenbarg/effect-pulumi](https://github.com/pierskarsenbarg/effect-pulumi) - Effect composability for Pulumi programs. Effect v3.
- [triargos/effect-hcloud](https://github.com/triargos/effect-hcloud) - Hetzner Cloud client. Effect v3.
- [fiws/effect-libreoffice](https://github.com/fiws/effect-libreoffice) - Convert documents through LibreOffice. Effect v3.
- [Effect-Deprecated/process](https://github.com/Effect-Deprecated/process) - Child process library ported from zio-process. Archived.

#### AI, agents, and MCP

- [PaulJPhilp/EffectiveAgent](https://github.com/PaulJPhilp/EffectiveAgent) - Application framework for concurrent AI agents. Last updated 2025.
- [jambudipa/dynamic-flow](https://github.com/jambudipa/dynamic-flow) - Generate complete LLM execution graphs at runtime. Last updated 2025.
- [ai-task-runner-effect](https://www.npmjs.com/package/ai-task-runner-effect) - Runner for named AI tasks with validator-agnostic codecs. Effect v3.
- [hypen-space/gloop-effect](https://www.npmjs.com/package/@hypen-space/gloop-effect) - Typed, observable agent loops on gloop-loop. Effect v3.
- [kpritam/cliq](https://github.com/kpritam/cliq) - CLI coding agent with multiple providers, written to show how coding agents work. [Docs](https://kpritam.github.io/cliq). Last updated 2025.
- [claude-code-effect](https://www.npmjs.com/package/claude-code-effect) - SDK for the Claude Code CLI with typed `generateText` and `generateObject`. Effect v3.
- [mannyc1/pi-agent-effect](https://www.npmjs.com/package/@mannyc1/pi-agent-effect) - Effect platform adapter for pi-agent-core. Effect v3.
- [Kastalien-Research/mcp-effect-sdk](https://github.com/Kastalien-Research/mcp-effect-sdk) - MCP SDK for the 2025-07-28 spec written with Effect. Effect v3.
- [paoloricciuti/tmcp](https://github.com/paoloricciuti/tmcp) - Framework-agnostic MCP SDK with an `@tmcp/adapter-effect` schema adapter. Effect v3.
- [glassBead-tc/effect-airtable-mcp](https://github.com/glassBead-tc/effect-airtable-mcp) - Airtable MCP server. Effect v3.
- [grzegorz-bielski/extrospec](https://github.com/grzegorz-bielski/extrospec) - Toy RAG CLI on LlamaIndex. Last updated 2024.

#### Testing

- [Jobflow-io/effect-playwright](https://github.com/Jobflow-io/effect-playwright) - Playwright as Effect services and layers for browser automation and scraping. Effect v3.
- [isthatcentered/testing-effect-ts-lightning-talk-examples](https://github.com/isthatcentered/testing-effect-ts-lightning-talk-examples) - Code from an Effect Days 2025 lightning talk on testing. Last updated 2025.

#### Logging, tracing, and observability

- [sukovanej/effect-log](https://github.com/sukovanej/effect-log) - Logger implementations. Effect v3, last updated 2024. Effect v3.
- [rashedInt32/effect-logger-pretty](https://github.com/rashedInt32/effect-logger-pretty) - Colored console logger, silent in production. Last updated 2025.
- [IMax153/effect-ts-logging](https://github.com/IMax153/effect-ts-logging) - Logging with correlation and pluggable backends. Last updated 2023.
- [observe-ts/observe-ts](https://github.com/observe-ts/observe-ts) - Structural observability for Effect programs. Last updated 2025.
- [jrkienle/posthog-effect](https://www.npmjs.com/package/@jrkienle/posthog-effect) - PostHog bindings. Effect v3.
- [Effect-Deprecated/otel](https://github.com/Effect-Deprecated/otel) - OpenTelemetry from Effect 2, replaced by `@effect/opentelemetry`. Archived.

#### CLI and terminal

- [PaulJPhilp/effect-cli-tui](https://github.com/PaulJPhilp/effect-cli-tui) - Interactive prompts and display utilities on top of `@effect/cli`. Last updated 2025.
- [Effect-TS/figlet](https://github.com/Effect-TS/figlet) - FIGlet font parser and renderer. Last updated 2024.

#### Service SDKs and API clients

- [rubywwwilde/Teleffect](https://github.com/rubywwwilde/Teleffect) - Telegram Bot API client. Last updated 2025.
- [blissito/whatsapp-sdk](https://github.com/blissito/whatsapp-sdk) - WhatsApp Business API SDK. Last updated 2025.
- [PaulJPhilp/effect-notion](https://github.com/PaulJPhilp/effect-notion) - Proxy server for the Notion API. Last updated 2025.
- [effect-stripe](https://www.npmjs.com/package/effect-stripe) - Stripe wrapper. Effect v3.
- [Malvolio/printify-effect](https://github.com/Malvolio/printify-effect) - Printify print-on-demand API. Last updated 2025.
- [betalyra/wordpress-effect](https://github.com/betalyra/wordpress-effect) - WordPress client. Effect v3.
- [kevinmichaelchen/book-effect](https://github.com/kevinmichaelchen/book-effect) - Book metadata from Hardcover, Open Library, and Google Books. Last updated 2025.
- [tvsudhir2/edlink-effect-sdk](https://github.com/tvsudhir2/edlink-effect-sdk) - Edlink SDK. Effect v3.

#### Authentication and authorization

- [betalyra/sorry-dave](https://github.com/betalyra/sorry-dave) - Authorization library. Last updated 2025.

#### Blockchain

- [evmts/voltaire](https://github.com/evmts/voltaire) - Ethereum primitives with a `voltaire-effect` package for typed contract calls. Effect v3.
- [HeliosLang/effect](https://github.com/HeliosLang/effect) - Effect version of the Helios off-chain library for Cardano. Effect v3.

## Development tools

### Editors and language service

- [Effect-TS/language-service](https://github.com/Effect-TS/language-service) - TypeScript plugin with diagnostics for missing errors in `yield*`, unused layers, and more. Works in any editor that uses tsserver.
- [Effect-TS/tsgo](https://github.com/Effect-TS/tsgo) - TypeScript-Go build with the Effect language service and an LSP-based linter.
- [Effect-TS/vscode-extension](https://github.com/Effect-TS/vscode-extension) - VS Code extension with a DevTools panel for traces, metrics, and fiber inspection. [Marketplace](https://marketplace.visualstudio.com/items?itemName=effectful-tech.effect-vscode).
- [RATIU5/zed-effect-tsgo](https://github.com/RATIU5/zed-effect-tsgo) - Zed extension for `@effect/tsgo`. [Zed extension page](https://zed.dev/extensions/effect-language-service-tsgo).
- [kriegcloud/effect-jetbrains-plugin](https://github.com/kriegcloud/effect-jetbrains-plugin) - JetBrains plugin for `@effect/tsgo` and DevTools.
- [rashedInt32/effect-error-pretty.nvim](https://github.com/rashedInt32/effect-error-pretty.nvim) - Neovim formatter that renders Effect, Stream, and Layer type mismatches as channel-aware boxes.
- [nikelborm/effect-language-service-repro](https://github.com/nikelborm/effect-language-service-repro) - Reproductions for language service issues.

### Linting and code style

- [Effect-TS/eslint-plugin](https://github.com/Effect-TS/eslint-plugin) - Official ESLint rules.
- [OperationalFallacy/biome-effect-linting-rules](https://github.com/OperationalFallacy/biome-effect-linting-rules) - Biome Grit rules for Effect, published as `@catenarycloud/linteffect`.
- [mpsuesser/oxlint-plugin-effect](https://github.com/mpsuesser/oxlint-plugin-effect) - Opinionated oxlint plugin for Effect v4.
- [mpsuesser/effect-oxlint](https://github.com/mpsuesser/effect-oxlint) - Write oxlint custom rules with Effect v4.
- [cevr/effect-oxlint](https://github.com/cevr/effect-oxlint) - Strict, non-type-aware oxlint plugin that blocks Promise control flow and imperative failure handling in Effect code. Effect v4.
- [EduSantosBrito/effect-rules](https://github.com/EduSantosBrito/effect-rules) - Rules for oxlint that catch untyped error channels and unsafe boundary parsing.
- [zaniluca/effect-rules](https://github.com/zaniluca/effect-rules) - Rules for oxlint with companion remediation skills.
- [opsydyn/oxlint-effect](https://github.com/opsydyn/oxlint-effect) - Rules for oxlint.
- [tiara-stack/native-tooling](https://github.com/tiara-stack/native-tooling) - Rules for tsgolint.
- [effect-app/tsgolint-fork](https://github.com/effect-app/tsgolint-fork) - Fork of oxlint-tsgolint with a model codegen subcommand.
- [aiya000/haskellish-effect-ts](https://github.com/aiya000/haskellish-effect-ts) - ESLint plugin and config enforcing Haskell-like discipline. Effect v3.
- [Effect-TS/slopcop](https://github.com/Effect-TS/slopcop) - GitHub bot that triages pull requests on the Effect repo. Written with Effect, deployed to Cloudflare via Alchemy.

### Scaffolding and migration

- [Effect-TS/codemod](https://github.com/Effect-TS/codemod) - Official codemods. Last updated 2024.
- [aridyckovsky/effect-migrate](https://github.com/aridyckovsky/effect-migrate) - Migration toolkit for adopting Effect with coding agents.
- [rxssula/effect-http-starter](https://github.com/rxssula/effect-http-starter) - Scaffold HTTP server projects with CRUD endpoints, health checks, Scalar docs, and OpenAPI output.
- [lloydrichards/stack-effect](https://github.com/lloydrichards/stack-effect) - Scaffold applications with community conventions.
- [samuelho-dev/monorepo-library-generator](https://github.com/samuelho-dev/monorepo-library-generator) - Generate Effect libraries in Nx monorepos.
- [coffeeispower/create-ben-app](https://github.com/coffeeispower/create-ben-app) - Bun, Effect, and Next.js scaffolder.
- [mmlngl/steiger](https://github.com/mmlngl/steiger) - Scaffold DDD modules with Effect.
- [jpb06/bump-package](https://github.com/jpb06/bump-package) - GitHub Action that bumps versions from commit messages, written with Effect.
- [jpb06/coverage-badges-action](https://github.com/jpb06/coverage-badges-action) - GitHub Action for coverage badges, written with Effect.
- [effect-patterns-cli](https://www.npmjs.com/package/effect-patterns-cli) - Search and install patterns from EffectPatterns. Effect v3.

### Playgrounds and visualizers

- [Effect Playground](https://effect.website/play) - Official in-browser editor.
- [kitlangton/visual-effect](https://github.com/kitlangton/visual-effect) - Interactive visualizations of Effect programs. [Site](https://effect.kitlangton.com).
- [effect-atom visualizer](https://effect-atom.kitlangton.com) - Interactive examples for effect-atom, also by Kit Langton.
- [topheman/effect-viz](https://github.com/topheman/effect-viz) - Runtime visualizer with fiber tree, timeline, and execution log. [Site](https://effect-viz.vercel.app).
- [effect-ts.vercel.app playground](https://effect-ts.vercel.app/playground) - Browser-only playground with no server.
- [srdjan/visual-effect-deno-ssr](https://github.com/srdjan/visual-effect-deno-ssr) - Interactive visualizations rendered server-side with Deno.

## Applications

Open source apps and services with Effect in their stack.

- [anomalyco/opencode](https://github.com/anomalyco/opencode) - The open source coding agent. Depends on `effect`, `@effect/platform-node`, and `@effect/opentelemetry`.
- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) - Coding agent client from the t3 team, built with Effect.
- [pingdotgg/uploadthing](https://github.com/pingdotgg/uploadthing) - File uploads for web apps. Adopted Effect in 2024.
- [marimo-team/marimo](https://github.com/marimo-team/marimo) - Reactive Python notebook. Its VS Code extension is written with Effect.
- [AnswerOverflow/AnswerOverflow](https://github.com/AnswerOverflow/AnswerOverflow) - Indexes Discord threads as web pages. Large Effect v3 codebase.
- [RhysSullivan/create-epoch-app](https://github.com/RhysSullivan/create-epoch-app) - Full-stack starter with Effect, Convex, and Next.js. The same author's Effect v4 reference codebase.
- [HazelChat/hazel](https://github.com/HazelChat/hazel) - Local-first real-time chat on Effect, ElectricSQL, and React 19.
- [steipete/birdclaw](https://github.com/steipete/birdclaw) - Stores your tweets in a form agents can query.
- [zenbu-labs/zenbu.js](https://github.com/zenbu-labs/zenbu.js) - Framework for apps that users and agents modify at runtime through source editing.
- [antoine-coulon/skott](https://github.com/antoine-coulon/skott) - Analyze and visualize module dependency graphs.
- [Necmttn/ax](https://github.com/Necmttn/ax) - Local-first observability and memory for AI coding agents.
- [tenequm/pond](https://github.com/tenequm/pond) - Storage and search for AI agent sessions across clients.
- [cameronapak/dotflowy](https://github.com/cameronapak/dotflowy) - Open source Workflowy alternative.
- [BLANKSPACETS/better-pdf-reader](https://github.com/BLANKSPACETS/better-pdf-reader) - PDF and EPUB reader with a command palette and Markdown export.
- [strandhvilliam/blikka](https://github.com/strandhvilliam/blikka) - SaaS for running photo marathons.
- [robertpitt/cycle](https://github.com/robertpitt/cycle) - Local-first, agent-driven ticket system backed by a Git repo.
- [cbnsndwch/cbranch](https://github.com/cbnsndwch/cbranch) - Browser-based Git GUI.
- [kachkaev/repo-dive](https://github.com/kachkaev/repo-dive) - Per-commit snapshots and a metrics dashboard for a repo's history, with MCP support.
- [mrtdurdenthe2/muster](https://github.com/mrtdurdenthe2/muster) - Keyboard-driven TUI for GitHub issues across repos.
- [timhanlon/arcwork](https://github.com/timhanlon/arcwork) - Unified development environment for conversations, tasks, and diffs across agent harnesses.
- [bgub/agentpane](https://github.com/bgub/agentpane) - Web interface for AI coding agents.
- [longtail-labs/slide.code](https://github.com/longtail-labs/slide.code) - Graphical environment for Claude Code.
- [andresmarpz/sandcastle](https://github.com/andresmarpz/sandcastle) - Agent orchestrator for managing loops.
- [t0dorakis/murmur](https://github.com/t0dorakis/murmur) - Cron daemon for recurring agent sessions from `HEARTBEAT.md` files.
- [guillempuche/batuda](https://github.com/guillempuche/batuda) - CRM with a built-in research agent.
- [sideline-cz/sideline](https://github.com/sideline-cz/sideline) - Sports team management with a Discord-first design.
- [tim-smart/cheffect](https://github.com/tim-smart/cheffect) - Local recipe manager and meal planner.
- [tim-smart/receipts](https://github.com/tim-smart/receipts) - Local-first receipt scanner using GPT-4o and SQLite.
- [tim-smart/actualbudget-sync](https://github.com/tim-smart/actualbudget-sync) - Sync bank transactions into Actual Budget.
- [tim-smart/stremio-effect](https://github.com/tim-smart/stremio-effect) - Stremio add-on written as a learning project.
- [tim-smart/lalph](https://github.com/tim-smart/lalph) - Agent loop runner by Tim Smart.
- [jcfischer/supertag-cli](https://github.com/jcfischer/supertag-cli) - Tana CLI with semantic search and an MCP server.
- [kevinmichaelchen/effect-coffee-shop](https://github.com/kevinmichaelchen/effect-coffee-shop) - Coffee ordering app showing onion architecture on Bun and Cloudflare with MCP.
- [OperationalFallacy/Unleaded](https://github.com/OperationalFallacy/Unleaded) - Car listing search CLI on Ink and Effect Atom.
- [mepuka/bsky-cli](https://github.com/mepuka/bsky-cli) - Bluesky data filtering and monitoring CLI.
- [Inalegwu/Comic-Pulse](https://github.com/Inalegwu/Comic-Pulse) - Discord bot that announces comic releases.
- [kachkaev/s20-wifi-setup](https://github.com/kachkaev/s20-wifi-setup) - Connect legacy Orvibo smart sockets to Wi-Fi from the terminal.
- [davidnussio/github-stars-organizer](https://github.com/davidnussio/github-stars-organizer) - Semantic search over GitHub stars with SQLite and embeddings.
- [takeokunn/ts-minecraft](https://github.com/takeokunn/ts-minecraft) - Browser voxel game on Three.js and Effect.
- [hideyuki-hori/lab-webgpu-editor](https://github.com/hideyuki-hori/lab-webgpu-editor) - Shadertoy-style WGSL editor with WebGPU.
- [DwieDave/imageresizer](https://github.com/DwieDave/imageresizer) - Browser image resizer on WebAssembly and Web Workers.
- [bettercallmanav/repaste](https://github.com/bettercallmanav/repaste) - macOS clipboard manager on Electron with event sourcing.
- [nmnmcc/Veya](https://github.com/nmnmcc/Veya) - Programmable video creation library.
- [andrueandersoncs/lion](https://github.com/andrueandersoncs/lion) - JSON-based Lisp written entirely in Effect.
- [Typing Terminal](https://typingterminal.com) - Multiplayer typing game built with Effect and Foldkit.
- [tokenmaxxing](https://tokenmaxxing.sh) - Leaderboard for LLM coding agent usage and cost, built with Effect v4.
- [Pivit](https://pivit.app) - Windows command hub with AI chat and window management.
- [citymcp](https://citymcp.com) - Live city data for agents, built at a hackathon.
- [Dtapline](https://dtapline.com) - Deployment tracking and visualization.
- [Highlight Hunter](https://frostytools.com/highlight-hunter/about) - Finds highlights in Twitch VODs, Effect on the backend.

## Examples, templates, and starters

- [Effect-TS/examples](https://github.com/Effect-TS/examples) - Official examples.
- [jeremyosih/real-world-effect](https://github.com/jeremyosih/real-world-effect) - Open source Effect apps and templates collected in one repo for searching with agents.
- [typeonce-dev/effect-getting-started-course](https://github.com/typeonce-dev/effect-getting-started-course) - Code for the Typeonce getting started course.
- [typeonce-dev/effect-backend-example](https://github.com/typeonce-dev/effect-backend-example) - Backend API with SQL and Docker setup.
- [typeonce-dev/effect-react-19-project-template](https://github.com/typeonce-dev/effect-react-19-project-template) - Services, layers, and runtime for client and server code in React 19.
- [typeonce-dev/paddle-payments-full-stack-typescript-app](https://github.com/typeonce-dev/paddle-payments-full-stack-typescript-app) - Paddle Billing checkout and webhooks.
- [typeonce-dev/calories-tracker-local-only-app](https://github.com/typeonce-dev/calories-tracker-local-only-app) - Local-only app on TanStack Router, PGlite, XState, and Drizzle.
- [SandroMaglione/effect-getting-started](https://github.com/SandroMaglione/effect-getting-started) - Context, Layer, Runtime, and Scope examples. Last updated 2024.
- [SandroMaglione/getting-started-xstate-and-effect](https://github.com/SandroMaglione/getting-started-xstate-and-effect) - XState with Effect.
- [SandroMaglione/pglite-client-server](https://github.com/SandroMaglione/pglite-client-server) - Local-first Remix app on PGlite and Drizzle. Last updated 2024.
- [lucas-barake/effect-electron-example](https://github.com/lucas-barake/effect-electron-example) - `@effect/rpc` and effect-atom across the Electron main and renderer boundary.
- [lucas-barake/effect-graphql-example](https://github.com/lucas-barake/effect-graphql-example) - One Effect RPC API served through GraphQL and native RPC.
- [kitlangton/effect-better-auth-example](https://github.com/kitlangton/effect-better-auth-example) - Full-stack auth with Effect, Better Auth, and React.
- [TeamWarp/effect-api-example](https://github.com/TeamWarp/effect-api-example) - Monorepo API with `@effect/platform` and Drizzle.
- [backpine/effect-worker-mono](https://github.com/backpine/effect-worker-mono) - Cloudflare Workers monorepo with shared domain models and API contracts.
- [sanurb/effect-worker-mono](https://github.com/sanurb/effect-worker-mono) - Another Cloudflare Workers monorepo template.
- [ksamirdev/effect-rpc-workers](https://github.com/ksamirdev/effect-rpc-workers) - `@effect/rpc` on Cloudflare Workers.
- [mw10013/tanstack-cloudflare-effect-shopify-app](https://github.com/mw10013/tanstack-cloudflare-effect-shopify-app) - Shopify app template on TanStack Start, Cloudflare Workers, and Effect v4.
- [brandhaug/b2b-saas-starter](https://github.com/brandhaug/b2b-saas-starter) - Cloudflare-first SaaS monorepo: TanStack Start, Effect v4, Drizzle on D1, Better Auth, Alchemy.
- [kevin-courbet/effect-nextjs-architecture](https://github.com/kevin-courbet/effect-nextjs-architecture) - Next.js 15 full-stack architecture with page and action builders.
- [kevin-courbet/tanstack-effect-example](https://github.com/kevin-courbet/tanstack-effect-example) - TanStack Start with Effect RPC, one query and one mutation.
- [effect-app/boilerplate](https://github.com/effect-app/boilerplate) - Boilerplate for effect-app libs.
- [jackblatch/hono-effect-starter](https://github.com/jackblatch/hono-effect-starter) - API starter on Hono, Effect, Temporal, Drizzle, and PlanetScale.
- [jimmy-guzman/hono-starter](https://github.com/jimmy-guzman/hono-starter) - REST API starter on Hono, Effect, Drizzle, and Bun.
- [Muhamed-Ragab/hono-with-effect.ts](https://github.com/Muhamed-Ragab/hono-with-effect.ts) - Hono with Effect.
- [mateoroldos/sveltekit-effect-template](https://github.com/mateoroldos/sveltekit-effect-template) - SvelteKit with Effect. Last updated 2024.
- [bmdavis419/effect-to-js-ex](https://github.com/bmdavis419/effect-to-js-ex) - Effect backend in a SvelteKit app crossing the boundary with typed errors.
- [denishsharma/kickr-react-effect-starter-template](https://github.com/denishsharma/kickr-react-effect-starter-template) - React, Tailwind, TanStack Router, and Vite starter.
- [Guiguerreiro39/effect-monorepo](https://github.com/Guiguerreiro39/effect-monorepo) - Full-stack monorepo with Effect.
- [Guiguerreiro39/trpc-effect-prisma](https://github.com/Guiguerreiro39/trpc-effect-prisma) - Next.js with tRPC, Effect, and Prisma.
- [sundaray/next-effect](https://github.com/sundaray/next-effect) - AI app directory on Next.js, Hono, and Effect.
- [inioluwa-io/EffectJS-NextJS-Next-Auth-Prisma-Starter](https://github.com/inioluwa-io/EffectJS-NextJS-Next-Auth-Prisma-Starter) - Next.js, NextAuth, and Prisma starter.
- [itsyasirkhandev/next_convex_firebase_template](https://github.com/itsyasirkhandev/next_convex_firebase_template) - Next.js, Convex, and Firebase Auth with Effect.
- [itsyasirkhandev/clerk_convex_template](https://github.com/itsyasirkhandev/clerk_convex_template) - Next.js, Convex, and Clerk with Effect.
- [dtechvision/app-templates](https://github.com/dtechvision/app-templates) - Web, Farcaster Frames, and mobile templates with Effect backends.
- [Inalegwu/Gaze](https://github.com/Inalegwu/Gaze) - Effect starter template. Last updated 2024.
- [juemrami/effect-starter-template](https://github.com/juemrami/effect-starter-template) - Hello world with formatter and LSP set up.
- [stvncode/effect-vite-starter](https://github.com/stvncode/effect-vite-starter) - Vite starter. Last updated 2023.
- [Oungseik/ts-starter](https://github.com/Oungseik/ts-starter) - Hono and Effect starter. Deprecated by the author.
- [miradeviar/bun-react-effect-example](https://github.com/miradeviar/bun-react-effect-example) - Bun, React 19, and Effect full-stack example.
- [rashedInt32/fullstack-effect-hive](https://github.com/rashedInt32/fullstack-effect-hive) - Real-time chat on Effect, Next.js, and PostgreSQL.
- [Mumma6/effect-node-server](https://github.com/Mumma6/effect-node-server) - Node server example. Last updated 2024.
- [orlein/backend-server-effect](https://github.com/orlein/backend-server-effect) - Backend built only with Effect for a teacher's frontend students. Last updated 2024.
- [f15u/effect-app](https://github.com/f15u/effect-app) - One developer's opinionated full-stack setup.
- [Matechs-Digital/effect-ts-lambda](https://github.com/Matechs-Digital/effect-ts-lambda) - AWS Lambda setup from the Effect 2 era. Last updated 2022.
- [jkonowitch/hex-effect](https://github.com/jkonowitch/hex-effect) - Hexagonal architecture for DDD. Last updated 2024.
- [dataquail/functional-domain-driven-hexagon](https://github.com/dataquail/functional-domain-driven-hexagon) - Hexagonal DDD on Effect v4.
- [tuanpt-repo/effect-ddd](https://github.com/tuanpt-repo/effect-ddd) - DDD exploration with Effect.
- [guillempuche/effect_server_react](https://github.com/guillempuche/effect_server_react) - Clean architecture: domain, use cases, repositories, SQL, and a Node server. Last updated 2024.
- [guillempuche/demo_supertokens_effect](https://github.com/guillempuche/demo_supertokens_effect) - Passwordless auth with SuperTokens. Last updated 2024.
- [heritageholdings/passkey-example](https://github.com/heritageholdings/passkey-example) - Passkey registration and login on Node and React Native. Last updated 2024.
- [leofmarciano/encore-effect](https://github.com/leofmarciano/encore-effect) - Seven-service microservice system on Encore.ts and Effect.
- [Felipeness/holonomic-architecture](https://github.com/Felipeness/holonomic-architecture) - Fastify, Effect, and Temporal boilerplate.
- [Chahine-tech/flux](https://github.com/Chahine-tech/flux) - Canary deployments on a Temporal workflow in Effect v4.
- [stevebluck/chuz](https://github.com/stevebluck/chuz) - Remix and Effect with domain-driven design. Last updated 2024.
- [nickytonline/stream-for-effect](https://github.com/nickytonline/stream-for-effect) - Code from Michael Arnaldi's live-coding intro on nickyt.live. Last updated 2024.
- [bishalr0y/effect-url-shortener](https://github.com/bishalr0y/effect-url-shortener) - URL shortener with Effect and Drizzle.
- [bishalr0y/effect-weather](https://github.com/bishalr0y/effect-weather) - Weather CLI on OpenWeatherMap.
- [novaru/effectful-todo](https://github.com/novaru/effectful-todo) - Todo app with Effect, Hono, and Drizzle.
- [sixthextinction/effect-ts-scraping](https://github.com/sixthextinction/effect-ts-scraping) - Fault-tolerant web data pipeline with proxies.
- [surya-git-kgp/effective-etl](https://github.com/surya-git-kgp/effective-etl) - ETL framework on Effect.
- [lloydrichards/edu_effect-okf](https://github.com/lloydrichards/edu_effect-okf) - CLI tools on Effect v4 that parse and query OKF bundles.
- [lloydrichards/base_bevr-stack](https://github.com/lloydrichards/base_bevr-stack) - Bun, Elysia, Vite, React, and Effect stack.
- [lambda-mike/mars-rover-kata](https://github.com/lambda-mike/mars-rover-kata) - Mars rover kata. Last updated 2022.
- [devmatteini/imperative-to-effect-kata](https://github.com/devmatteini/imperative-to-effect-kata) - Refactoring kata from imperative code to Effect.
- [devmatteini/from-fp-ts-to-effect-ts](https://github.com/devmatteini/from-fp-ts-to-effect-ts) - Effect from an fp-ts user's perspective. Last updated 2024.
- [ruizb/adventofcode2022](https://github.com/ruizb/adventofcode2022) - Advent of Code 2022 in Effect. Last updated 2023.
- [LeoSM-07/adventofcode-2025](https://github.com/LeoSM-07/adventofcode-2025) - Advent of Code 2025 in Effect.
- [tim-smart/aoc25](https://github.com/tim-smart/aoc25) - Tim Smart's Advent of Code 2025 solutions.

## Resources

### Courses and guides

- [Effect Institute](https://www.effect.institute) - Tutorial series by Kit Langton.
- [Effect Solutions](https://www.effect.solutions) - Prescriptive idioms for writing Effect, with agent instructions to copy. Source in [kitlangton/effect-solutions](https://github.com/kitlangton/effect-solutions).
- [Typeonce courses](https://www.typeonce.dev) - Sandro Maglione's courses, including [Effect: Beginners Complete Getting Started](https://www.typeonce.dev/course/effect-beginners-complete-getting-started), [React 19 + Effect project template](https://www.typeonce.dev/course/effect-react-19-project-template), and [Paddle payments full-stack app](https://www.typeonce.dev/course/paddle-payments-full-stack-typescript-app).
- [Effective Software courses](https://www.effective.software/courses) - Free courses by Hemanta Kumar Sundaray on Effect foundations, Schema v4, HttpClient, HTTP API, configuration, Atom, and RAG.
- [Practical Effect](https://lucasbarake.com) - Course by Lucas Barake.
- [Effect by Example](https://effectbyexample.com) - Short examples for common scenarios.
- [Effect for TypeScript Developers](https://tonytangdev.github.io/effect-for-ts-developers) - 33-step guide by Tony Tang.
- [Effect Guide](https://effect-guide.netlify.app) - Free guide by obadakhalili.
- [effect.ninja](https://effect-way-course--jonas127.replit.app) - Interactive course by Jonas Templestein.
- [Effect Commander](https://github.com/jjhiggz/learn-effect-stuff) - Game that teaches fibers, scheduling, and retries by making you use them.
- [pigoz/effect-crashcourse](https://github.com/pigoz/effect-crashcourse) - The practical guide the author wished existed when learning. Last updated 2024.
- [antoine-coulon/effect-introduction](https://github.com/antoine-coulon/effect-introduction) - Why Effect, for developers moving from plain TypeScript.
- [kiliancs/effect-workshop](https://github.com/kiliancs/effect-workshop) - Explanations and exercises for beginners.
- [cardotrejos/effect-interactive-lab](https://github.com/cardotrejos/effect-interactive-lab) - Interactive React examples contrasting Effect with async/await.
- [Effect Days 2025 workshop](https://github.com/Effect-TS/effect-days-2025-workshop) - Official workshop exercises.
- [Advent of Effect](https://adventofeffect.com) - Solve Advent of Code with Effect alongside the Discord.
- [justfuckinguseeffect.dev](https://justfuckinguseeffect.dev) - Single-page argument for using Effect.
- [Effect vs fp-ts](https://effect.website/docs/additional-resources/effect-vs-fp-ts/) - Official comparison for fp-ts users.

### Patterns and reference

- [PaulJPhilp/EffectPatterns](https://github.com/PaulJPhilp/EffectPatterns) - Community knowledge base of practical patterns, 300 and counting.
- [ethanniser.dev/blog/effect-best-practices](https://ethanniser.dev/blog/effect-best-practices) - Best practices from an Effect Days workshop instructor.
- [Thoughtworks Technology Radar: Effect](https://www.thoughtworks.com/radar/languages-and-frameworks/effect) - Radar entry from Vol. 32.
- [Effect on dev.to](https://dev.to/effect-ts) - Official dev.to organization.

### Articles

- [Comprehensive guide to Effect usage in TypeScript](https://www.sandromaglione.com/articles/complete-introduction-to-using-effect-in-typescript) - Sandro Maglione.
- [From fp-ts to Effect: migration guide](https://www.sandromaglione.com/articles/from-fp-ts-to-effect-ts-migration-guide) - Sandro Maglione.
- [How to implement a backend with Effect](https://www.typeonce.dev/article/how-to-implement-a-backend-with-effect) - Sandro Maglione. HttpApi, routing, PostgreSQL, and a derived client.
- [Effect RPC HTTP client complete example](https://www.typeonce.dev/snippet/effect-rpc-http-client-complete-example) - Sandro Maglione.
- [Authentication with JWT access and refresh tokens](https://www.typeonce.dev/snippet/authentication-jwt-access-and-refresh-tokens-with-effect) - Sandro Maglione.
- [A gentle introduction to Effect TS](https://blog.mavnn.co.uk/2024/09/16/intro_to_effect_ts.html) - Michael Newton. Adopting Effect in a greenfield project.
- [The truth about Effect](https://ethanniser.dev/blog/the-truth-about-effect) - Ethan Niser. Effect as a language for effectful computation.
- [The difficulty of complexity](https://ethanniser.dev/blog/the-difficulty-of-complexity) - Ethan Niser. Compares Effect's adoption curve to early React.
- [Is the Effect tax worth it?](https://dev.to/datner/the-effect-tax-3gn0) - Yuval Datner on adopting Effect on the frontend.
- [How we migrated our codebase from fp-ts to Effect](https://dev.to/laurerc/how-we-migrated-our-codebase-from-fp-ts-to-effect-5bbk) - The inato team, two months end to end.
- [How I replaced tRPC with Effect RPC in a Next.js App Router application](https://dev.to/titouancreach/how-i-replaced-trpc-with-effect-rpc-in-a-nextjs-app-router-application-4j8p) - Titouan Créac'h. [Part 2 on streaming responses](https://dev.to/titouancreach/part-2-how-i-replaced-trpc-with-effect-rpc-in-a-nextjs-app-router-application-streaming-responses-566c).
- [Exploring Effect in TypeScript: simplifying async and error handling](https://www.tweag.io/blog/2024-11-07-typescript-effect/) - Douglas Massolari at Tweag writes the same app twice.
- [Why we chose Effect for building Spiko](https://tech.spiko.io/posts/why-we-chose-effect) - Samuel Briole, CTO of Spiko.
- [Building with Effect and EdgeDB](https://www.edgedb.com/blog/building-with-effect-and-edgedb-part-1) - Aleksandra Sikora.
- [One Effect to rule them all](https://blog.mayflower.de/29040-typescript-effect-standard-framework.html) - Maria Haubner on Mayflower's adoption from `@effect/schema` outward.
- [Effect TS: the new standard for building production APIs](https://blog.type-driven.com/effect-ts-new-standard) - Type Driven.
- [Building a fault-tolerant web data ingestion pipeline with Effect-TS](https://javascript.plainenglish.io/building-a-fault-tolerant-web-data-ingestion-pipeline-with-effect-ts-0bc5494282ba) - Typed errors, resources, and retry policies.
- [Getting started with tracing in Effect](https://mattrossman.com/2025/02/17/getting-started-with-tracing-in-effect) - Matt Rossman.
- [Writing dual APIs with Effect](https://mattrossman.com/2025/03/23/writing-dual-apis-with-effect) - Matt Rossman.
- [Building a composable policy system in TypeScript with Effect](https://lucas-barake.github.io/building-a-composable-policy-system) - Lucas Barake.
- [Supporting offline mode in TanStack Query](https://lucas-barake.github.io/persisting-tantsack-query-data-locally) - Lucas Barake on Effect Schema for persistence.
- [Effective pragmatism](https://dev.to/attila_vecerek/effective-pragmatism-introduction-5dc7) - Blog series by Attila Večerek of Zendesk.
- [Designing with types: the TypeScript Effect approach](https://akhansari.tech/series/designing-with-types-typescript-effect-approach) - Domain modeling series by Amin Khansari.
- [Making an LLM request in Effect TS](https://www.jxsh.io/making-an-llm-request-in-effect-ts) - Josh Pitzalis.
- [Building inkpipe](https://www.thomasdeconinck.fr/blog/2026-06-25-effect-ts-inkpipe) - Thomas Deconinck.
- [Schema is all you need](https://mattiamanzati.github.io/schema-is-all-you-need) - Mattia Manzati's React Alicante slides with live-coding transcript.
- [TypeScript validators jamboree](https://monadical.com/posts/typescript-validators-jamboree.html) - Igor Loskutov compares validation libraries, Effect Schema included.
- [StudioCMS Beta 19: an Effectful update](https://studiocms.dev/blog/beta-19-release) - Migration write-up. Also [Beta 31: from Drizzle to Kysely](https://studiocms.dev/blog/beta-31-release) and [v0.1.0](https://studiocms.dev/blog/v0-1-release).
- [Foldkit has server rendering](https://foldkit.dev/blog/foldkit-has-server-rendering) - Devin Jameson. Also [Foldkit vs React side by side](https://foldkit.dev/foldkit-vs-react-side-by-side).
- [Alessandro Maclaine's Option series on dev.to](https://dev.to/almaclaine) - Matching, sequencing, zipping, combining, folding, filtering, and lifting with Option.
- [Building robust TypeScript APIs with the Effect ecosystem](https://dev.to/martinpersson/building-robust-typescript-apis-with-the-effect-ecosystem-1m7c) - Martin Persson. Also [a type-safe GraphQL backend with Effect and Drizzle](https://dev.to/martinpersson/building-a-robust-backend-with-effect-graphql-and-drizzle-k4j).
- [Breaking down Effect TS](https://dev.to/modgil_23/breaking-down-effect-ts-part-1-2e0i) - Two-part FP foundations series.
- [Effects in TypeScript: a new way to build robust backends](https://merginit.com/blog/27062025-effects-in-typescript) - Merginit.

### Videos and talks

- [Effect YouTube channel](https://www.youtube.com/@effect-ts) - Talks, workshops, the podcast, and Effect Office Hours, the live sessions with the core team.
- [Effect Days 2024 playlist](https://www.youtube.com/playlist?list=PLDf3uQLaK2B_XZ8k3gD8R1k4-LBz8JmHP) - 15 talks and 2 workshops from Vienna.
- [Effect Days 2025 playlist](https://www.youtube.com/playlist?list=PLDf3uQLaK2B9vHzUNyvOSvoMv61LW7792) - 19 talks and 2 workshops from Livorno.
- [Effect: the origin story](https://www.youtube.com/watch?v=7sJc3Z4mh1w) - Michael Arnaldi, Effect Days 2024.
- [Effect: a functional foundation for TypeScript](https://www.youtube.com/watch?v=BHuY6w9ed5o) - Michael Arnaldi, LambdaConf 2024.
- [Introduction to Effect](https://www.youtube.com/watch?v=zrNr3JVUc8I) - Michael Arnaldi, WorkerConf 2022.
- [Effect Days 2024 beginner and intermediate workshop](https://www.youtube.com/watch?v=Lz2J1NBnHK4) - Ethan Niser.
- [Effect Days 2024 advanced workshop](https://www.youtube.com/watch?v=7jOD5okJC00) - Maxwell Brown.
- [Production-grade app architecture with Effect](https://www.youtube.com/watch?v=upXJJ9maWPc) - Maxwell Brown, Effect Days 2025 workshop part 1.
- [Incremental adoption of Effect](https://youtu.be/LEiNtsMMo8c) - Tim Smart, Effect Days 2025 workshop part 2.
- [Structured concurrency](https://youtu.be/do5KCcCgS18) - Effect Days 2025.
- [Effect on the frontend](https://youtu.be/G_jp87gxILE) - Effect Days 2025.
- [MasterClass' AI voice chat](https://youtu.be/foPXd8T6Ido) - David Golightly, Effect Days 2025.
- [Effect for AWS Lambda](https://youtu.be/Cg8Hv5nN1-A) - Effect Days 2025.
- [Simplifying forms with Effect](https://youtu.be/RieDcO_LJik) - Effect Days 2025.
- [Effect: next-generation TypeScript](https://www.youtube.com/watch?v=SloZE4i4Zfk) - Ethan Niser, 2023.
- [Effect for beginners](https://www.youtube.com/watch?v=fTN8BX5qj6s) - Ethan Niser, 2023.
- [Effect-ful computations with fibers](https://www.youtube.com/watch?v=uwALExyq4NY) - Early talk on the fiber model.
- [Effect: the unreadable library that captured my heart](https://www.youtube.com/watch?v=S2GChOwivwQ) - Matt Pocock, 2025.
- [Building reliable support agents using the Effect TypeScript library](https://www.youtube.com/@aiDotEngineer) - Michael Fester at AI Engineer.
- [Why my coding agents use Effect](https://youtu.be/s6uAUvAaRN0) - Parker Landon.
- [Theo on Effect in his stack](https://youtu.be/3c4UyGRBnmM) - Around 43:55.
- [Lucas Barake's channel](https://www.youtube.com/@lucas-barake) - Long-form videos on RPC, workers, permissions, and more.
- [Ben Davis's channel](https://www.youtube.com/@bmdavis419) - Includes "My favorite TypeScript library just got so much better".
- [Web Village Voyage](https://www.youtube.com/@webvv) - Video guides on Effect values.
- [Sign Language Tech](https://www.youtube.com/@SignLanguageTech) - Effect guides in sign language by Milad Vafaeifard.
- [SvelteKit and Effect with Dillon Mulroy](https://www.youtube.com/@SvelteSociety) - Svelte Society.
- [TDC Floripa 2025 slides](https://speakerdeck.com/talyssonoc/tdc-floripa-2025-abordagens-funcionais-efetivas-em-typescript-com-effect-ts) - Talysson Oliveira Cassiano's intro talk, in Portuguese.

### Podcasts

- [Cause & Effect](https://effect.website/podcast) - Official podcast. [YouTube](https://youtube.com/playlist?list=PLDf3uQLaK2B_jaZ5Fy7IPNq0FIViV_CQl), [Spotify](https://open.spotify.com/show/4QTFiem4o0G9V2vXtv8vMU), [Apple Podcasts](https://podcasts.apple.com/us/podcast/cause-effect/id1781879869).
  - Ep. 1: Adopting Effect at Zendesk, with Attila Večerek.
  - Ep. 2: Scaling AI for customer support at Markprompt, with Michael Fester.
  - Ep. 3: Scaling voice AI at MasterClass, with David Golightly.
  - Ep. 4: From skeptic to advocate, scaling Effect at Vercel, with Dillon Mulroy.
  - Ep. 5: Event-driven systems in fintech at Spiko, with Samuel Briole.
  - Ep. 6: Inside OpenRouter's tech stack, with Louis Vichy.
  - Ep. 7: Reliable payroll systems in TypeScript, with Adam Rankin.
  - Ep. 8: Effectifying OpenCode, with Kit Langton.
  - Ep. 9: Foldkit, an Effect-first frontend framework, with Devin Jameson.
  - Ep. 10: Software engineering in the age of AI, with John A. De Goes.
- [Happy Path Programming: Effects and local-first with Johannes Schickling](https://podcasters.spotify.com/pod/show/happypathprogramming/episodes/101-Effects-and-Local-First-with-Johannes-Schickling-e2lkhkj) - James Ward and Bruce Eckel.
- [Happy Path Programming with Sam Goodwin on Alchemy](https://www.youtube.com/@HappyPathProgramming) - Infrastructure as Effects.
- [syntax.fm](https://syntax.fm) - Episode with Johannes Schickling on Effect as TypeScript's missing library.
- [nickyt.live](https://nickyt.live) - Michael Arnaldi introduces Effect through live coding.

### Community

- [Discord](https://discord.gg/effect-ts) - Main chat. Has `#job-board` and `#advent-of-effect` channels.
- [Events calendar](https://luma.com/effect-community) - Meetups in Paris, Berlin, Milan, Miami, Vienna, and New York have run through 2025 and 2026.
- [Effect Days](https://effect.website/effect-days) - Yearly conference.
- [evryg-org/effect-paris](https://github.com/evryg-org/effect-paris) - Effect Paris meetup, organized by Evryg.
- [Effect-TS/meetups](https://github.com/Effect-TS/meetups) - Meetup group repo. Last updated 2024.
- [X](https://twitter.com/EffectTS_) - Official account.
- [Bluesky](https://bsky.app/profile/effect-ts.bsky.social) - Official account.
- [LinkedIn](https://www.linkedin.com/company/effect-ts) - Company page for Effectful Technologies.
- [Effectful Technologies](https://www.effectful.co) - The company behind Effect.

### Companies using Effect

Each entry links to a public source. Names alone are not enough to be listed.

- [Vercel](https://effect.website/podcast/episodes/from-skeptic-to-advocate-scaling-effect-at-vercel-with-dillon-mulroy/) - Podcast episode on scaling Effect at Vercel.
- [Zendesk](https://effect.website/podcast/episodes/adopting-effect-at-zendesk-with-attila-vecerek/) - Podcast episode on adoption.
- [OpenRouter](https://effect.website/podcast/episodes/inside-openrouters-tech-stack-and-use-of-effect-with-louis-vichy/) - Podcast episode on internal tooling.
- [MasterClass](https://effect.website/podcast/episodes/scaling-voice-ai-at-masterclass-with-effect-and-typescript-with-david-golightly/) - Voice AI chatbot.
- [Markprompt and 14.ai](https://effect.website/podcast/episodes/scaling-ai-for-customer-support-at-markprompt-with-effect-with-michael-fester/) - AI customer support.
- [Spiko](https://effect.website/blog/this-week-in-effect/62) - Fintech backend. See the CTO's article under Articles.
- [inato](https://effect.website/blog/this-week-in-effect/18) - Migrated from fp-ts in two months. Write-up under Articles.
- [Unsplash](https://effect.website/blog/this-week-in-effect/28) - Announced production use in This Week in Effect 28.
- [Glide](https://effect.website/blog/this-week-in-effect/26) - Bulk API.
- [Mayflower](https://effect.website/blog/this-week-in-effect/120) - Standard backend framework. Write-up under Articles.
- [StudioCMS](https://studiocms.dev) - Full migration. Write-ups under Articles.
- [DXOS](https://dxos.org) - Composer and the ECHO database.
- [Evolu](https://www.evolu.dev) - Local-first platform.
- [Million](https://effect.website/blog/this-week-in-effect/37) - Installer rewritten with Effect.
- [Polar](https://effect.website/blog/this-week-in-effect/104) - Production use announced.
- [Supermemory](https://effect.website/blog/this-week-in-effect/111) - Built with Effect.
- [Fiberplane](https://effect.website/blog/this-week-in-effect/114) - Typed errors and dependency management.
- [HumanLayer](https://effect.website/blog/this-week-in-effect/123) - Migrating to Effect.
- [Alchemy](https://alchemy.run) - Infrastructure as Effects.
- [Mixedbread](https://effect.website/blog/how-mixedbread-transformed-our-search) - Powers Effect docs search.
- [Sentry](https://effect.website/blog/this-week-in-effect/110) - Ships an official `@sentry/effect` SDK.
- [Thoughtworks](https://effect.website/blog/this-week-in-effect/60) - Put Effect on the Technology Radar after using it on client work.

### Effect in other languages

Ports and libraries that borrow Effect's design outside TypeScript.

- [Industrial/id_effect](https://github.com/Industrial/id_effect) - Rust `Effect<A, E, R>` with context, layers, and pipe.
- [Almaju/effect-rs](https://github.com/Almaju/effect-rs) - Functional effect framework for Rust inspired by Effect.
- [SylphxAI/effect](https://github.com/SylphxAI/effect) - Functional programming utilities for Dart inspired by Effect.
- [tim-smart/elemental](https://github.com/tim-smart/elemental) - Effect system and dependency management for Dart. Last updated 2024.
- [lachenmayer/SwiftEffect](https://github.com/lachenmayer/SwiftEffect) - Experimental effect system for Swift inspired by ZIO and Effect.
- [kevin-lee/effectie](https://github.com/kevin-lee/effectie) - Tool for FP effect libraries in Scala.
- [ZIO](https://zio.dev) - The Scala library Effect's design descends from.
- [thefrontside/effection](https://github.com/thefrontside/effection) - Structured concurrency for JavaScript, a different design. Has an `@effectionx/effect-ts` bridge.

### Other lists

- [m9tdev/awesome-effect](https://github.com/m9tdev/awesome-effect) - Earlier list, last updated July 2025.
- [evryg-org/awesome-effect-ts](https://github.com/evryg-org/awesome-effect-ts) - Short list from Evryg.
- [betalyra/awesome-effect-ts](https://github.com/betalyra/awesome-effect-ts) - List from Betalyra.
- [lvndry/awesome-effect-ts](https://github.com/lvndry/awesome-effect-ts) - List with a contribution checklist.
- [sundaray/awesome-effect](https://github.com/sundaray/awesome-effect) - Learning resources.
- [marbemac/llms-effect](https://github.com/marbemac/llms-effect) - Repositories picked for LLM-assisted learning.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Entries must exist, must be reachable, and must say what the thing does. Run `bun run check` before opening a pull request.
