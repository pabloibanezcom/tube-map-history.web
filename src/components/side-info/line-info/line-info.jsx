import React from 'react';
import tubeLogo from '../../../assets/img/icons/tube_alt.png';
import BooleanSelector from '../../UI/boolean-selector/boolean-selector';

const lineInfo = (props) => {

  const handleAction = (option) => {
    console.log(option);
  }

  return <div className="line-info">
    <div className="line-name" style={{ backgroundColor: props.line.colour, color: props.line.fontColour }}>
      <img className="line-logo" alt="" src={tubeLogo} />{props.line.name}
    </div>
    <BooleanSelector
      options={[{ label: props.year, action: handleAction, active: false }, { label: 'Now', action: handleAction, active: true }]}
    />
  </div>
}

export default lineInfo;