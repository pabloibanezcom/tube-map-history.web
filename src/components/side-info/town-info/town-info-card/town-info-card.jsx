import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const townInfoCard = (props) => {
  const { infoElement, initiate } = props;
  return (
    <div className="town-info-card">
      <a onClick={() => props.onModeSelected(props.infoElement.mode)}>
        <div className="info-icon"><FontAwesomeIcon icon={infoElement.icon} /></div>
        <div className="counter">
          {!initiate ? <CountUp delay={0.5} start={infoElement.counterStart} end={infoElement.value} /> : infoElement.value}
        </div>
        {infoElement.label}
      </a>
    </div>
  )
}

export default townInfoCard;