import { Button, CollapseList } from 'components/shared';
import React from 'react';
import StationsInfoContent from './stations-info-content/stations-info-content';
import StationsInfoHeader from './stations-info-header/stations-info-header';

const stationsInfo = (props) => {
  const { stations, viewStationStations, onAddStation, onEditStation, onDeleteStation } = props;
  return (
    <div className="stations-info">
      <div className="d-flex justify-content-end mb-30">
        <Button
          text="Add station"
          icon="add"
          outstation
          onClick={onAddStation}
        />
      </div>
      <CollapseList
        elements={stations}
        hoverType="secondary"
        header={StationsInfoHeader}
        content={StationsInfoContent}
        actions={{ viewStationStations, onEditStation, onDeleteStation }}
        {...props}
      />
    </div>
  )
}

export default stationsInfo;