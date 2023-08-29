const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const convertDate = (dateString) => {
	const [year, month, day] = dateString.split('-');
	const monthName = months[parseInt(month, 10) - 1];
	return { day, month: monthName, year };
};
