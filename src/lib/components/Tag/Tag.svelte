<script lang="ts">
	import type { BlogTag } from "$types/blog";

	export let tag: BlogTag;
</script>

<span
	class="whitespace-nowrap rounded-sm border border-blue-900 bg-blue-100 px-1.5 py-0.5 text-xs text-blue-900"
	>{tag.name}</span
>
