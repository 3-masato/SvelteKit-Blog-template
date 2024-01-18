<script lang="ts">
	import type { BlogContent } from "$types/blog";

	export let data: BlogContent;
</script>

<article>
	<h1>{data.title}</h1>
	{#if data.eyecatch}
		<img src={data.eyecatch.url} alt="blog eyecatch" />
	{/if}
	<div>{@html data.body}</div>
</article>
