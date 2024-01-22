import { getList } from "$server/microcms";
import { parseBlogContent } from "$server/util/parser";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const list = await getList();
	const contents = await Promise.all(list.contents.map(parseBlogContent));

	return {
		...list,
		contents
	};
};

export const prerender = true;
