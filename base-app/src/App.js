import React, { Component } from 'react';

/* Components */
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Pages/HomePage';

/* Includes */
import './Assets/css/main.min.css';

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