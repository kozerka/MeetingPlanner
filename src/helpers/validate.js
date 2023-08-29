const validate = (state) => {
	let errors = {};
	let isValid = true;

	const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/;

	if (
		!nameRegex.test(state.firstName.trim()) ||
		state.firstName.trim().length < 2
	) {
		errors.firstName =
			'First name should be at least 2 characters long and contain only letters';
		isValid = false;
	}

	if (
		!nameRegex.test(state.lastName.trim()) ||
		state.lastName.trim().length < 2
	) {
		errors.lastName =
			'Last name should be at least 2 characters long and contain only letters';
		isValid = false;
	}

	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if (!emailRegex.test(state.email.trim())) {
		errors.email = 'Enter a valid email';
		isValid = false;
	}

	const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
	if (!dateRegex.test(state.date.trim())) {
		errors.date = 'Enter a valid date format (DD-MM-YYYY)';
		isValid = false;
	}

	const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
	if (!timeRegex.test(state.time.trim())) {
		errors.time = 'Enter a valid time format (HH:MM)';
		isValid = false;
	}
	if (dateRegex.test(state.date.trim()) && isDateIsPast(state.date.trim())) {
		errors.date = 'The selected date is in the past!';
		isValid = false;
	}

	return {
		isValid,
		errors,
	};
};
export const isDateIsPast = (dateString) => {
	const today = new Date();
	const inputDate = new Date(dateString);
	today.setHours(0, 0, 0, 0);
	inputDate.setHours(0, 0, 0, 0);

	return inputDate < today;
};

export const validateSingleField = (fieldName, value) => {
	const mockState = {
		firstName: '',
		lastName: '',
		email: '',
		date: '',
		time: '',
	};
	mockState[fieldName] = value;
	const { errors } = validate(mockState);
	return !errors[fieldName];
};

export default validate;
