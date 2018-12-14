import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const cityInfoCard = (props) => {
  return <div className="city-info-card">
    <a onClick={() => props.onModeSelected(props.infoElement.mode)}>
      <div className="info-icon"><FontAwesomeIcon icon={props.infoElement.icon} /></div>
      <div className="counter"><CountUp delay={0.5} end={props.infoElement.value} /></div>
      {props.infoElement.label}
    </a>
  </div>
}

export default cityInfoCard;