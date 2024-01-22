import { getTags } from "$server/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return await getTags();
};
