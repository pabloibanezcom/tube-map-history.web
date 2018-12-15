import React from 'react';
import tubeLogo from '../../../assets/img/icons/tube_alt.png';

const lineInfo = (props) => {
  return <div className="line-info">

    <div className="line-name" style={{ backgroundColor: props.line.colour, color: props.line.fontColour }}>
      <img className="line-logo" alt="" src={tubeLogo} />{props.line.name}
    </div>
    {/* <div className="back-link-container">
      <a href="javascript:void(0);" className="back-link-top"><i className="zmdi zmdi-arrow-left"></i>Back to lines</a>
    </div> */}
  </div>
}

export default lineInfo;