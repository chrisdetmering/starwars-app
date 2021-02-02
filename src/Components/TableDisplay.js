import React from 'react';
import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';

const TableDisplay = ({ characterData, getHomeworld }) => {
	const tableItems = characterData.map((character) => {
		return <TableItem key={character.name} character={character} getHomeworld={getHomeworld} />;
	});
	return (
		<Table borderless striped hover>
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
};

export default TableDisplay;
