<script>
	import SearchForm from "$components/SearchForm/SearchForm.svelte";
	import { siteConfig } from "$config/site";
</script>

<header
	id="header"
	class="sticky top-0 z-50 flex h-20 w-full flex-wrap bg-slate-100/80 py-4 text-sm shadow-lg backdrop-blur dark:bg-neutral-900/80 md:flex-nowrap md:justify-start"
>
	<div
		class="mx-auto flex w-full max-w-screen-xl basis-full flex-wrap items-center px-4 sm:px-6 lg:px-8"
	>
		<div class="me-5 md:me-8">
			<a class="flex items-center justify-start gap-2" href="/">
				<div class="text-xl font-bold">{siteConfig.title}</div>
			</a>
		</div>
		<SearchForm />
		<nav class=""></nav>
	</div>
</header>
