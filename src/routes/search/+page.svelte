<script lang="ts">
	import ArticleList from "$components/ArticleList";
	import Main from "$components/Main";
	import type { PageData } from "./$types";

	export let data: PageData;
	const heading = `「${data.query}」の検索結果`;
</script>

<Main>
	<h1>{heading}</h1>
	<ArticleList blogs={data.contents}></ArticleList>
</Main>
