import { tocStore } from "$stores/toc";

export const scrollToHeading = (headingId: string) => {
	const heading = document.getElementById(headingId);
	const header = document.getElementById("header");
	if (heading && header) {
		const top = heading.offsetTop - header.clientHeight - 16;
		window.scrollTo({ top, behavior: "smooth" });
	}
};

export const observeContent = (postElement: HTMLElement) => {
	const tocAttr = "toc-heading";

	const callback: IntersectionObserverCallback = (entries) => {
		for (const entry of entries) {
			const heading = entry.target.getAttribute(tocAttr);
			if (heading) {
				tocStore[entry.isIntersecting ? "addTOC" : "delTOC"](heading);
			}
		}
	};

	const observer = new IntersectionObserver(callback, {
		rootMargin: "-24% 0px -48% 0px"
	});

	// Ensure curHeading is defined outside of the loop
	let curHeading = "";
	for (const child of postElement.children) {
		if (/^h[2-3]/i.test(child.tagName)) {
			curHeading = `#${child.id}`;
		}

		child.setAttribute(tocAttr, curHeading);
		observer.observe(child);
	}
};
