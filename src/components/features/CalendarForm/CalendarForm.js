import React from 'react';
import validate from '../../../helpers/validate';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import styles from './CalendarForm.module.scss';
import { calendarInputFields } from '../../../helpers/calendarInputFields';
import GlassContainer from '../../layout/GlassContainer/GlassContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

class CalendarForm extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		date: '',
		time: '',
		errors: {},
		formSubmitted: false,
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value }, () => {
			const updatedErrors = validate(this.state).errors;
			this.setState({ errors: updatedErrors });
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ formSubmitted: true });
		const { isValid, errors } = validate(this.state);
		const { firstName, lastName, email, date, time } = this.state;

		if (isValid) {
			this.props.onAddMeeting({
				firstName: firstName.trim(),
				lastName: lastName.trim(),
				email: email.trim(),
				date: date.trim(),
				time: time.trim(),
			});
			this.setState({
				firstName: '',
				lastName: '',
				email: '',
				date: '',
				time: '',
				errors: {},
			});
		} else {
			this.setState({ errors });
		}
	};

	render() {
		const { errors } = this.state;

		return (
			<GlassContainer className={styles.container}>
				<form className={styles.form} onSubmit={this.handleSubmit}>
				{calendarInputFields.map((field) => (
					<div key={field.name} className={styles.wrapper}>
						<Input
							label={field.label}
							name={field.name}
							value={this.state[field.name]}
							onChange={this.handleChange}
							placeholder={field.placeholder}
							type={field.type || 'text'}
						/>
						{this.state[field.name] && (
    this.state.errors[field.name]
    ? <FontAwesomeIcon icon={faCircleXmark} className={styles.icon} style={{ color: 'rgb(239, 65, 52)' }} aria-hidden="true" />
    : <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} style={{ color: 'rgb(23, 177, 105)' }} aria-hidden="true" />
)}

						{this.state.formSubmitted && errors[field.name] && (
							<div className={styles.tooltip}>{errors[field.name]}</div>
						)}
					</div>
				))}
				<Button type="submit" buttonText="Add Meeting" />
				</form>
		
		</GlassContainer>
		);
	}
}

export default CalendarForm;
