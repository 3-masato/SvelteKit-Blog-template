<script lang="ts">
	import BlogCard from "$components/BlogCard";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<section class="mx-auto xl:w-4/5">
	<h1>ブログ</h1>
	<div>
		{#each data.contents as content}
			<BlogCard {content} />
		{/each}
	</div>
</section>
