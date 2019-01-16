// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Utworzenie komponentu React

class App extends React.Component {
	//konstruktor obiektu. Za każdym razem należy odwołać się do props nadrzędnych tak jak poniżej
	constructor(props) {
		super(props);

		this.state = { lat: null };
	}
	// render() jest funkcją konieczną dla Reacta do zadziałania
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position), //w przypadku prawidłowego pobrania lokalizacji
			(err) => console.log(err)
		); //w przypadku błędu w pobieraniu lokalizacji
		return <div>Latitude:</div>;
	}
}
//Wyświetlenie komponentu na ekranie

ReactDOM.render(<App />, document.querySelector('#root'));
