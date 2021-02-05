import React from 'react';
import axios from 'axios';
import './App.css';

import Header from './Components/Header';
import TableDisplay from './Components/TableDisplay';
import PageNav from './Components/PageNav';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characterData: [],
			currentPage: 1,
			resultsCount: null,
		};
		this.changePage = this.changePage.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	getCharacterData(baseURL) {
		axios
			.get(baseURL)
			.then((response) => {
				const results = response.data;
				this.setState({
					characterData: [ ...results.results ],
					resultsCount: results.count
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getCharacterData(
			`https://swapi.py4e.com/api/people/?page=1`);
	}



	onFormSubmit(event) {
		event.preventDefault();
		const searchTerm = event.target.searchTerm.value;
		this.getCharacterData(
			`https://swapi.py4e.com/api/people/?search=${searchTerm}`
		)
	}

	changePage(page) {
		let currentPage = page; 
		if (page === "previous") { 
			currentPage = this.state.currentPage - 1; 
		}

		if (page === "next") {
			currentPage = this.state.currentPage + 1; 
		}

		this.getCharacterData(`https://swapi.py4e.com/api/people/?page=${currentPage}`);
		this.setState(() => ({currentPage})); 
	}

	render() {
		return (
			<div className="container d-flex flex-column justify-content-start align-items-center card">
				<Header onFormSubmit={this.onFormSubmit} />
				<div className="results">
					<TableDisplay characterData={this.state.characterData} />
					<PageNav
						changePage={this.changePage}
						resultsCount={this.state.resultsCount}
						currentPage={this.state.currentPage}
					/>
				</div>
			</div>
		);
	}
}

export default App;
