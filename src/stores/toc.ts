import { writable } from "svelte/store";

export const tocStore = (() => {
	type Heading = string;

	const data = new Map<Heading, number>();
	const { subscribe, set } = writable(data);

	const addTOC = (heading: Heading) => {
		data.set(heading, (data.get(heading) || 0) + 1);
		set(new Map(data));
	};

	const delTOC = (heading: Heading) => {
		const count = data.get(heading);
		if (count) {
			if (count === 1) {
				data.delete(heading);
			} else {
				data.set(heading, count - 1);
			}
			set(new Map(data));
		}
	};

	return {
		subscribe,
		addTOC,
		delTOC
	};
})();
