import React from 'react';
import axios from 'axios';

class TableItem extends React.Component {
	constructor() {
		super();
		this.state = {
			homeworld: '',
			species: ''
		};
	}
	componentDidMount() {
		axios
			.get(this.props.person.homeworld)
			.then((response) => {
				const planet = response.data;
				this.setState({
					homeworld: planet.name
				});
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(this.props.person.species)
			.then((response) => {
				const species = response.data;
				this.setState({
					species: species.name
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<tr>
				<td>{this.props.person.name}</td>
				<td>{this.props.person.birth_year}</td>
				<td>{this.props.person.height}</td>
				<td>{this.props.person.mass}</td>
				<td>{this.state.homeworld}</td>
				<td>{this.state.species}</td>
			</tr>
		);
	}
}

export default TableItem;
