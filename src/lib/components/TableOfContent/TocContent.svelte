<script lang="ts">
	import { scrollToHeading } from "$lib/util/toc";
	import { tocStore } from "$stores/toc";
	import type { TocHeading } from "$types/blog";
	import { slide } from "svelte/transition";

	export let content: TocHeading;
	export let expanded = false;
	export let depth = 1;

	function handleClick() {
		scrollToHeading(content.slug.substring(1));
	}
</script>

<li id={content.slug} class="contents">
	<button
		on:click={handleClick}
		data-toc-link
		class="group z-10 flex w-full items-center gap-2 rounded-sm border-y-0 border-l-2 border-r-0 py-2
		transition-colors hover:bg-sky-300/80 hover:text-zinc-900 dark:hover:bg-sky-300/80 dark:hover:text-zinc-900
		{$tocStore.get(content.slug)
			? 'rounded-l-none border-l-sky-500 font-bold text-zinc-900 dark:text-zinc-100'
			: 'border-l-transparent font-normal text-zinc-600 dark:text-zinc-200'}"
		class:pl-4={depth === 1}
		class:pl-8={depth === 2}
	>
		<span class="select-none">
			{content.title}
		</span>
	</button>

	{#if content.child && content?.child.length > 0}
		{#if expanded}
			<ul transition:slide|local={{ duration: 200 }} class="flex flex-col gap-0">
				{#each content.child as c}
					<svelte:self content={c} depth={depth + 1} expanded />
				{/each}
			</ul>
		{/if}
	{/if}
</li>
