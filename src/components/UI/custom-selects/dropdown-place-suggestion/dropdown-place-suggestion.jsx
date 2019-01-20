import React from 'react';

const dropdownPlaceSuggestion = (props) => {
  return <a role="option" onClick={() => props.onSelectOption(props.option)} className={`dropdown-item ${props.activeIndex === props.index ? 'active' : ''}`}
    aria-disabled="false" aria-selected="true">
    <span>{props.option.name}</span>
  </a>
}

export default dropdownPlaceSuggestion