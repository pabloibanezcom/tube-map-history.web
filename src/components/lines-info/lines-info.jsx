import React from 'react';
import LineInfo from './line-info/line-info';

class LinesInfo extends React.Component {

  selectLine(line) {
    this.props.onLineSelected(line._id);
  }

  closeLine() {
    this.props.onLineSelected(null);
  }

  render() {
    return <ul className={`side-bar-menu ${this.props.show ? 'shown' : ''}`}>
      {!this.props.selectedLine ? this.props.lines.map(line => {
        return <li key={line._id} className="side-bar-menu-element line" style={{ borderLeftColor: line.colour }}>
          <a onClick={() => this.selectLine(line)}>{line.name}</a>
        </li>
      }) : <LineInfo
          line={this.props.selectedLine}
          closeLine={() => this.closeLine()} />}
    </ul>
  }
}

export default LinesInfo;