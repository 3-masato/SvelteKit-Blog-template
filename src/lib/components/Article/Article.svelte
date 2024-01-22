<script lang="ts">
	import Tag from "$components/Tag";
	import NoImage from "$lib/assets/noimage.webp";
	import { observeContent } from "$lib/util/toc";
	import type { Blog } from "$types/blog";
	import { onMount } from "svelte";

	export let content: Blog;

	let postElement: HTMLElement;
	let loaded = false;

	$: if (loaded && postElement) {
		observeContent(postElement);
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
