import { getTocHeadings } from "$server/util/toc";
import type { Blog, BlogContent } from "$types/blog";
import * as cheerio from "cheerio";
import { formatDateInfo } from "./date";
import { applySyntaxHighlighting } from "./highlighter";

export async function parseBlogContent(blog: BlogContent): Promise<Blog> {
	const $ = cheerio.load(blog.body);

	const body = await applySyntaxHighlighting($);
	const headingsArray = getTocHeadings($);

	const formatedDate = formatDateInfo(blog);

	return {
		raw: blog,
		date: formatedDate,
		id: blog.id,
		title: blog.title,
		body: body,
		eyecatch: blog.eyecatch,
		tags: blog.tags,
		toc: headingsArray
	};
}
