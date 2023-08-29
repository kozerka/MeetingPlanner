import React from 'react';
import Calendar from '../../features/Calendar/Calendar';
import styles from './Main.module.scss';
class Main extends React.Component {
	render() {return (
		<main className={styles.container}>
			<Calendar changeBackground={this.props.changeBackground}/>
		</main>
	);
	}
	
};
export default Main;
