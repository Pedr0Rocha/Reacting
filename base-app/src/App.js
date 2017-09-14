import React, { Component } from 'react';

/* Components */
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';

/* Includes */
import './Assets/css/default.min.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<Homepage />

				<Footer />
			</div>
		);
	}
}

export default App;