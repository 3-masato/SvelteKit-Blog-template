<script lang="ts">
	import { siteConfig } from "$config/site";
	import { getCopyrightYearString } from "$lib/util/copyright";

	const copyrightYear = getCopyrightYearString(siteConfig.since);
</script>

<footer
	id="footer"
	class="mt-auto grid w-full place-items-center bg-slate-200 px-4 py-8 dark:bg-neutral-900 sm:px-6 lg:px-8"
>
	<div class="mx-auto grid h-4 w-full max-w-screen-xl place-items-center">
		<p class="cursor-default select-none text-xs text-neutral-500 dark:text-neutral-400">
			&copy; <span itemprop="copyrightYear">{copyrightYear}</span>
			<span itemprop="copyrightHolder">{siteConfig.title}</span>
		</p>
	</div>
</footer>
