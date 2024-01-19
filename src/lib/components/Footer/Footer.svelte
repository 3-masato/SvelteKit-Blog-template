<script lang="ts">
	import { siteConfig } from "$config/site";

	const sinceYear = siteConfig.since ? siteConfig.since.toString() : undefined;
	const curYear = new Date().toJSON().substring(0, 4);
	const copyrightYear = `${
		sinceYear && sinceYear !== curYear ? `${sinceYear}-${curYear}` : `${curYear}`
	}`;
</script>

<footer
	id="footer"
	class="mt-auto grid w-full place-items-center bg-slate-200 px-4 py-8 dark:bg-neutral-900 sm:px-6 lg:px-8"
>
	<div class="mx-auto grid h-4 w-full max-w-screen-xl place-items-center">
		<div class="text-xs">
			<p class="text-neutral-500 dark:text-neutral-400">
				&copy; <span itemprop="copyrightYear">{copyrightYear}</span>
				<span itemprop="copyrightHolder">{siteConfig.title}</span>
			</p>
		</div>
	</div>
</footer>
