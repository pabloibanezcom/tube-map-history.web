// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { distance } from '../../../shared/filters';

class LinesInfo extends React.Component {

  state = {
    selectedLineId: null
  }

  showLineInfo(line) {
    this.setState((prevState) => { return { selectedLineId: prevState.selectedLineId !== line._id ? line._id : null } });
  }

  closeLine() {
    this.props.onLineSelected(null);
  }

  render() {
    return <div className="lines-info">
      <div className="side-info-title">Lines</div>
      <div className="lines-list list-group">
        {this.props.lines.map(l => {
          return <React.Fragment key={l._id}>
            <a onClick={() => this.showLineInfo(l)} className={`list-group-item list-group-item-action withripple ${this.state.selectedLineId === l._id ? 'selected' : ''}`} style={{ borderLeftColor: l.colour }}>
              {l.name}</a>
            {this.state.selectedLineId === l._id ?
              <div className="line-basic-info">
                <div className="info-element line-year-start left">
                  <div className="info-element-label">Opened in</div>
                  <div className="info-element-value">{l.year}</div>
                </div>
                <div className="info-element line-distance right">
                  <div className="info-element-label">Distance</div>
                  <div className="info-element-value">{distance(l.distance)}</div>
                </div>
                <div className="clearfix"></div>
                <div className="info-element line-stations mt-10">
                  <div className="info-element-label">Stations</div>
                  <div className="info-element-value">{l.stationsAmount}</div>
                </div>
                <div className="mt-20">
                  <button type="button" className="btn btn-block btn-raised btn-sm btn-secondary" onClick={() => this.props.onLineSelected(l)}>View line</button>
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