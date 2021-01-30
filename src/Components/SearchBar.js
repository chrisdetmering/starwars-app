import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {
	render() {
		return (
			<Form onSubmit={this.props.onFormSubmit}>
				<Form.Row>
					<Col id="search-label">
						<Form.Label>Search:</Form.Label>
					</Col>
					<Col sm={8}>
						<Form.Control
							className=""
							id="inlineFormInputName"
							name="searchTerm"
							autoComplete="off"
							placeholder="Ex: Skywalker"
						/>
					</Col>
					<Col>
						<Button variant="light" type="submit">
							Submit
						</Button>
					</Col>
				</Form.Row>
			</Form>
		);
	}
}

export default SearchBar;
