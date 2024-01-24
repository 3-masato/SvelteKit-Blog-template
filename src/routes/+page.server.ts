import { cookieName, isValidTheme } from "$lib/util/theme";
import { getList } from "$server/microcms";
import { parseBlogContent } from "$server/util/parser";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const list = await getList({
		orders: "-publishedAt",
		limit: 4
	});
	const contents = await Promise.all(list.contents.map(parseBlogContent));

	return {
		...list,
		contents
	};
};

const TEN_YEARS_IN_SECONDS = 10 * 365 * 24 * 60 * 60;

export const actions: Actions = {
	theme: async ({ cookies, request }) => {
		const data = await request.formData();
		const theme = data.get(cookieName);

		if (!isValidTheme(theme)) {
			return fail(400, { theme, missing: true });
		}
		cookies.set(cookieName, theme, { path: "/", maxAge: TEN_YEARS_IN_SECONDS });

		return { success: true };
	}
};
