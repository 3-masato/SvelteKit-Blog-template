import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from "$env/static/private";
import { createClient, type MicroCMSImage, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY
});

//型定義
export type Blog = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
};
export type BlogResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Blog[];
};

//APIの呼び出し
export const getList = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	return await client.getListDetail<Blog>({
		endpoint: "blogs",
		contentId,
		queries
	});
};
