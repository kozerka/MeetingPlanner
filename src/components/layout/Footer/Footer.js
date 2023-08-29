import styles from './Footer.module.scss'
const Footer = () => {
	const copyright = String.fromCodePoint(0x00a9);

	return (
		<footer className={styles.footer}>
			Copyright {copyright} 2023 All rights reserved | This template is made by
			<a
				className={styles.link}
				href="https://github.com/kozerka"
				target="_blank"
				rel="noreferrer"
			>
				kozerka
			</a>
		</footer>
	);
};
export default Footer;
