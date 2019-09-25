import React from 'react';
import { getImage } from 'shared/image';

const countryDropdown = props => {
  const { activeIndex, index, option } = props;
  return (
    <a
      role="option"
      onClick={() => props.onSelectOption(props.option)}
      className={`dropdown-country-item dropdown-item ${activeIndex === index ? 'active' : ''}`}
      aria-disabled="false"
      aria-selected="true"
    >
      <img
        className="country-flag"
        alt={option.code}
        src={getImage(`countries/${option.code.toLowerCase()}.png`, 'countries/default.png')}
      />
      <span className="country-name">{option.name}</span>
    </a>
  );
};

export default countryDropdown;
