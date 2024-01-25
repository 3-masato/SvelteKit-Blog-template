import type { ILanguageRegistration, IThemeRegistration, Lang } from "shiki";
import type { Theme } from "./themes";

export type SiteConfig = {
	title: string;
	lang: string;
	since: number;
	defaultTheme: Theme;
};

export type CodeHighlighterConfig = {
	theme: IThemeRegistration | undefined;
	langs: (Lang | ILanguageRegistration)[] | undefined;
};
