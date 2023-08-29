import styles from './Button.module.scss';
const Button = ({ type, buttonText, onClick, variant }) => {
	return (
		<button className={`${styles.randomButton} ${variant ? styles[`randomButton--${variant}`] : ''}`}
			type={type} onClick={onClick}>
			{buttonText}
		</button>
	);
};

export default Button;
