import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const linePanel = (props) => {
  return <div className="line-header">
    <span><FontAwesomeIcon icon={'route'} /> {props.result.name}</span>
  </div>
}

export default linePanel;