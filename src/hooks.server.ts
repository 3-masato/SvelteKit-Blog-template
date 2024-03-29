import { siteConfig } from "$config/site";
import { cookieName, isValidTheme } from "$lib/util/theme";
import type { Handle } from "@sveltejs/kit";

const PRIVATE_CACHE_MAX_AGE = 5 * 60;

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get(cookieName) ?? siteConfig.defaultTheme;

	if (isValidTheme(theme)) {
		event.locals.theme = theme;
	}

	event.setHeaders({
		"cache-control": `private, max-age=${PRIVATE_CACHE_MAX_AGE}`
	});

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%THEME%", theme)
	});

	return response;
};
