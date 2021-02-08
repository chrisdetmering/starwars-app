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
			searchTerm: ''
		};
		this.changePage = this.changePage.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	getCharacterData() {
		const baseURL = `https://swapi.py4e.com/api/people/?search=${this.state.searchTerm}&page=${this.state
			.currentPage}`;
		axios
			.get(baseURL)
			.then((response) => {
				const results = response.data;
				this.setState({
					results,
					characterData: [ ...results.results ],
					resultsCount: results.count
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getCharacterData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentPage !== this.state.currentPage || prevState.searchTerm !== this.state.searchTerm) {
			this.getCharacterData();
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		const searchTerm = event.target.searchTerm.value;
		this.setState({
			searchTerm,
			currentPage: 1
		});
	}

	changePage(currentPage) {
		this.setState({currentPage});
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
