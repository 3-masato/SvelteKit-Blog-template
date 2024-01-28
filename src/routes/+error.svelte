<script>
	import { page } from "$app/stores";
	import Main from "$components/Main";

	$: title = `${$page.status}` + ($page.error?.message ? ` ${$page.error?.message}` : "");
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={`${$page.status}`} />
	<meta name="robots" content="noindex" />
</svelte:head>

<Main>
	<div class="text-center">
		<div class="mb-6 mt-8 flex items-baseline justify-center gap-4">
			<span class="inline-block text-9xl font-bold">{$page.status}</span>
			<span class="inline-block text-5xl">{$page.error?.message}</span>
		</div>
		<a href="/" class="text-xl no-underline underline-offset-2 hover:underline">
			{"トップへ戻る"}
		</a>
	</div>
</Main>
