import type { CodeHighlighterConfig, SiteConfig } from "$types/config";

export const siteConfig = {
	title: "SvelteKit-Blog-template",
	lang: "ja",
	since: 2024,
	defaultTheme: "light"
} as const satisfies SiteConfig;

export const shikiConfig = {
	theme: "material-theme-darker",
	langs: undefined
} as const satisfies CodeHighlighterConfig;
