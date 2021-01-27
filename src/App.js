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
			loading: false,
			data: {},
			people: [],
			currentPage: 1,
			resultsCount: 0
		};
		this.changePage = this.changePage.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}
	componentDidMount() {
		//get people data
		console.log('Mounted');
		this.setState({ loading: true });
		const baseURL = 'https://swapi.py4e.com/api/people/';
		const page = '?page=' + this.state.currentPage;
		axios
			.get(baseURL + page)
			.then((response) => {
				const data = response.data;
				console.log(data);
				this.setState({
					data: data,
					loading: false,
					people: [ ...data.results ],
					resultsCount: data.count
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Did Update');

		if (prevState.currentPage !== this.state.currentPage) {
			const baseURL = 'https://swapi.py4e.com/api/people/';
			const page = '?page=' + this.state.currentPage;
			axios
				.get(baseURL + page)
				.then((response) => {
					const data = response.data;
					// console.log(data);
					this.setState({
						data: data,
						loading: false,
						people: [ ...response.data.results ]
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	onSearchSubmit(term) {
		const baseURL = 'https://swapi.py4e.com/api/people/';
		const search = '?search=' + term;
		axios
			.get(baseURL + search)
			.then((response) => {
				console.log(response.data);
				const data = response.data;
				this.setState({
					people: [ ...data.results ],
					resultsCount: data.count
				});
			})
			.catch((error) => {
				console.log(error);
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
		// const text = this.state.loading ? 'loading...' : this.state.data;
		console.log(this.state.people);
		return (
			<div className="container d-flex flex-column justify-content-start align-items-center card">
				<Header />
				<SearchBar onSubmit={this.onSearchSubmit} />
				<TableDisplay people={this.state.people} />
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
