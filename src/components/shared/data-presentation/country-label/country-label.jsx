import PropTypes from 'prop-types';
import React from 'react';
import { getImage } from 'shared/image';

const CountryLabel = ({ country: { code, name }, className }) => {
  return (
    <span className={`flex ${className}`}>
      <img
        className="country-flag"
        alt={code}
        src={getImage(`countries/${code.toLowerCase()}.png`, 'countries/default.png')}
      />{' '}
      <span className="country-name">{name}</span>
    </span>
  );
};

CountryLabel.defaultProps = {
  className: ''
};

CountryLabel.propTypes = {
  className: PropTypes.string,
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default CountryLabel;
