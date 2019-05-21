import React from 'react';

const dropdownLine = (props) => {

  const { activeIndex, index, option } = props;

  const style = {
    borderLeft: `10px solid ${option.colour}`
  };
  return (
    <a
      role="option"
      style={style}
      onClick={() => props.onSelectOption(props.option)}
      className={`dropdown-item ${activeIndex === index ? 'active' : ''}`}
      aria-disabled="false"
      aria-selected="true"
    >
      <span>{option.name}</span>
    </a>
  )
}

export default dropdownLine