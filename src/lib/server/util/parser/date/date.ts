import type { FormatedDate } from "$types/blog";
import { differenceInSeconds, format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import type { MicroCMSDate } from "microcms-js-sdk";

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
}: MicroCMSDate): FormatedDate => {
	return {
		createdDate: formatDate(createdAt),
		updatedDate: formatDate(updatedAt),
		publishedDate: publishedAt ? formatDate(publishedAt) : "-",
		revisedDate: revisedAt ? formatDate(revisedAt) : "-",
		isRevised:
			publishedAt && revisedAt
				? differenceInSeconds(new Date(revisedAt), new Date(publishedAt)) > 0
				: false
	};
};
