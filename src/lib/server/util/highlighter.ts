import { shikiConfig } from "$config/site";
import type { CheerioAPI } from "cheerio";
import { getHighlighter } from "shiki";

export const applySyntaxHighlighting = async ($: CheerioAPI) => {
	const highlighter = await getHighlighter({
		theme: shikiConfig.theme,
		langs: shikiConfig.langs
	});

	$("pre").each((_, preElement) => {
		const $pre = $(preElement);
		const $codeBlock = $pre.find("code");

		const languageClass = $codeBlock.attr("class") ?? "";
		const language = languageClass.replace(/^language-/, "");

		const codeContent = $codeBlock.text();
		const highlightedHtml = highlighter.codeToHtml(codeContent, { lang: language });

		const $highlightedContent = $(highlightedHtml);
		$highlightedContent.find(".line").each((lineNumber, lineElement) => {
			const $line = $(lineElement);
			const lineContent = $('<span class="line-content">').append($line.clone().children());
			const lineNumberElement = $(`<span class="line-gutter">${lineNumber}</span>`);

			$line.replaceWith($(`<span class="line">${lineNumberElement}${lineContent}</span>`));
		});

		$pre.replaceWith($highlightedContent);
	});

	return $.html();
};
