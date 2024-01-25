import { getList, getTags } from "$server/microcms";
import { parseBlogContent } from "$server/util/parser";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get("query") ?? "";
	if (query !== "") {
		const list = await getList({
			orders: "-publishedAt",
			q: query
		});
		const contents = await Promise.all(list.contents.map(parseBlogContent));

		return {
			type: "result",
			...list,
			contents,
			query
		} as const;
	} else {
		const tags = await getTags();
		return {
			type: "search",
			tags: tags
		} as const;
	}
};

export const prerender = true;
