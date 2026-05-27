import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["tests/**/*.test.ts"],
	project: ["src/**/*.ts", "tests/**/*.ts"],
	tags: ["-lintignore"],
};

export default config;
