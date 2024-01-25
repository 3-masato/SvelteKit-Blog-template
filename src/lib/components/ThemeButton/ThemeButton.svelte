<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import IconButton from "$components/IconButton";
	import { toggleTheme } from "$lib/util/theme";
	import { theme } from "$stores/theme";
	import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

	$: toggleThemeButtonIcon = $theme === "dark" ? faMoon : faSun;
	$: nextTheme = toggleTheme($theme);
</script>

<form
	method="POST"
	action="/theme?/theme"
	class="contents"
	use:enhance={async () => {
		$theme = nextTheme;
		return async ({ result }) => {
			await applyAction(result);
		};
	}}
>
	<input name="theme" value={nextTheme} hidden />
	<IconButton data={toggleThemeButtonIcon} ariaLabel="Toggle Theme Mode"></IconButton>
</form>
