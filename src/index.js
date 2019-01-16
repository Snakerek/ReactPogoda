// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Utworzenie komponentu React

class App extends React.Component {
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
