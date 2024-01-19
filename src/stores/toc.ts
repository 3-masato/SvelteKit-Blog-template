import { writable } from "svelte/store";

export const tocStore = (() => {
	let data = new Map<string, number>();
	const { subscribe, update, set } = writable<Map<string, number>>(data);

	const addTOC = (heading: string) => {
		update((visivle) => {
			if (visivle) {
				if (!visivle) {
					visivle = new Map<string, number>();
				}
				data.set(heading, (visivle.get(heading) || 0) + 1);
			}
			return visivle;
		});
	};

	const delTOC = (heading: string) => {
		update((visivle) => {
			if (visivle) {
				const count = data.get(heading);
				if (count) {
					if (count - 1 === 0) {
						visivle.delete(heading);
					} else {
						visivle.set(heading, count - 1);
					}
				}
			}
			return visivle;
		});
	};

	return {
		subscribe,
		init: () => {
			data = new Map<string, number>();
			set(data);
		},
		addTOC,
		delTOC
	};
})();
