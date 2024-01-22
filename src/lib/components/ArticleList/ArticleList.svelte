<script lang="ts">
	import BlogCard from "$components/BlogCard";
	import type { Blog } from "$types/blog";

	export let blogs: Blog[];
</script>

<div class="flex flex-col gap-2">
	{#if blogs.length === 0}
		<p>{"記事が見つかりません"}</p>
	{:else}
		{#each blogs as blog}
			<BlogCard {blog} />
		{/each}
	{/if}
</div>
