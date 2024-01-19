export const tocAttr = "toc-heading";
export function scrollToHeading(headingId: string) {
	const heading = document.getElementById(headingId);
	const header = document.getElementById("header");
	if (heading && header) {
		const top = heading.offsetTop - header.clientHeight - 16;
		window.scrollTo({ top, behavior: "smooth" });
	}
}
