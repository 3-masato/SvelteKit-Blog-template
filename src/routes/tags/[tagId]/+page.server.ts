import { getList } from "$server/microcms";
import { parseBlogContent } from "$server/util/parse";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const list = await getList({
		filters: `tags[contains]${params.tagId}`
	});
	const contents = await Promise.all(list.contents.map(parseBlogContent));

	return {
		...list,
		contents
	};
};

export const prerender = true;
