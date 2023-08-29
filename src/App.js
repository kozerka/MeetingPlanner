import React from 'react';
import './styles/App.scss';
import bg1 from './assets/img/bg1.jpg';
import bg2 from './assets/img/bg2.jpg';
import bg3 from './assets/img/bg3.jpg';
import bg4 from './assets/img/bg4.jpg';

import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';

class App extends React.Component {

	state = {
		backgroundUrls: {
			background1: bg1,
			background2: bg2,
			background3: bg3,
			background4: bg4,
		},
		currentBackground: ''
	};
	changeBackground = (backgroundStyle) => {
    document.body.style.backgroundImage = `url(${this.state.backgroundUrls[backgroundStyle]})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
};

	render() {
		const style = {
	backgroundImage: `url(${this.state.currentBackground})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center center',
	backgroundAttachment: 'fixed',
};

		return (
			<div className="App" style={style}>
				<Header />
				<Main changeBackground={this.changeBackground} />
				<Footer />
			</div>
		);
	}
}


export default App;
