// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import LineInfo from './line-info/line-info';

class LinesInfo extends React.Component {

  state = {
    showLines: false
  }

  selectLine(line) {
    this.props.onLineSelected(line._id);
  }

  closeLine() {
    this.props.onLineSelected(null);
  }

  render() {
    return <div>Lines info</div>
    // return <ul className={`side-bar-menu ${this.props.show ? 'shown' : ''}`}>
    //   <a className="collapsed" onClick={() => this.toggleElement('showLines')}>
    //     <FontAwesomeIcon icon={'route'} /><span>Lines</span>
    //     <span className="pull-right"><FontAwesomeIcon className="rotate" icon={this.state.showLines ? 'minus' : 'plus'} /></span>
    //   </a>
    //   {!this.props.selectedLine ? this.props.lines.map(line => {
    //     return <li key={line._id} className="side-bar-menu-element line" style={{ borderLeftColor: line.colour }}>
    //       <a onClick={() => this.selectLine(line)}>{line.name}</a>
    //     </li>
    //   }) : <LineInfo
    //       line={this.props.selectedLine}
    //       closeLine={() => this.closeLine()} />}
    // </ul>
  }
}

export default LinesInfo;