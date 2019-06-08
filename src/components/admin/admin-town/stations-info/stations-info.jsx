import { CollapseList } from 'components/shared';
import React from 'react';
import StationsInfoHeader from './stations-info-header/stations-info-header';

const fakeContent = () => {
  return (
    <div>
      This is fake content
    </div>
  )
}

const stationsInfo = (props) => {
  const { stations } = props;
  return (
    <div className="stations-info">
      <CollapseList
        elements={stations}
        hoverType="secondary"
        header={StationsInfoHeader}
        content={fakeContent}
      />
    </div>
  )
}

export default stationsInfo;