import type { Theme } from "$types/themes";
import { writable } from "svelte/store";

export const theme = writable<Theme>();
