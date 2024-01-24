<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { toggleTheme } from "$lib/util/theme";
	import { theme } from "$stores/theme";
	import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
	import Icon from "svelte-awesome";

	$: toggleThemeButtonIcon = $theme === "dark" ? faMoon : faSun;
	$: nextTheme = toggleTheme($theme);
</script>

<form
	method="POST"
	action="/?/theme"
	class="contents"
	use:enhance={async () => {
		$theme = nextTheme;
		return async ({ result }) => {
			await applyAction(result);
		};
	}}
>
	<input name="theme" value={nextTheme} hidden />
	<button
		aria-label="Toggle Theme Mode"
		class="inline-flex h-8 w-8 flex-shrink-0 translate-y-0 items-center justify-center rounded-full font-medium text-neutral-800
    transition-[transform,background-color] duration-300 ease-out hover:bg-neutral-500/30 active:translate-y-1
    active:bg-neutral-500/15 active:duration-500 dark:text-neutral-200"
	>
		<Icon data={toggleThemeButtonIcon} />
	</button>
</form>
