<script lang="ts">
	import Article from "$components/Article";
	import Main from "$components/Main";
	import TableOfContent from "$components/TableOfContent";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>ブログ</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Main>
	<Article content={data}></Article>
	<svelte:fragment slot="right">
		<div class="sticky top-20">
			<TableOfContent toc={data.toc} />
		</div>
	</svelte:fragment>
</Main>
