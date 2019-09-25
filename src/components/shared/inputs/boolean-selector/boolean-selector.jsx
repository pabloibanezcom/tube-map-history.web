import { ButtonGroup } from 'components/shared';
import React from 'react';

const booleanSelector = props => {
  const { options, size } = props;
  return <ButtonGroup options={options} size={size} />;
};

export default booleanSelector;
