<script lang="ts">
	import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
	import { Icon } from "svelte-awesome";

	export let datetime: string;
</script>

<span class="inline-flex items-center gap-1 text-sm font-medium text-gray-500">
	<Icon data={faClockRotateLeft} width={14} />
	<time {datetime} itemprop="dateRevised">
		<slot />
	</time>
</span>
