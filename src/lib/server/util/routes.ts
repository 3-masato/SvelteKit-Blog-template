import { error } from "@sveltejs/kit";

export const notFound = () => error(404, { message: "Not found" });
