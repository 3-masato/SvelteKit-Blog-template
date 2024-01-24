import type { CookieName, DefaultTheme, Theme } from "$types/themes";

/** デフォルトテーマ */
export const defaultTheme: DefaultTheme = "light";

/** cookieの名前 */
export const cookieName: CookieName = "theme";

/**
 * 利用可能なテーマの集合とそのイテレータを表す型。
 */
type Themes = {
	[K in Theme]: K;
} & {
	[Symbol.iterator](): Generator<Theme, void, unknown>;
};

/**
 * 利用可能なテーマを定義し、イテレータを通じてこれらを反復可能にするオブジェクト。
 */
export const themes = {
	light: "light",
	dark: "dark",
	*[Symbol.iterator]() {
		yield this.light;
		yield this.dark;
	}
} as const satisfies Themes;

/**
 * 与えられた値が有効なテーマであるかどうかを判断する。
 *
 * @param {unknown} themeLike - テーマとして検証する値。
 * @return {boolean} 有効なテーマの場合は `true`。
 */
export const isValidTheme = (themeLike: unknown): themeLike is Theme => {
	return (!!themeLike && themeLike === themes.dark) || themeLike === themes.light;
};

/**
 * テーマに基づいて実行するコールバック関数の集合を表す型。
 *
 * @template T - コールバック関数の戻り値の型。
 */
type ThemeActionCallbacks<T> = {
	[K in Theme]: () => T;
};

/**
 * 与えられたテーマに応じて適切なコールバック関数を実行する高階関数。
 *
 * @template T - コールバック関数の戻り値の型。
 * @param callbacks - テーマに基づいて実行するコールバック関数の集合。
 * @return 与えられたテーマに基づいてコールバック関数を実行する関数。
 */
const themeAction =
	<T>(callbacks: ThemeActionCallbacks<T>) =>
	(theme: Theme): T =>
		callbacks[theme]();

/**
 * 現在のテーマを切り替える関数。
 */
export const toggleTheme = themeAction({
	light: () => themes.dark,
	dark: () => themes.light
});

/**
 * 指定されたテーマに設定する関数。
 * ドキュメントのルート要素にテーマに応じたクラスを設定する。
 */
export const setTheme = themeAction({
	light() {
		const { classList } = document.documentElement;
		classList.remove(...themes);
		classList.add(themes.light);
	},
	dark() {
		const { classList } = document.documentElement;
		classList.remove(...themes);
		classList.add(themes.dark);
	}
});
