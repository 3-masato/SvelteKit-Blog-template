<script lang="ts">
	import Tag from "$components/Tag";
	import NoImage from "$lib/assets/noimage.webp";
	import type { Blog } from "$types/blog";

	export let content: Blog;
</script>

<a
	class="not-prose group flex w-full rounded-sm p-4 transition-colors ease-out hover:bg-gray-200 hover:dark:bg-zinc-700"
	href={`${content.id}`}
>
	<div class="h-full w-full sm:flex">
		<div
			class="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-sm sm:h-44 sm:w-72"
		>
			<img
				class="absolute start-0 top-0 h-full w-full rounded-sm object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
				src={content.eyecatch?.url ?? NoImage}
				alt={content.title}
			/>
		</div>

		<div class="mt-4 grow space-y-2 px-4 sm:mt-0">
			<h3 class="text-xl font-bold">
				{content.title}
			</h3>

			<div class="">
				<ul class="not-prose flex">
					{#each content.tags as tag}
						<li class="contents">
							<Tag {tag} />
						</li>
					{/each}
				</ul>
			</div>

			<div class="flex gap-[0.5rem] text-xs text-gray-500 dark:text-gray-500">
				<span
					>公開日時：<time datetime={content.raw.publishedAt} itemprop="datePublished"
						>{content.date.publishedDate}</time
					></span
				>
				{#if content.date.isRevised}
					<span
						>更新日時：<time datetime={content.raw.revisedAt} itemprop="dateRevised"
							>{content.date.revisedDate}</time
						></span
					>
				{/if}
			</div>
		</div>
	</div>
</a>
