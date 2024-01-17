<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<section>
	<h1>ブログ</h1>
	<ul>
		{#each data.contents as content}
			<li><a href={content.id}>{content.title}</a></li>
		{/each}
	</ul>
</section>
