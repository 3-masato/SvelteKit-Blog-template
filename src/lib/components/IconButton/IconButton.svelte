<script lang="ts">
	import Icon from "svelte-awesome";
	import type { IconType } from "svelte-awesome/components/Icon.svelte";
	import type { AriaAttributes, HTMLButtonAttributes } from "svelte/elements";

	export let data: IconType;

	/* Aria Label */
	export let ariaLabel: AriaAttributes["aria-label"] = undefined;

	/* Button Attributes */
	export let disabled: HTMLButtonAttributes["disabled"] = undefined;
	export let form: HTMLButtonAttributes["form"] = undefined;
	export let formaction: HTMLButtonAttributes["formaction"] = undefined;
	export let formenctype: HTMLButtonAttributes["formenctype"] = undefined;
	export let formmethod: HTMLButtonAttributes["formmethod"] = undefined;
	export let formnovalidate: HTMLButtonAttributes["formnovalidate"] = undefined;
	export let formtarget: HTMLButtonAttributes["formtarget"] = undefined;
	export let name: HTMLButtonAttributes["name"] = undefined;
	export let type: HTMLButtonAttributes["type"] = undefined;
	export let value: HTMLButtonAttributes["value"] = undefined;
	export let popovertarget: HTMLButtonAttributes["popovertarget"] = undefined;
	export let popovertargetaction: HTMLButtonAttributes["popovertargetaction"] = undefined;
</script>

<button
	{disabled}
	{form}
	{formaction}
	{formenctype}
	{formmethod}
	{formnovalidate}
	{formtarget}
	{name}
	{type}
	{value}
	{popovertarget}
	{popovertargetaction}
	on:click
	aria-label={ariaLabel}
	class="inline-flex h-8 w-8 flex-shrink-0 translate-y-0 items-center justify-center rounded-full font-medium text-neutral-800
    transition-[transform,background-color] duration-300 ease-out hover:bg-neutral-500/30
    active:translate-y-1 active:bg-neutral-500/15 active:duration-500 dark:text-neutral-200"
>
	<Icon {data} />
</button>
