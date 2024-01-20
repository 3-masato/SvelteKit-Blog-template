<script>
	import Prose from "$components/Prose";
</script>

<main id="main" class="mx-auto mb-32 mt-12 flex h-full w-full justify-center">
	<aside class="max-w-screen-md flex-1">
		{#if $$slots.left}
			<slot name="left" />
		{/if}
	</aside>
	<Prose>
		<slot />
	</Prose>
	<aside class="max-w-screen-md flex-1">
		{#if $$slots.right}
			<slot name="right" />
		{/if}
	</aside>
</main>
