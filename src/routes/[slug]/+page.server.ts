import { getDetail } from "$server/microcms";
import { parseBlogContent } from "$server/util/parse";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, url: { searchParams } }) => {
	const draftKey = searchParams.get("draftKey") ?? undefined;
	const detail = await getDetail(params.slug, {
		draftKey
	});

	return parseBlogContent(detail);
};

export const prerender = true;
