import React from 'react';
import { FormattedMessage } from 'react-intl';

const Translation = ({ prefix, id }) => {
  return <FormattedMessage id={`${prefix}.${id}`} />
}

export default Translation;