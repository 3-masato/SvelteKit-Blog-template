import { cookieName, defaultTheme, isValidTheme } from "$lib/util/theme";
import type { Handle } from "@sveltejs/kit";

const FIVE_MINUTES_IN_SECONDS = 5 * 60;

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get(cookieName) ?? defaultTheme;

	if (isValidTheme(theme)) {
		event.locals.theme = theme;
	}

	event.setHeaders({
		"cache-control": `private, max-age=${FIVE_MINUTES_IN_SECONDS}`
	});

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%THEME%", theme)
	});

	return response;
};
