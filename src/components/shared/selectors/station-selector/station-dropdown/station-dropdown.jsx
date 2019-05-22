import { TownLogo } from 'components/shared';
import React from 'react';

const stationDropdown = (props) => {
  const { activeIndex, index, onSelectOption, option } = props;
  return (
    <a
      role="option"
      onClick={() => onSelectOption(option)}
      className={`dropdown-station-item dropdown-item ${activeIndex === index ? 'active' : ''}`}
      aria-disabled="false"
      aria-selected="true"
    >
      {option.town ? <TownLogo town={option.town} /> : null}
      <span className="station-name">{option.name}</span>
      <span className="station-year">{option.year}</span>
    </a>
  )
}

export default stationDropdown;