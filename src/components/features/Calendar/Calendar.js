import React from 'react';
import CalendarList from '../CalendarList/CalendarList';
import CalendarForm from '../CalendarForm/CalendarForm';
import Autocomplete from '../Autocomplete/Autocomplete';
import CalendarSummary from '../CalendarSummary/CalendarSummary';
import styles from './Calendar.module.scss';
import Display from '../Display/Display';
import GlassContainer from '../../layout/GlassContainer/GlassContainer';
import { fetchMeetings, addMeeting, deleteMeeting } from '../../../helpers/api';

class Calendar extends React.Component {
	state = {
		meetings: [],
		currentMeeting: null,
		filterName: '',
	};

	componentDidMount() {
        fetchMeetings(this.setState.bind(this));
    }

    handleAddMeeting = (meeting) => {
        addMeeting(meeting, this.setState.bind(this), this.state);
    };

    handleDeleteMeeting = (meetingId) => {
        deleteMeeting(meetingId, this.setState.bind(this), this.state);
    };

    handleFilterChange = (filterName) => {
        this.setState({ filterName });
    };


	render() {
		return (
			<GlassContainer className={styles.calendar}>
				<CalendarForm onAddMeeting={this.handleAddMeeting} />
				<Autocomplete
					suggestions={this.state.meetings.map(
						(meeting) => `${meeting.firstName} ${meeting.lastName}`
					)}
					onFilterChange={this.handleFilterChange}
				/>
<Display changeBackground={this.props.changeBackground} />
				<CalendarList
					meetings={this.state.meetings}
					onDelete={this.handleDeleteMeeting}
					filterName={this.state.filterName}
				/>
				<CalendarSummary meetings={this.state.meetings} />
			</GlassContainer>
		);
	}
}

export default Calendar;
