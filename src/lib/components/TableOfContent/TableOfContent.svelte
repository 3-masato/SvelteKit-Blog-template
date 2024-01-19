<script lang="ts">
	import { page } from "$app/stores";
	import type { TocHeading } from "$types/blog";
	import TocContent from "./TocContent.svelte";

	export let toc: TocHeading[];
</script>

{#if toc.length > 0}
	<div aria-label="Table Of Content">
		<div class="ml-2 hidden w-80 pb-8 pt-2 xl:block">
			<a
				class="block w-full rounded-sm px-4 py-2 text-left text-lg font-bold transition-colors duration-100 ease-out hover:bg-gray-600/50"
				href={$page.url.pathname}
			>
				{"目次"}
			</a>

			<ul id="table-of-content" class="flex h-full flex-col gap-0 overflow-y-auto py-1 text-sm">
				{#each toc as content}
					<TocContent {content} expanded />
				{/each}
			</ul>
		</div>
	</div>
{/if}

<style lang="scss">
	#table-of-content {
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
