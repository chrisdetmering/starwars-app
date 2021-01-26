import React from 'react';

function Pagination(props) {
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<button className="page-link" onClick={() => props.nextPage('previous')}>
						Previous
					</button>
				</li>
				<li className="page-item">
					<button className="page-link" onClick={() => props.nextPage(1)}>
						1
					</button>
				</li>
				<li className="page-item">
					<button className="page-link" onClick={() => props.nextPage(2)}>
						2
					</button>
				</li>
				<li className="page-item">
					<button className="page-link" onClick={() => props.nextPage(3)}>
						3
					</button>
				</li>
				<li className="page-item">
					<button className="page-link" onClick={() => props.nextPage('next')}>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
