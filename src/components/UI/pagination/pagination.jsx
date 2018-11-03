import React from 'react';
import ReactPaginate from 'react-paginate';

const pagination = (props) => {

  const handlePageChange = (evt) => {
    props.onPageChange(evt.selected + 1);
  }

  return <div className="custom-pagination">
    <nav className="navigation" aria-label="Page navigation">
      <ReactPaginate
        pageCount={props.pagination.pages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        forcePage={props.pagination.page - 1}
        onPageChange={handlePageChange}
        containerClassName={'pagination pagination-round pagination-plain'}
        pageClassName={'page-item'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        previousLabel={'«'}
        nextLabel={'»'}
      />
    </nav>
  </div>
}

export default pagination;