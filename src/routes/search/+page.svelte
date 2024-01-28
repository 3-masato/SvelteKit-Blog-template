<script lang="ts">
	import ArticleList from "$components/ArticleList";
	import Main from "$components/Main";
	import SearchForm from "$components/SearchForm";
	import Tag from "$components/Tag";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.type === "result" ? `「${data.query}」の検索結果` : "サイト内検索"}</title>
	<meta name="description" content={"サイト内検索"} />
</svelte:head>

<Main>
	{#if data.type === "result"}
		<h1>{`「${data.query}」の検索結果`}</h1>
		<ArticleList blogs={data.contents}></ArticleList>
	{:else}
		<h1>{"検索"}</h1>
		<section class="contents">
			<h2>{"キーワード検索"}</h2>
			<SearchForm />
		</section>
		<section class="contents">
			<h2>{"タグ検索"}</h2>
			<ul class="not-prose flex gap-2">
				{#each data.tags.contents as tag}
					<li class="contents">
						<Tag {tag} />
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</Main>
