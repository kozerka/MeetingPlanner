import styles from './Input.module.scss';

const Input = ({
	name,
	value,
	onChange,
	placeholder,
	type = 'text',
	label,
}) => {

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				id={name}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{label && (
				<label className={styles.label} htmlFor={name}>
					{label}
				</label>
			)}
		</div>
	);
};

export default Input;
