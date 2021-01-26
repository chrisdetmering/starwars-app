import React from 'react';

function PageItem(props) {
	return (
		<li className="page-item">
			<button className="page-link" onClick={() => props.changePage(props.number)}>
				{props.number}
			</button>
		</li>
	);
}

export default PageItem;
