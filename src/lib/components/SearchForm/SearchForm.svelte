<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
	import { Icon } from "svelte-awesome";
	import type { DOMAttributes } from "svelte/elements";

	let searchValue = "";
	const onSubmit: DOMAttributes<HTMLFormElement>["on:submit"] = (e) => {
		if (!searchValue) {
			return e.preventDefault();
		}
	};
	afterNavigate(() => {
		searchValue = "";
	});
</script>

<form method="GET" action="/search" class="contents" on:submit={onSubmit}>
	<div class="relative">
		<input
			type="text"
			name="query"
			class="w-full rounded-sm border-zinc-600 bg-transparent px-4 py-1 ps-11
      placeholder:text-zinc-500 focus:border-blue-500 focus:ring-blue-500
        disabled:pointer-events-none disabled:opacity-50
      dark:border-zinc-600 dark:text-zinc-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			placeholder={"Search"}
			bind:value={searchValue}
		/>
		<div class="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
			<Icon data={faMagnifyingGlass} class="text-zinc-600 dark:text-zinc-500" />
		</div>
	</div>
</form>
