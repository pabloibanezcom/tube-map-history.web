import React from 'react';

const defaultSelected = props => {
  const { selectedOption } = props;
  return (
    <div className="filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {selectedOption ? selectedOption.name : 'Select an option'}
        </div>
      </div>
    </div>
  );
};

export default defaultSelected;
