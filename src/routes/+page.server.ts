import { getList } from "$server/microcms";
import { parseBlogContent } from "$server/util/parser";
import type { PageServerLoad } from "./$types";

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

export const prerender = "auto";
