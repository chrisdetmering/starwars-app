import React from 'react';
import PageItem from './PageItem';

function Pagination(props) {
	const totalPages = Math.ceil(props.resultsCount / 10);
	const pageNav = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNav.push(<PageItem changePage={props.changePage} currentPage={props.currentPage} key={i} pageNumber={i} />);
	}
	const previousClass = props.currentPage === 1 ? 'page-item disabled' : 'page-item';
	const nextClass = props.currentPage === totalPages ? 'page-item disabled' : 'page-item';
	return (
		<nav aria-label="Page navigation example" className="">
			<ul className="pagination">
				<li className={previousClass}>
					<button className="page-link" onClick={() => props.changePage('previous')}>
						Previous
					</button>
				</li>
				{pageNav}
				<li className={nextClass}>
					<button className="page-link" onClick={() => props.changePage('next')}>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
