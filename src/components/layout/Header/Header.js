import styles from './Header.module.scss'
const Header = () => {
	return (
		<header className={styles.container}>
			<i className={`${styles.icon} fa-regular fa-calendar-circle-user`}></i>
			<h2 className={styles.title}>MeetingPlanner</h2>
		</header>
	);
};
export default Header;
