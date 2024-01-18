<script>
	import "../app.postcss";
	import "../style/global.scss";

	import Footer from "$components/Footer";
	import Header from "$components/Header";
</script>

<div id="app">
	<Header></Header>

	<main id="main" class="mb-28 flex justify-center">
		<article class="prose prose-base prose-zinc w-full max-w-[48rem] px-4 py-12 dark:prose-invert">
			<slot />
		</article>
	</main>

	<Footer></Footer>
</div>
