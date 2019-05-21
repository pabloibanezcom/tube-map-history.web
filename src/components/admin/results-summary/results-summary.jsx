import React from 'react';

const resultsSummary = (props) => {
  const { label, numberElements } = props;
  return (
    <div className="results-summary">
      <h3 className="left"><span className="amount">{numberElements}</span><span className="label">{label}</span></h3>
      <a href="" onClick={e => { e.preventDefault(); props.onShowDialog('ADD_STATION'); }} className="btn btn-sm btn-raised btn-primary right"><i className="zmdi zmdi-plus" /> Add station</a>
      <div className="clearfix" />
    </div>
  )
}

export default resultsSummary