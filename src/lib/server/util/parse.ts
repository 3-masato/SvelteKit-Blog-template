import { parseToc } from "$server/util/toc";
import type { BlogContent, BlogContentRaw } from "$types/blog";
import { differenceInSeconds } from "date-fns";
import { formatDate } from "./date";

export function parseBlogContent(blog: BlogContentRaw): BlogContent {
	const createdDate = formatDate(blog.createdAt);
	const updatedDate = formatDate(blog.updatedAt);
	const publishedDate = formatDate(blog.publishedAt);
	const revisedDate = formatDate(blog.revisedAt);
	const isRevised = differenceInSeconds(new Date(blog.publishedAt), new Date(blog.revisedAt)) > 0;
	const toc = parseToc(blog.body);

	return {
		raw: blog,
		date: {
			createdDate,
			updatedDate,
			publishedDate,
			revisedDate,
			isRevised
		},
		id: blog.id,
		title: blog.title,
		body: blog.body,
		eyecatch: blog.eyecatch,
		category: blog.category,
		toc
	};
}
