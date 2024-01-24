// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			theme: import("$types/themes").Theme;
		}
		interface PageData {
			theme: import("$types/themes").Theme;
		}
	}
}

export {};
