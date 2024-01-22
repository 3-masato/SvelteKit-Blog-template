import type { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse } from "microcms-js-sdk";

export type BlogTag = Required<MicroCMSListContent> & {
	name: string;
};

export type BlogContent = Required<MicroCMSListContent> & {
	title: string;
	body: string;
	eyecatch: MicroCMSImage | undefined;
	tags: BlogTag[];
};

export type BlogTagResponse = MicroCMSListResponse<BlogTag>;

export type BlogContentResponse = MicroCMSListResponse<BlogContent>;

/* ================ */

export type FormatedDate = {
	createdDate: string;
	updatedDate: string;
	publishedDate: string;
	revisedDate: string;
	isRevised: boolean;
};

/* ================ */

export type TocHeading = {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	title: string;
	slug: string;
	child?: TocHeading[];
};

/* ================ */

export type Blog = {
	raw: BlogContent;
	date: FormatedDate;
	id: BlogContent["id"];
	title: BlogContent["title"];
	body: BlogContent["body"];
	eyecatch: BlogContent["eyecatch"];
	tags: BlogContent["tags"];
	toc: TocHeading[];
};
