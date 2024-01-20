<script lang="ts">
	import BlogCard from "$components/BlogCard";
	import Main from "$components/Main";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<Main>
	<h1>ブログ</h1>
	<div>
		{#each data.contents as content}
			<BlogCard {content} />
		{/each}
	</div>
</Main>
