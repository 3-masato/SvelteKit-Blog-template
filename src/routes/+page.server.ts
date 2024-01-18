import { getList } from "$lib/microcms";
import { parseBlogContent } from "$lib/util/parse";
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
