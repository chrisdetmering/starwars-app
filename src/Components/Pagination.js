import React from 'react';

function Pagination(props) {
	const totalPages = Math.ceil(props.resultsCount / 10);
	const pageNavBar = [];
	for (let i = 1; i <= totalPages; i++) {
		const classText = props.currentPage === i  ? 'page-item active' : 'page-item';
		pageNavBar.push(
			<li className={classText}>
				<button className="page-link " onClick={() => props.changePage(i)}>
					{i}
				</button>
			</li>
		)
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
				{pageNavBar}
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
