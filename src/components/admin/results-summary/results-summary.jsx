import React from 'react';

const resultsSummary = (props) => {
  return (
    <div className="results-summary">
      <h3><span className="amount">{props.numberElements}</span><span className="label">{props.label}</span></h3>
    </div>
  )
}

export default resultsSummary