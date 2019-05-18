import React from 'react';
import { getImage } from 'shared/image';

const dropdownCountry = (props) => {
  return <a role="option" onClick={() => props.onSelectOption(props.option)} className={`dropdown-country-item dropdown-item ${props.activeIndex === props.index ? 'active' : ''}`}
    aria-disabled="false" aria-selected="true">
    <img className="country-flag" alt={props.option.code} src={getImage(`countries/${props.option.code.toLowerCase()}.png`, 'countries/default.png')} /><span className="country-name">{props.option.name}</span>
  </a>
}

export default dropdownCountry