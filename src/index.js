// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Utworzenie komponentu React

class App extends React.Component {
	//konstruktor obiektu. Za każdym razem należy odwołać się do props nadrzędnych tak jak poniżej
	constructor(props) {
		super(props);

		this.state = { lat: null, errorMessage: '' };

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
