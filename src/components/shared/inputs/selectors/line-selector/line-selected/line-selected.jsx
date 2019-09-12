import React from 'react';

const lineSelected = (props) => {
  const { selectedOption } = props;
  const borderStyle = selectedOption ? {
    borderLeft: `5px solid ${selectedOption.colour}`,

  } : null;
  const innerStyle = selectedOption ? {
    paddingLeft: 8,
  } : null;

  return (
    <div className="filter-option">
      <div className="filter-option-inner" style={borderStyle}>
        <div className="filter-option-inner-inner" style={innerStyle}>
          {selectedOption ? selectedOption.shortName : 'Select a line'}
        </div>
      </div>
    </div>
  )
}

export default lineSelected;