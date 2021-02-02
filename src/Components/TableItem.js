import React from 'react';
import axios from 'axios';

class TableItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			homeworld: '',
			species: ''
		};
	}
	componentDidMount() {
		axios
			.get(this.props.character.homeworld)
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
			.get(this.props.character.species)
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
				<td>{this.props.character.name}</td>
				<td>{this.props.character.birth_year}</td>
				<td>{this.props.character.height}</td>
				<td>{this.props.character.mass}</td>
				<td>{this.state.homeworld}</td>
				<td>{this.state.species}</td>
			</tr>
		);
	}
}

export default TableItem;
