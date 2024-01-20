<script>
</script>

<main id="main" class="mx-auto mb-32 mt-12 flex h-full w-full justify-center">
	<aside class="max-w-screen-md flex-1">
		{#if $$slots.left}
			<slot name="left" />
		{/if}
	</aside>
	<section class="prose prose-base prose-zinc w-full max-w-screen-md px-4 dark:prose-invert">
		<slot />
	</section>
	<aside class="max-w-screen-md flex-1">
		{#if $$slots.right}
			<slot name="right" />
		{/if}
	</aside>
</main>
