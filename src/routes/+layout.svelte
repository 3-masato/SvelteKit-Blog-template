<script lang="ts">
	import "../app.postcss";
	import "../style/global.scss";

	import { browser } from "$app/environment";
	import Footer from "$components/Footer";
	import Header from "$components/Header";
	import Progress from "$components/Progress";
	import { setTheme } from "$lib/util/theme";
	import { theme } from "$stores/theme";
	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;

	$theme = data.theme;
	$: browser && setTheme($theme);
</script>

<Progress></Progress>

<div id="app">
	<Header></Header>
	<slot />
	<Footer></Footer>
</div>
