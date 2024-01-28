<script lang="ts">
	import ArticleList from "$components/ArticleList";
	import Main from "$components/Main";
	import type { PageData } from "./$types";

	export let data: PageData;
	const heading = "記事一覧";
</script>

<svelte:head>
	<title>{"記事一覧"}</title>
	<meta name="description" content={"記事一覧"} />
</svelte:head>

<Main>
	<h1>{heading}</h1>
	<ArticleList blogs={data.contents}></ArticleList>
</Main>
