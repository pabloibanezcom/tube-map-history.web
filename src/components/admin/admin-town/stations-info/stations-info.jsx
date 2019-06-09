import { CollapseList, Pagination } from 'components/shared';
import React from 'react';
import StationsInfoContent from './stations-info-content/stations-info-content';
import StationsInfoHeader from './stations-info-header/stations-info-header';

const stationsInfo = (props) => {
  const { pagination, stations, onPageChange } = props;

  return (
    <div className="stations-info">
      <CollapseList
        elements={stations}
        hoverType="secondary"
        header={StationsInfoHeader}
        content={StationsInfoContent}
      />
      <Pagination
        color="secondary"
        pagination={pagination}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default stationsInfo;