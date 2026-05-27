import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["tests/**/*.test.ts"],
	project: ["src/**/*.ts", "tests/**/*.ts"],
	ignoreDependencies: ["@vitest/coverage-v8"],
	tags: ["-lintignore"],
};

export default config;
