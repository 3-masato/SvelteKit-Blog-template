import { getList, getTagDetail } from "$server/microcms";
import { parseBlogContent } from "$server/util/parser";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const list = await getList({
		orders: "-publishedAt",
		filters: `tags[contains]${params.tagId}`
	});
	const contents = await Promise.all(list.contents.map(parseBlogContent));
	const tag = await getTagDetail(params.tagId);

	return {
		...list,
		contents,
		tag
	};
};
