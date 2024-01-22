<script lang="ts">
	import Main from "$components/Main";
	import Tag from "$components/Tag";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Main>
	<h1>{"タグ一覧"}</h1>
	<ul class="not-prose flex gap-2">
		{#each data.contents as tag}
			<li class="contents">
				<Tag {tag} />
			</li>
		{/each}
	</ul>
</Main>
