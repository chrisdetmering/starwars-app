import React from 'react';

function PageItem(props) {
	const isCurrentPage = props.currentPage === props.pageNumber;
	const classText = isCurrentPage ? 'page-item active' : 'page-item';
	return (
		<li className={classText}>
			<button className="page-link" onClick={() => props.changePage(props.pageNumber)}>
				{props.pageNumber}
			</button>
		</li>
	);
}

export default PageItem;
