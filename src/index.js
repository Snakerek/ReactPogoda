// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Utworzenie komponentu React

class App extends React.Component {
	//Babel refaktoryzuje kod jacascript i dodaje state do konstruktora
	state = { lat: null, errorMessage: '' };
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
			}, //w przypadku prawidłowego pobrania lokalizacji
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		); //w przypadku błędu w pobieraniu lokalizacji
	}
	// render() jest funkcją konieczną dla Reacta do zadziałania
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}

		return <div>Loading...</div>;
	}
}
//Wyświetlenie komponentu na ekranie

ReactDOM.render(<App />, document.querySelector('#root'));
