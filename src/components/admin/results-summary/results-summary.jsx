import React from 'react';

const resultsSummary = (props) => {
  return (
    <div className="results-summary">
      <h3 className="left"><span className="amount">{props.numberElements}</span><span className="label">{props.label}</span></h3>
      <a href="" onClick={e => { e.preventDefault(); props.onShowDialog('ADD_STATION'); }} className="btn btn-sm btn-raised btn-primary right"><i className="zmdi zmdi-plus"></i> Add station</a>
      <div className="clearfix"></div>
    </div>
  )
}

export default resultsSummary