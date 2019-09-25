import React from 'react';

const linesInfoHeader = ({ element }) => {
  return (
    <div className="lines-info-header" style={{ borderLeft: `10px solid ${element.colour}` }}>
      <span>{element.name}</span>
    </div>
  );
};

export default linesInfoHeader;
