<script lang="ts">
	import BlogCard from "$components/BlogCard";
	import Main from "$components/Main";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Main>
	<h1>「{data.query}」の検索結果</h1>
	<div class="flex flex-col gap-2">
		{#if data.contents.length === 0}
			<p>{"記事が見つかりません"}</p>
		{:else}
			{#each data.contents as content}
				<BlogCard {content} />
			{/each}
		{/if}
	</div>
</Main>
