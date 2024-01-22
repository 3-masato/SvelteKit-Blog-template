<script lang="ts">
	import BlogCard from "$components/BlogCard";
	import Main from "$components/Main";
	export let data;
</script>

<Main>
	<h1>ブログ</h1>
	<div class="flex flex-col gap-2">
		{#each data.contents as content}
			<BlogCard {content} />
		{/each}
	</div>
</Main>
