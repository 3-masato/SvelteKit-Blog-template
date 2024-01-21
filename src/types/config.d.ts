import type { ILanguageRegistration, IThemeRegistration, Lang } from "shiki";

export type SiteConfig = {
	title: string;
	lang: string;
	since: number;
};

export type CodeHighlighterConfig = {
	theme: IThemeRegistration | undefined;
	langs: (Lang | ILanguageRegistration)[] | undefined;
};
