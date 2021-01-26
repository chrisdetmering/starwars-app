import React from 'react';
import PageItem from './PageItem';

function Pagination(props) {
	const pages = Math.ceil(props.resultsCount / 10);
	const pageNav = [];
	for (let i = 1; i <= pages; i++) {
		pageNav.push(<PageItem changePage={props.changePage} key={i} number={i} />);
	}
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<button className="page-link" onClick={() => props.changePage('previous')}>
						Previous
					</button>
				</li>
				{pageNav}
				<li className="page-item">
					<button className="page-link" onClick={() => props.changePage('next')}>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
