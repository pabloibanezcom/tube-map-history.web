import React from 'react';
import { transformDistance } from '../../../../shared/utility';

const lineInfo = (props) => {
  return <div className="line-info">
    {/* <div clasName="close-button-container"><a></a></div> */}
    <button type="button" className="close" onClick={props.closeLine}><span aria-hidden="true"><i className="zmdi zmdi-close"></i></span></button>
    <h4 className="line-name" style={{ borderBottomColor: props.line.colour }}>{props.line.name}</h4>
    <div className="basic-info">
      <div><span className="label">Opened</span><span className="value">{props.line.year}</span></div>
      <div><span className="label">Stations</span><span className="value">{props.line.connections.length}</span></div>
      <div><span className="label">Total distance</span><span className="value">{transformDistance(props.line.distance)}</span></div>
    </div>
  </div>
}

export default lineInfo;