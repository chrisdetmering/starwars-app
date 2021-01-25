import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {
	render() {
		return (
			<Form inline>
				<Form.Label htmlFor="inlineFormInputName" srOnly>
					Name
				</Form.Label>
				<Form.Control className="mb-2 mr-sm-2" id="inlineFormInputName" placeholder="Ex: Luke Skywalker" />
				<Button type="submit" className="mb-2">
					Submit
				</Button>
			</Form>
		);
	}
}

export default SearchBar;
