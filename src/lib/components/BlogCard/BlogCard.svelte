<script lang="ts">
	import Tag from "$components/Tag";
	import NoImage from "$lib/assets/noimage.webp";
	import type { Blog } from "$types/blog";

	export let blog: Blog;
</script>

<a
	class="not-prose group flex w-full rounded-sm p-4 transition-colors ease-out hover:bg-gray-200 hover:dark:bg-zinc-700"
	href={`${blog.id}`}
>
	<div class="h-full w-full sm:flex">
		<div
			class="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-sm sm:h-44 sm:w-72"
		>
			<img
				class="absolute start-0 top-0 h-full w-full rounded-sm object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
				src={blog.eyecatch?.url ?? NoImage}
				alt={blog.title}
			/>
		</div>

		<div class="mt-4 grow space-y-2 px-4 sm:mt-0">
			<h3 class="text-xl font-bold">
				{blog.title}
			</h3>

			<div class="">
				<ul class="not-prose flex gap-2">
					{#each blog.tags as tag}
						<li class="contents">
							<Tag {tag} />
						</li>
					{/each}
				</ul>
			</div>

			<div class="flex gap-[0.5rem] text-xs text-gray-500 dark:text-gray-500">
				<span
					>公開日時：<time datetime={blog.raw.publishedAt} itemprop="datePublished"
						>{blog.date.publishedDate}</time
					></span
				>
				{#if blog.date.isRevised}
					<span
						>更新日時：<time datetime={blog.raw.revisedAt} itemprop="dateRevised"
							>{blog.date.revisedDate}</time
						></span
					>
				{/if}
			</div>
		</div>
	</div>
</a>
