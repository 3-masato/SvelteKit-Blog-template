import { sveltekit } from "@sveltejs/kit/vite";
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve(".", "src/lib/components"),
			$config: path.resolve(".", "src/config")
		}
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	}
});
