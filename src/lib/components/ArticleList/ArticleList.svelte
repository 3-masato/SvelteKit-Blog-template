<script lang="ts">
	import BlogCard from "$components/BlogCard";
	import type { BlogDetails } from "$types/blog";

	export let blogs: BlogDetails[];
</script>

<div class="flex flex-col gap-2">
	{#if blogs.length === 0}
		<p>{"記事が見つかりません"}</p>
	{:else}
		{#each blogs as blog}
			<BlogCard {blog} basePath={"blogs"} />
		{/each}
	{/if}
</div>
