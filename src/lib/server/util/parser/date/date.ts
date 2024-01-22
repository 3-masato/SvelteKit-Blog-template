import type { BlogContent, FormatedDate } from "$types/blog";
import { differenceInSeconds, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const formatDate = (date: string) => {
	const utcDate = new Date(date);
	const jstDate = utcToZonedTime(utcDate, "Asia/Tokyo");
	return format(jstDate, "yyyy/MM/dd");
};

export const formatDateInfo = ({
	createdAt,
	updatedAt,
	publishedAt,
	revisedAt
}: BlogContent): FormatedDate => {
	return {
		createdDate: formatDate(createdAt),
		updatedDate: formatDate(updatedAt),
		publishedDate: formatDate(publishedAt),
		revisedDate: formatDate(revisedAt),
		isRevised: differenceInSeconds(new Date(publishedAt), new Date(revisedAt)) > 0
	};
};
