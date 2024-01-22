<script lang="ts">
	import PublishedTime from "$components/PublishedTime";
	import RevisedTime from "$components/RevisedTime";
	import Tag from "$components/Tag";
	import NoImage from "$lib/assets/noimage.webp";
	import { observeContent } from "$lib/util/toc";
	import type { BlogDetails } from "$types/blog";
	import { onMount } from "svelte";

	export let blog: BlogDetails;

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
	<img src={blog.eyecatch?.url ?? NoImage} alt="blog eyecatch" />
	<h1>{blog.title}</h1>
	<div>
		<ul class="not-prose flex">
			{#each blog.tags as tag}
				<li class="contents">
					<Tag {tag} />
				</li>
			{/each}
		</ul>
	</div>
	<div class="mb-6 mt-4 flex flex-row gap-3">
		<PublishedTime datetime={blog.raw.publishedAt}>
			{blog.date.publishedDate}
		</PublishedTime>
		{#if blog.date.isRevised}
			<RevisedTime datetime={blog.raw.revisedAt}>
				{blog.date.revisedDate}
			</RevisedTime>
		{/if}
	</div>
	<div bind:this={postElement}>{@html blog.body}</div>
</article>
