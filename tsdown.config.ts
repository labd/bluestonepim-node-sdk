import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/index.ts"],
	format: "esm",
	fixedExtension: false,
	dts: true,
	sourcemap: true,
	publint: true,
	failOnWarn: true,
	// TypeScript 7 is used on purpose; its "experimental API" notice is not actionable
	suppressWarnings: ["TypeScript 7.0 does not yet have a stable API"],
	unbundle: true,
});
