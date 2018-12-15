import React from 'react';
import ButtonGroup from '../button-group/button-group';

const booleanSelector = (props) => {
  return <ButtonGroup
    options={props.options}
    size={props.size}
  />
}

export default booleanSelector;