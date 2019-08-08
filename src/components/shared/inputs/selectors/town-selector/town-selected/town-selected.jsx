import React from 'react';
import { getImage } from 'shared/image';

const selectedTownLabel = (option) => {
  return (
    <React.Fragment>
      <img className="country-flag" alt={option.url} src={getImage(`countries/${option.country.code.toLowerCase()}.png`, 'countries/default.png')} /> <span className="country-name">{option.name}</span>
    </React.Fragment>
  )
}

const townSelected = (props) => {
  const { selectedOption } = props;
  return (
    <div className="selected-country filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ? selectedTownLabel(selectedOption) : 'Type a town'}
        </div>
      </div>
    </div>
  )
}

export default townSelected;