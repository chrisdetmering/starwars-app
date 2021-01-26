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
			currentPage: 1
		};
		this.changePage = this.changePage.bind(this);
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

	componentDidUpdate(prevProps, prevState) {
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

	changePage(page) {
		if (page === 'next') {
			this.setState((prevState) => ({
				currentPage: prevState.currentPage + 1
			}));
		}
		if (page === 'previous' && this.state.currentPage !== 1) {
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
			<div className="container d-flex flex-column justify-content-center align-items-center">
				<Header />
				<SearchBar />
				<TableDisplay people={this.state.people} />
				<Pagination nextPage={this.changePage} />
			</div>
		);
	}
}

export default App;
