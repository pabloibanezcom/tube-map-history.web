import { Translation } from 'components/shared';
import React from 'react';

const infoElement = props => {
  const { prefix, id, value } = props;
  return (
    <div className="info-element">
      <div className="info-element-name">
        <Translation prefix={prefix} id={id} />
      </div>
      <div className="info-element-value">{value}</div>
    </div>
  );
};

export default infoElement;
