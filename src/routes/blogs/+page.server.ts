import { getList } from "$server/microcms";
import { parseBlogContent } from "$server/util/parser";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const list = await getList({
		orders: "-publishedAt"
	});
	const contents = await Promise.all(list.contents.map(parseBlogContent));

	return {
		...list,
		contents
	};
};
