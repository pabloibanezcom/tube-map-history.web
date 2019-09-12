import { Button, CollapseList } from 'components/shared';
import React from 'react';
import StationsFilter from './stations-filter/stations-filter';
import StationsInfoContent from './stations-info-content/stations-info-content';
import StationsInfoHeader from './stations-info-header/stations-info-header';

const stationsInfo = (props) => {
  const { draftId, stations, viewStationStations, onChangeParams, onAddStation, onEditStation, onDeleteStation } = props;
  return (
    <div className="stations-info">
      <div className="flex flex-row flex-space-between mb-30">
        <StationsFilter draftId={draftId} onChangeParams={onChangeParams} />
        <div>
          <Button
            text="Add station"
            icon="add"
            outline
            onClick={onAddStation}
          />
        </div>
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