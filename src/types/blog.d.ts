import type { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse } from "microcms-js-sdk";

export type BlogCategory = Required<MicroCMSListContent> & {
	name: string;
};

export type BlogContentRaw = Required<MicroCMSListContent> & {
	title: string;
	body: string;
	eyecatch: MicroCMSImage | undefined;
	category: BlogCategory[];
};

export type BlogResponse = MicroCMSListResponse<BlogContentRaw>;

/* ================ */

export type FormatedDate = {
	createdDate: string;
	updatedDate: string;
	publishedDate: string;
	revisedDate: string;
	isRevised: boolean;
};

/* ================ */

export type BlogContent = {
	raw: BlogContentRaw;
	date: FormatedDate;
	id: BlogContentRaw["id"];
	title: BlogContentRaw["title"];
	body: BlogContentRaw["body"];
	eyecatch: BlogContentRaw["eyecatch"];
	category: BlogContentRaw["category"];
};
