export const filterMeetingsByName = (meetings, filterName) => {
	return meetings.filter((meeting) => {
		const name = `${meeting.firstName} ${meeting.lastName}`.toLowerCase();
		return name.includes(filterName.toLowerCase());
	});
};
