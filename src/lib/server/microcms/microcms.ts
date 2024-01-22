import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from "$env/static/private";
import { notFound } from "$server/util/routes";
import type { BlogContent, BlogContentResponse, BlogTag, BlogTagResponse } from "$types/blog";
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

const blogsEndpoint = "blogs";
const tagsEndpoint = "tags";

export const getList = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogContentResponse>({ endpoint: blogsEndpoint, queries });
};

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	try {
		return await client.getListDetail<BlogContent>({
			endpoint: blogsEndpoint,
			contentId,
			queries
		});
	} catch {
		throw notFound();
	}
};

export const getTags = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogTagResponse>({ endpoint: tagsEndpoint, queries });
};

export const getTagDetail = async (tagId: string, queries?: MicroCMSQueries) => {
	try {
		return await client.getListDetail<BlogTag>({
			endpoint: tagsEndpoint,
			contentId: tagId,
			queries
		});
	} catch {
		throw notFound();
	}
};
