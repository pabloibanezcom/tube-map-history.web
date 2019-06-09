import { CollapseList, Pagination } from 'components/shared';
import React from 'react';
import StationsInfoHeader from './stations-info-header/stations-info-header';

const fakeContent = () => {
  return (
    <div>
      This is fake content
    </div>
  )
}

const mockPagination = {
  page: 1,
  pages: 10
}

const stationsInfo = (props) => {
  const { stations } = props;

  const handlePaginationChange = (page) => {
    console.log(page);
  }

  return (
    <div className="stations-info">
      <CollapseList
        elements={stations}
        hoverType="secondary"
        header={StationsInfoHeader}
        content={fakeContent}
      />
      <Pagination
        color="secondary"
        pagination={mockPagination}
        onPageChange={handlePaginationChange}
      />
    </div>
  )
}

export default stationsInfo;