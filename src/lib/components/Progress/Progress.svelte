<script lang="ts">
	import "./progress.scss";

	import { browser } from "$app/environment";
	import { navigating } from "$app/stores";

	import nProgress from "nprogress";

	nProgress.configure({
		showSpinner: false
	});

	$: if (browser) {
		if ($navigating) {
			nProgress.start();
		} else {
			nProgress.done();
		}
	}
</script>
