import React from 'react';
import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';

function TableDisplay({ people }) {
	const tableItems = people.map((person) => {
		return <TableItem key={person.name} person={person} />;
	});
	// console.log(people);
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Name</th>
					<th>Birth Date</th>
					<th>Height</th>
					<th>Mass</th>
					<th>Home World</th>
					<th>Species</th>
				</tr>
			</thead>
			<tbody>{tableItems}</tbody>
		</Table>
	);
}

export default TableDisplay;
