import { getList } from "$server/microcms";
import { parseBlogContent } from "$server/util/parse";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get("query") ?? "";
	const list = await getList({
		q: query
	});
	const contents = await Promise.all(list.contents.map(parseBlogContent));

	return {
		...list,
		contents,
		query
	};
};

export const prerender = true;
