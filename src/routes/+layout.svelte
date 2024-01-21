<script>
	import "../app.postcss";
	import "../style/global.scss";

	import Footer from "$components/Footer";
	import Header from "$components/Header";
	import Progress from "$components/Progress";
</script>

<Progress></Progress>

<div id="app">
	<Header></Header>
	<slot />
	<Footer></Footer>
</div>
