import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from "$env/static/private";
import type { BlogContentRaw, BlogResponse } from "$types/blog";
import { error } from "@sveltejs/kit";
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

export const getList = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	try {
		return await client.getListDetail<BlogContentRaw>({
			endpoint: "blogs",
			contentId,
			queries
		});
	} catch (e) {
		throw error(404, { message: "Not found" });
	}
};