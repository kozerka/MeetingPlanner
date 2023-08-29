import React from 'react';
import Button from '../../ui/Button/Button';
import styles from './CalendarList.module.scss';
import { convertDate } from '../../../helpers/dateConverter';
import { filterMeetingsByName } from '../../../helpers/filterMeetings';
import { isDateIsPast } from '../../../helpers/validate';
import GlassContainer from '../../layout/GlassContainer/GlassContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTrash, faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';


class CalendarList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toBeDeletedId: null,
		};
	}

	handleDelete = (meetingId, action) => {
		if (action === 'confirm') {
        this.props.onDelete(meetingId);
        this.setState({ toBeDeletedId: null });
    } else if (action === 'prompt') {
        this.setState({ toBeDeletedId: meetingId });
    } else {
        this.setState({ toBeDeletedId: null });
    }
	};

	render() {
		const { meetings, filterName } = this.props;
		const { toBeDeletedId } = this.state;
		const filteredMeetings = filterMeetingsByName(meetings, filterName);
		if (filteredMeetings.length === 0) {
			return (
				<GlassContainer className={styles["calendarList--empty"]}><p>You have no upcoming meetings.</p></GlassContainer>
			);
		}

		return (
			<GlassContainer className={styles.calendarList}>
				{filteredMeetings.length > 5 && <FontAwesomeIcon icon={faCircleChevronUp} className={styles.arrowUp} />}
				{filteredMeetings.map((meeting) => {
					const isPast = isDateIsPast(meeting.date);
					const { day, month, year } = convertDate(meeting.date);
					return (
						<> 
							<GlassContainer className={styles.item} key={meeting.id}>
								<div className={`${styles["item-date"]} ${isPast ? styles["item-date--past"] : ""}`}>
									
									<div className={styles["item-day"]}>{day}</div>
									<div className={styles["item-month"]}>{month}</div>
									<div className={styles["item-year"]}>{year}</div>
								</div>
								<div className={styles.data}>
								 {meeting.firstName} {meeting.lastName} <br/> {meeting.email} <br />
									<p className={styles["item-time"]}>
									<FontAwesomeIcon icon={faClock} className={styles.icon}/> {meeting.time}
									</p>
							</div>
							{toBeDeletedId !== meeting.id && (<Button
                                        type="button"
										buttonText={<>
											<span>remove </span> <FontAwesomeIcon icon={faTrash} />
										</>
                                        }
                                        onClick={() => this.handleDelete(meeting.id, 'prompt')}
                                    />)}
							</GlassContainer>
							{toBeDeletedId === meeting.id && (
									
							<div className={styles['item-remove-container']}>
								<p className={styles.message}>
									Are you sure you want to remove this meeting?
								</p>
								<div>
									<Button type="button"
											buttonText="Yes!"
											variant='delete'
										onClick={() => this.handleDelete(meeting.id, 'confirm')}
									/>
									<Button
										type="button"
											buttonText="No"
											variant='delete'
										onClick={() => this.handleDelete(meeting.id, 'cancel')}
									/>
								</div>
						</div>
							)}
						</>
					);
				})}
				{filteredMeetings.length > 5 && <FontAwesomeIcon icon={faCircleChevronDown} className={styles.arrowDown} />}
			</GlassContainer>
		);
	}
}


export default CalendarList;
