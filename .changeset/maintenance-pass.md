---
"@labdigital/bluestonepim-sdk": minor
---

Drop Node 20 support; require Node 22 (maintenance LTS) or 24 (active LTS).

Internal: migrated to pnpm 11, switched type-checking to tsgo, replaced eslint + prettier with Biome, added Knip, upgraded to vitest 4, cleared all `pnpm audit` advisories, and restructured CI into a dedicated lint job plus a Node-version matrix for typecheck/test/build.
