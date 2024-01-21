import { getTocHeadings } from "$server/util/toc";
import type { Blog, BlogContentRaw } from "$types/blog";
import * as cheerio from "cheerio";
import { differenceInSeconds } from "date-fns";
import { formatDate } from "./date";
import { applySyntaxHighlighting } from "./highlighter";

export async function parseBlogContent(blog: BlogContentRaw): Promise<Blog> {
	const createdDate = formatDate(blog.createdAt);
	const updatedDate = formatDate(blog.updatedAt);
	const publishedDate = formatDate(blog.publishedAt);
	const revisedDate = formatDate(blog.revisedAt);
	const isRevised = differenceInSeconds(new Date(blog.publishedAt), new Date(blog.revisedAt)) > 0;

	const $ = cheerio.load(blog.body);

	const body = await applySyntaxHighlighting($);
	const headingsArray = getTocHeadings($);

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
		body: body,
		eyecatch: blog.eyecatch,
		tags: blog.tags,
		toc: headingsArray
	};
}
