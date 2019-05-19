import React from 'react';
import tubeLogo from 'assets/img/icons/tube_alt.png';
import BooleanSelector from '../../UI/boolean-selector/boolean-selector';
import LineConnections from './line-connections/line-connections';

const lineInfo = (props) => {

  const handleAction = (option) => {
  }

  return <div className="line-info">
    <div className="line-name" style={{ backgroundColor: props.line.colour, color: props.line.fontColour }}>
      <img className="line-logo" alt="" src={tubeLogo} />{props.line.name}
    </div>
    <div className="line-info-year">
      <BooleanSelector
        options={[{ label: props.year, action: handleAction, active: false }, { label: 'Now', action: handleAction, active: true }]}
      />
    </div>
    <LineConnections
      line={props.line}
      onStationSelected={props.onStationSelected}
    />
  </div>
}

export default lineInfo;