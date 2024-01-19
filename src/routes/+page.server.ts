import { getList } from "$server/microcms";
import { parseBlogContent } from "$server/util/parse";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const list = await getList();
	const contents = list.contents.map(parseBlogContent);
	return {
		...list,
		contents
	};
};

export const prerender = true;
