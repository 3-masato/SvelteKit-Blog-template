<script lang="ts">
	import Tag from "$components/Tag";
	import NoImage from "$lib/assets/noimage.webp";
	import { tocAttr } from "$lib/util/toc";
	import { tocStore } from "$stores/toc";
	import type { BlogContent } from "$types/blog";
	import { onMount } from "svelte";

	export let content: BlogContent;

	let observer: IntersectionObserver;
	let postElement: HTMLElement;
	let loaded = false;

	$: if (loaded && postElement && content && content.toc) {
		const callback: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				const heading = entry.target.getAttribute(tocAttr);
				if (heading) {
					tocStore[entry.isIntersecting ? "addTOC" : "delTOC"](heading);
				}
			}
		};

		observer = new IntersectionObserver(callback, { threshold: 0.8 });

		// Ensure curHeading is defined outside of the loop
		let curHeading = "";
		for (const child of postElement.children) {
			if (/^h[2-3]/i.test(child.tagName)) {
				curHeading = `#${child.id}`;
			}

			child.setAttribute(tocAttr, curHeading);
			observer.observe(child);
		}
	}

	onMount(() => {
		loaded = true;
	});
</script>

<article>
	<img src={content.eyecatch?.url ?? NoImage} alt="blog eyecatch" />
	<h1>{content.title}</h1>
	<div>
		<ul class="not-prose flex">
			{#each content.tags as tag}
				<li class="contents">
					<Tag {tag} />
				</li>
			{/each}
		</ul>
	</div>
	<div class="mb-6 mt-4 flex flex-col gap-1 text-sm font-bold text-gray-500">
		<time>{content.date.publishedDate}</time>
	</div>
	<div bind:this={postElement}>{@html content.body}</div>
</article>
