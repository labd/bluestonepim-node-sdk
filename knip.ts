import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["src/index.ts", "tests/**/*.test.ts"],
	project: ["src/**/*.ts", "tests/**/*.ts"],
	ignore: ["src/apis/**", "src/models/**", "src/runtime.ts"],
	ignoreDependencies: [
		// JAR-based generator, only invoked via sdk:generate script
		"@openapitools/openapi-generator-cli",
	],
	tags: ["-lintignore"],
};

export default config;
