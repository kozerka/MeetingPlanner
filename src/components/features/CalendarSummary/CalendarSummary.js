import React from 'react';
import styles from './CalendarSummary.module.scss'
import GlassContainer from '../../layout/GlassContainer/GlassContainer';
class CalendarSummary extends React.Component {
	render() {
		const { meetings } = this.props;
		const currentDate = new Date();
		const upcomingMeetings = meetings.filter(
			(meeting) => new Date(meeting.date) > currentDate
		).length;
		const pastMeetings = meetings.length - upcomingMeetings;

		return (
			<GlassContainer className={styles.container}>
				<h1 className={styles.title}>Meetings Summary</h1>
				<p className={styles.text}>Total meetings: {meetings.length}</p>
				<p className={styles.text}>Number of past meetings: {pastMeetings}</p>
				<p className={styles.text}>
					Number of upcoming meetings: {upcomingMeetings}
				</p>
				{pastMeetings > 0 ? (
					<p className={`${styles.alert} ${styles['alert--negative']}`}>
						Alert: You have past meetings!
					</p>
				) : (
					<p className={styles.alert}>You are up to date!</p>
				)}
			</GlassContainer>
		);
	}
}

export default CalendarSummary;
