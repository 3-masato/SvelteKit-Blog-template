import type { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse } from "microcms-js-sdk";

export type BlogTag = Required<MicroCMSListContent> & {
	name: string;
};

export type BlogContentRaw = Required<MicroCMSListContent> & {
	title: string;
	body: string;
	eyecatch: MicroCMSImage | undefined;
	tags: BlogTag[];
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

export type TocHeading = {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	title: string;
	slug: string;
	child?: TocHeading[];
};

/* ================ */

export type BlogContent = {
	raw: BlogContentRaw;
	date: FormatedDate;
	id: BlogContentRaw["id"];
	title: BlogContentRaw["title"];
	body: BlogContentRaw["body"];
	eyecatch: BlogContentRaw["eyecatch"];
	tags: BlogContentRaw["tags"];
	toc: TocHeading[];
};
