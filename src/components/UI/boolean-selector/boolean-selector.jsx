import React from 'react';
import ButtonGroup from '../button-group/button-group';

const booleanSelector = (props) => {
  const { options, size } = props;
  return <ButtonGroup
    options={options}
    size={size}
  />
}

export default booleanSelector;