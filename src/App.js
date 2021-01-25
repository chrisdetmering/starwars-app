import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		const baseURL = 'https://swapi.dev/api/';

		axios
			.get(baseURL + 'planets/1/')
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="container d-flex justify-content-center">
				<h1>Star Wars App</h1>
			</div>
		);
	}
}

export default App;
