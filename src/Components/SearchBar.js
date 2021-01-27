import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = { term: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<Form onSubmit={this.onFormSubmit}>
				<Form.Row>
					<Col id="search-label">
						<Form.Label>Search:</Form.Label>
					</Col>
					<Col sm={8}>
						<Form.Control
							className=""
							id="inlineFormInputName"
							value={this.state.term}
							onChange={this.handleChange}
							autoComplete="off"
							placeholder="Ex: Skywalker"
						/>
					</Col>
					<Col>
						<Button
							variant="light"
							type="submit"
							className=""
							onClick={() => {
								this.props.onSubmit(this.state.term);
							}}
						>
							Submit
						</Button>
					</Col>
				</Form.Row>
			</Form>
		);
	}
}

export default SearchBar;
