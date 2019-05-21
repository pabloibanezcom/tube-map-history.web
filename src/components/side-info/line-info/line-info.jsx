import tubeLogo from 'assets/img/icons/tube_alt.png';
import React from 'react';
import BooleanSelector from '../../UI/boolean-selector/boolean-selector';
import LineConnections from './line-connections/line-connections';

const lineInfo = (props) => {

  const { line, onStationSelected, year } = props;

  const handleAction = () => {
  }

  return (
    <div className="line-info">
      <div className="line-name" style={{ backgroundColor: line.colour, color: line.fontColour }}>
        <img className="line-logo" alt="" src={tubeLogo} />{line.name}
      </div>
      <div className="line-info-year">
        <BooleanSelector
          options={[{ label: year, action: handleAction, active: false }, { label: 'Now', action: handleAction, active: true }]}
        />
      </div>
      <LineConnections
        line={line}
        onStationSelected={onStationSelected}
      />
    </div>
  )
}

export default lineInfo;