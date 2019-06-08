import React from 'react';

const infoElement = (props) => {
  const { name, value } = props;
  return (
    <div className="info-element">
      <div className="info-element-name">{name}</div>
      <div className="info-element-value">{value}</div>
    </div>
  )
}

export default infoElement;