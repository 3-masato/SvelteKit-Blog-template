<script lang="ts">
	import ArticleList from "$components/ArticleList";
	import Main from "$components/Main";
	import type { PageData } from "./$types";

	export let data: PageData;
	const heading = `タグ「${data.tag.name}」の記事一覧`;
</script>

<svelte:head>
	<title>{heading}</title>
	<meta name="description" content={heading} />
</svelte:head>

<Main>
	<h1>{heading}</h1>
	<ArticleList blogs={data.contents}></ArticleList>
</Main>
