type CopyrightYear = `${number}` | `${number}-${number}`;
export const getCopyrightYearString = (sinceYear: number | undefined): CopyrightYear => {
	const currentYear = new Date().getFullYear();

	if (!sinceYear) {
		return `${currentYear}`;
	}

	return sinceYear === currentYear ? `${sinceYear}` : `${sinceYear}-${currentYear}`;
};
