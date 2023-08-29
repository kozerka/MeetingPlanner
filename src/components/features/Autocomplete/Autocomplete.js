import React from 'react';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import styles from './Autocomplete.module.scss';
import GlassContainer from '../../layout/GlassContainer/GlassContainer';

class Autocomplete extends React.Component {
	state = {
		filteredSuggestions: [],
		showSuggestions: false,
		userInput: '',
	};

	onChange = (e) => {
		const { suggestions } = this.props;
		const userInput = e.currentTarget.value;
		const filteredSuggestions = suggestions.filter((suggestion) =>
			suggestion.toLowerCase().includes(userInput.toLowerCase())
		);

		this.setState({
			filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value,
		});
		this.props.onFilterChange(userInput);
	};

	onClick = (e) => {
		const selectedValue = e.currentTarget.innerText;
		this.setState({
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: selectedValue,
		});
		this.props.onFilterChange(selectedValue); 
	};

	onResetFilter = () => {
		this.setState({
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: '',
		});
		this.props.onFilterChange('');
	};

	render() {
		const {
			onChange,
			onClick,
			onResetFilter,
			state: { filteredSuggestions, showSuggestions, userInput },
		} = this;

		let suggestionsListComponent;
		if (showSuggestions && userInput) {
			if (filteredSuggestions.length) {
				suggestionsListComponent = (
					<ul className={styles.items}>
						{filteredSuggestions.map((suggestion, index) => (
							<li className={styles.item} key={index} onClick={onClick}>
								{suggestion}
							</li>
						))}
					</ul>
				);
			}
		}

		return (
			<GlassContainer className={styles.container}>
				<Input
					type="text"
					value={userInput}
					onChange={onChange}
					placeholder="Search..."
				/>
				{suggestionsListComponent}
				<Button
					type="button"
					buttonText="Reset Searching results"
					onClick={onResetFilter}
				/>
			</GlassContainer>
		);
	}
}

export default Autocomplete;
