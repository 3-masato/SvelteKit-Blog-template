import { cookieName, isValidTheme } from "$lib/util/theme";
import { fail, type Actions } from "@sveltejs/kit";

const THEME_COOKIE_MAX_AGE = 10 * 365 * 24 * 60 * 60;

export const actions: Actions = {
	theme: async ({ cookies, request }) => {
		const data = await request.formData();
		const theme = data.get(cookieName);

		if (!isValidTheme(theme)) {
			return fail(400, { theme, missing: true });
		}

		cookies.set(cookieName, theme, { path: "/", maxAge: THEME_COOKIE_MAX_AGE });

		return { success: true };
	}
};
