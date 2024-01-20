<script>
	import { page } from "$app/stores";
	import Main from "$components/Main";
</script>

<Main>
	<div class="text-center">
		<div class="mb-6 mt-8 flex items-baseline justify-center gap-4">
			<span class="inline-block text-9xl font-bold">{$page.status}</span>
			<span class="inline-block text-5xl">{$page.error?.message}</span>
		</div>
		<a href="/" class="text-xl no-underline underline-offset-2 hover:underline" target="_self">
			{"トップへ戻る"}
		</a>
	</div>
</Main>
