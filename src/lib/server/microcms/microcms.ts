import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from "$env/static/private";
import { notFound } from "$server/util/routes";
import type {
	BlogContent,
	BlogContentMap,
	BlogContentResponse,
	TagContent,
	TagContentResponse
} from "$types/blog";
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

export const getDetail = async <K extends keyof BlogContentMap>(
	contentId: string,
	queries?: MicroCMSQueries
) => {
	try {
		return await client.getListDetail<BlogContent<K>>({
			endpoint: blogsEndpoint,
			contentId,
			queries
		});
	} catch {
		throw notFound();
	}
};

export const getTags = async (queries?: MicroCMSQueries) => {
	return await client.get<TagContentResponse>({ endpoint: tagsEndpoint, queries });
};

export const getTagDetail = async (tagId: string, queries?: MicroCMSQueries) => {
	try {
		return await client.getListDetail<TagContent>({
			endpoint: tagsEndpoint,
			contentId: tagId,
			queries
		});
	} catch {
		throw notFound();
	}
};
