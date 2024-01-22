<script lang="ts">
	import { afterNavigate, goto } from "$app/navigation";
	import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
	import { Icon } from "svelte-awesome";

	let searchValue = "";
	const onSubmit = () => {
		if (searchValue) {
			goto(`/search?query=${encodeURIComponent(searchValue)}`);
		}
	};
	afterNavigate(() => {
		searchValue = "";
	});
</script>

<form class="mx-4 flex grow items-center" on:submit|preventDefault={onSubmit}>
	<div class="relative grow">
		<input
			type="text"
			class="h-10 rounded-sm bg-transparent px-4 py-2 ps-11"
			placeholder="Search"
			bind:value={searchValue}
		/>
		<div class="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
			<Icon data={faMagnifyingGlass} />
		</div>
	</div>
</form>
