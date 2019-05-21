import React from 'react';

const dropdownPlaceSuggestion = (props) => {
  const { activeIndex, index, option } = props;
  return (
    <a
      role="option"
      onClick={() => props.onSelectOption(option)}
      className={`dropdown-item ${activeIndex === index ? 'active' : ''}`}
      aria-disabled="false"
      aria-selected="true"
    >
      <span>{option.name}</span>
    </a>
  )
}

export default dropdownPlaceSuggestion