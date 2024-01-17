import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {}
	},
	plugins: [typography]
} satisfies Config;
