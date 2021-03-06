import React from 'react';
import { getImage } from 'shared/image';

const selectedCountryLabel = (option) => {
  return (
    <React.Fragment>
      <img className="country-flag" alt={option.code} src={getImage(`countries/${option.code.toLowerCase()}.png`, 'countries/default.png')} /> <span className="country-name">{option.name}</span>
    </React.Fragment>
  )
}

const countrySelected = (props) => {
  const { selectedOption } = props;
  return (
    <div className="selected-country filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ? selectedCountryLabel(selectedOption) : 'Type a country'}
        </div>
      </div>
    </div>
  )
}

export default countrySelected;