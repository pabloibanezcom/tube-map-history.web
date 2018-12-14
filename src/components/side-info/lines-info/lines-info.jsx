// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class LinesInfo extends React.Component {

  state = {
    selectedLineId: null
  }

  showLineInfo(line) {
    this.setState((prevState) => { return { selectedLineId: prevState.selectedLineId !== line._id ? line._id : null } });
  }

  selectLine(line) {
    this.props.onLineSelected(line._id);
  }

  closeLine() {
    this.props.onLineSelected(null);
  }

  render() {
    return <div className="lines-info">
      <a href="javascript:void(0)" className="back-link-top" onClick={() => this.props.onModeSelected('main')}><i className="zmdi zmdi-arrow-left"></i>All London info</a>
      <div className="side-info-title">Lines</div>
      <div className="lines-list list-group">
        {this.props.lines.map(l => {
          return <React.Fragment key={l._id}>
            <a href="javascript:void(0)" onClick={() => this.showLineInfo(l)} className={`list-group-item list-group-item-action withripple ${this.state.selectedLineId === l._id ? 'selected' : ''}`} style={{ borderLeftColor: l.colour }}>
              {l.name}</a>
            {this.state.selectedLineId === l._id ?
              <div className="line-basic-info">
                <div className="line-year-start">
                  <div className="line-year-start-label">Opened in</div>
                  <div className="line-year-start-value">1906</div>
                </div>
              </div>
              : null}
          </React.Fragment>
        })}
      </div>
    </div>
  }
}

export default LinesInfo;