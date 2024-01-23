import type { MicroCMSImage, MicroCMSListContent, MicroCMSListResponse } from "microcms-js-sdk";

export interface BlogContentMap {
	title: string;
	body: string;
	eyecatch: MicroCMSImage | undefined;
	tags: TagContent[];
}

export interface TagContentMap {
	name: string;
}

export type BlogContent<K extends keyof BlogContentMap> = MicroCMSListContent &
	Pick<BlogContentMap, K>;

export type TagContent = MicroCMSListContent & TagContentMap;

export type BlogDetailsContent = BlogContent<keyof BlogContentMap>;

export type BlogContentResponse = MicroCMSListResponse<BlogDetailsContent>;

export type TagContentResponse = MicroCMSListResponse<TagContent>;

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

export type BlogDetails = Readonly<
	{
		raw: BlogDetailsContent;
		date: FormatedDate;
		toc: TocHeading[];
	} & Pick<BlogDetailsContent, "id" | "title" | "body" | "eyecatch" | "tags">
>;
