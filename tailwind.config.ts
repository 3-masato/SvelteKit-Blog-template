import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code, kbd, samp, pre": {
							fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
						}
					}
				}
			}
		}
	},
	plugins: [typography, forms]
} satisfies Config;
