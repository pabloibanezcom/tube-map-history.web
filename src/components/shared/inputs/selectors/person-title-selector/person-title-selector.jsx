import { Selector } from 'components/shared';
import React from 'react';
import config from './person-title-config.json';
import options from './person-title-options.json';

const personTitleSeletor = props => {
  const { onChange } = props;
  return <Selector config={config} options={options} onChange={onChange} />;
};

export default personTitleSeletor;
