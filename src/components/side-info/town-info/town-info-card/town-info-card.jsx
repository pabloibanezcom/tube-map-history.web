import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const townInfoCard = (props) => {
  return <div className="town-info-card">
    <a onClick={() => props.onModeSelected(props.infoElement.mode)}>
      <div className="info-icon"><FontAwesomeIcon icon={props.infoElement.icon} /></div>
      <div className="counter">
        {!props.initiate ? <CountUp delay={0.5} start={props.infoElement.counterStart} end={props.infoElement.value} /> : props.infoElement.value}
      </div>
      {props.infoElement.label}
    </a>
  </div>
}

export default townInfoCard;