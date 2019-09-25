import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

const paginationComponent = props => {
  const { background, color, pagination, size } = props;

  const handlePageChange = evt => {
    props.onPageChange(evt.selected + 1);
  };

  return (
    <div className={`pagination-container pagination-container-${background}`}>
      <nav className="navigation" aria-label="Page navigation">
        <ReactPaginate
          pageCount={pagination.pages}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          forcePage={pagination.page - 1}
          onPageChange={handlePageChange}
          containerClassName={`pagination pagination-round pagination-plain ${
            background === 'light' ? `pagination-${color}` : ''
          } pagination-bg-${background} ${size !== 'lg' ? `pagination-${size}` : ''}`}
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLabel="«"
          nextLabel="»"
        />
      </nav>
    </div>
  );
};

paginationComponent.defaultProps = {
  background: 'light',
  color: 'primary',
  size: 'lg'
};

paginationComponent.propTypes = {
  background: PropTypes.oneOf(['light', 'primary', 'secondary']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'lg'])
};

export default paginationComponent;
