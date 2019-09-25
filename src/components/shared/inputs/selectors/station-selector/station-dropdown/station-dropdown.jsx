import { TownLogo } from 'components/shared';
import React from 'react';

const stationDropdown = props => {
  const { activeIndex, index, onSelectOption, option } = props;
  return (
    <a
      role="option"
      onClick={() => onSelectOption(option)}
      className={`dropdown-station-item dropdown-item ${activeIndex === index ? 'active' : ''}`}
      aria-disabled="false"
      aria-selected="true"
    >
      {option.draft && option.draft.town ? <TownLogo townUrl={option.draft.town.url} /> : null}
      <span className="station-name">{option.name}</span>
    </a>
  );
};

export default stationDropdown;
