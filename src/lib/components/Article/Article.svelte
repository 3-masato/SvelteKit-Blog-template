<script lang="ts">
	import type { Blog } from "$lib/microcms";

	export let data: Blog;
</script>

<article>
	<h1>{data.title}</h1>
	<img src={data.eyecatch?.url} alt="blog eyecatch" />
	<div>{@html data.content}</div>
</article>
