import React from 'react';
import axios from 'axios';
import './App.css';

import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import TableDisplay from './Components/TableDisplay';
import Pagination from './Components/Pagination';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			results: {},
			characterData: [],
			currentPage: 1,
			resultsCount: 0,
			nextPage: '',
			prevPage: '',
			searchTerm: ''
		};
		this.changePage = this.changePage.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}
	componentDidMount() {
		//get people data
		const baseURL = `https://swapi.py4e.com/api/people/?search=${this.state.searchTerm}&page=${this.state
			.currentPage}`;

		console.log('Mounted');
		axios
			.get(baseURL)
			.then((response) => {
				const results = response.data;
				console.log(results);
				this.setState({
					results,
					characterData: [ ...results.results ],
					resultsCount: results.count,
					nextPage: results.next,
					prevPage: results.previous
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Did Update');

		if (prevState.currentPage !== this.state.currentPage || prevState.searchTerm !== this.state.searchTerm) {
			const baseURL = `https://swapi.py4e.com/api/people/?search=${this.state.searchTerm}&page=${this.state
				.currentPage}`;
			axios
				.get(baseURL)
				.then((response) => {
					const results = response.data;
					// console.log(results);
					this.setState({
						results,
						characterData: [ ...results.results ],
						resultsCount: results.count,
						nextPage: results.next,
						prevPage: results.previous
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	onSearchSubmit(term) {
		this.setState({
			searchTerm: term
		});
	}

	changePage(page) {
		if (page === 'next') {
			this.setState((prevState) => ({
				currentPage: prevState.currentPage + 1
			}));
		}
		if (page === 'previous') {
			this.setState((prevState) => ({
				currentPage: prevState.currentPage - 1
			}));
		}
		if (typeof page === 'number') {
			this.setState({
				currentPage: page
			});
		}
	}

	render() {
		console.log(this.state.people);
		return (
			<div className="container d-flex flex-column justify-content-start align-items-center card">
				<Header />
				<SearchBar onSubmit={this.onSearchSubmit} />
				<TableDisplay people={this.state.characterData} />
				<Pagination
					changePage={this.changePage}
					resultsCount={this.state.resultsCount}
					currentPage={this.state.currentPage}
				/>
			</div>
		);
	}
}

export default App;
