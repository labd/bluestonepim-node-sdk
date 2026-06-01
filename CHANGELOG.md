# @labdigital/bluestonepim-sdk

## 0.1.0

### Minor Changes

- 0ab4c1f: Drop Node 20 support; require Node 22 (maintenance LTS) or 24 (active LTS).

  Internal: migrated to pnpm 11, switched type-checking to tsgo, replaced eslint + prettier with Biome, added Knip, upgraded to vitest 4, cleared all `pnpm audit` advisories, and restructured CI into a dedicated lint job plus a Node-version matrix for typecheck/test/build.

## 0.0.4

### Patch Changes

- d9d04fc: Added files for package.json

## 0.0.3

### Patch Changes

- cde2c36: Fixed exports in package.json

## 0.0.2

### Patch Changes

- 1cd08b6: Made package public
