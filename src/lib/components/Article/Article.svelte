<script lang="ts">
	import { tocAttr } from "$lib/util/toc";
	import { tocStore } from "$stores/toc";
	import type { BlogContent } from "$types/blog";
	import { onMount } from "svelte";

	export let data: BlogContent;

	let observer: IntersectionObserver;
	let postElement: HTMLElement;
	let loaded = false;

	$: if (loaded && postElement && data && data.toc) {
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
	<h1>{data.title}</h1>
	{#if data.eyecatch}
		<img src={data.eyecatch.url} alt="blog eyecatch" />
	{/if}
	<div bind:this={postElement}>{@html data.body}</div>
</article>
