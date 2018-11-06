import React from 'react';

const dropdownLine = (props) => {
  const style = {
    borderLeft: `10px solid ${props.option.colour}`
  };
  return <a role="option" style={style} onClick={() => props.onSelectOption(props.option)} className={`dropdown-item ${props.activeIndex === props.index ? 'active' : ''}`}
    aria-disabled="false" aria-selected="true">
    <span>{props.option.name}</span>
  </a>
}

export default dropdownLine