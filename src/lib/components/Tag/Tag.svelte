<script lang="ts">
	import type { BlogTag } from "$types/blog";

	export let tag: BlogTag;
</script>

<div class="grid place-items-center">
	<a
		class="block whitespace-nowrap rounded-sm border border-blue-900 bg-blue-100 px-1.5 py-0.5 text-xs text-blue-900 transition-colors hover:bg-blue-200"
		href={`/tags/${tag.id}`}>{tag.name}</a
	>
</div>
