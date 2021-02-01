import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'

function Header({onFormSubmit}) {
	return (
		<div>
			<h1>Star Wars Directory</h1>
			<Form onSubmit={onFormSubmit}>
				<Form.Row className="align-items-center justify-content-center">
					<Col id="search-label" sm={8}>
						<Form.Label>Name:</Form.Label>
						<Form.Control
							className="mb-2 ml-2"
							id="inlineFormInputName"
							name="searchTerm"
							autoComplete="off"
							placeholder="Ex: Skywalker"
						/>
					</Col>
					<Col className="col-auto" >
						<Button variant="secondary" type="submit" className="mb-2">
							Search
						</Button>
					</Col>
				</Form.Row>
			</Form>
		</div>
	);
}

export default Header;
