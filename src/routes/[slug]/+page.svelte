<script lang="ts">
	import Article from "$components/Article";
	import Prose from "$components/Prose";
	import PostToc from "$components/TableOfContent";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>ブログ</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Prose>
	<Article {data}></Article>
</Prose>
<aside class="hidden h-full xl:block" data-position="right">
	<div class="sticky top-20">
		<PostToc toc={data.toc} />
	</div>
</aside>
