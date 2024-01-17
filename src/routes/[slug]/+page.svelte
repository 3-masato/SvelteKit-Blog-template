<script lang="ts">
	import Article from "$components/Article";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<svelte:head>
	<title>ブログ</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Article {data}></Article>
