import type { ILanguageRegistration, IThemeRegistration, Lang } from "shiki";

export type CodeHighlighterConfig = {
	theme: IThemeRegistration | undefined;
	langs: (Lang | ILanguageRegistration)[] | undefined;
};
