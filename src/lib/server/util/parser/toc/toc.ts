import type { TocHeading } from "$types/blog";
import type { CheerioAPI } from "cheerio";

const pushHeading = (headings: TocHeading[], newHeading: TocHeading): void => {
	if (headings.length === 0 || newHeading.level <= headings[headings.length - 1].level) {
		headings.push(newHeading);
		return;
	}

	const last = headings[headings.length - 1];
	last.child = last.child || [];
	pushHeading(last.child, newHeading);
};

export const getTocHeadings = ($: CheerioAPI): TocHeading[] => {
	const headingsArray: TocHeading[] = [];
	const headings = $("h2, h3");
	const headingReg = /^h([2-3])$/i;

	for (const heading of headings) {
		const match = headingReg.exec(heading.tagName);

		if (!match) {
			console.warn(`Failed to parse heading: ${heading.tagName}`);
			continue;
		}

		const level = Number(match[1]) as TocHeading["level"];
		const title = $(heading).text();
		const slug = heading.attribs.id;

		pushHeading(headingsArray, {
			level,
			title,
			slug: `#${slug}`
		});
	}

	return headingsArray;
};
