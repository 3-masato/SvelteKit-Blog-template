<script lang="ts">
	import ArticleList from "$components/ArticleList";
	import Main from "$components/Main";
	import { siteConfig } from "$config/site";
	import type { PageData } from "./$types";

	export let data: PageData;
	const heading = "最近投稿された記事";
</script>

<svelte:head>
	<title>{siteConfig.title}</title>
	<meta name="description" content={"トップページ"} />
</svelte:head>

<Main>
	<h1>{heading}</h1>
	<ArticleList blogs={data.contents}></ArticleList>
</Main>
