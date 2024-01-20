import type { CodeHighlighterConfig } from "$types/config";

export const siteConfig = {
	title: "SvelteKit-Blog-template",
	lang: "ja",
	since: 2024
} as const;

export const shikiConfig: CodeHighlighterConfig = {
	theme: "material-theme-darker",
	langs: undefined
};
