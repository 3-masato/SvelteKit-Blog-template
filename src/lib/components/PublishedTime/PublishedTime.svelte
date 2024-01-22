<script lang="ts">
	import { faClock } from "@fortawesome/free-regular-svg-icons";
	import { Icon } from "svelte-awesome";

	export let datetime: string;
</script>

<span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-500">
	<Icon data={faClock} width={16} />
	<time {datetime} itemprop="datePublished">
		<slot />
	</time>
</span>
