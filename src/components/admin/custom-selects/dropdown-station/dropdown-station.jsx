import React from 'react';

const dropdownStation = (props) => {
  return <a role="option" onClick={() => props.onSelectOption(props.option)} className={`dropdown-station-item dropdown-item ${props.activeIndex === props.index ? 'active' : ''}`}
    aria-disabled="false" aria-selected="true">
    <span className="station-name">{props.option.name}</span><span className="station-year">{props.option.year}</span>
  </a>
}

export default dropdownStation