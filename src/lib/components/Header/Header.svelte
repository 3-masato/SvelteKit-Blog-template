<script>
	import SearchButton from "$components/SearchButton/SearchButton.svelte";
	import ThemeButton from "$components/ThemeButton";
	import { siteConfig } from "$config/site";
</script>

<header
	id="header"
	class="sticky top-0 z-50 flex h-20 w-full flex-wrap bg-slate-100/80 py-4 text-sm shadow-lg backdrop-blur dark:bg-neutral-900/80 md:flex-nowrap md:justify-start"
>
	<nav
		class="mx-auto flex w-full max-w-screen-xl basis-full flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8"
	>
		<a class="flex items-center justify-start gap-2" href="/">
			<div class="text-xl font-bold">{siteConfig.title}</div>
		</a>
		<div class="flex items-center justify-between">
			<div
				class="mr-6 flex items-center gap-x-8 border-r border-zinc-300 pr-6 font-semibold dark:border-zinc-700"
			>
				<a href="/blogs" class="transition-colors hover:text-blue-500">Blogs</a>
				<a href="/about" class="transition-colors hover:text-blue-500">About</a>
			</div>
			<div class="flex items-center gap-2">
				<ThemeButton />
				<SearchButton />
			</div>
		</div>
	</nav>
</header>
