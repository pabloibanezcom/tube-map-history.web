import React from 'react';
import Collapse from '../../UI/collapse/collapse';
import LineHeader from './result-headers/line-header/line-header';
import StationHeader from './result-headers/station-header/station-header';
import StationPanel from './result-panels/station-panel/station-panel';

class ResultsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeResult: null
    };
  }

  showResult(resultId) {
    const activeResult = resultId === this.state.activeResult ? null : resultId;
    this.setState({ activeResult: activeResult });
  }

  createHeader = (result) => {
    switch (this.props.currentResulsType) {
      case 'stations':
        return <StationHeader result={result} />
      case 'lines':
        return <LineHeader result={result} />
      default:
        return null;
    }
  }

  createContent = (result) => {
    switch (this.props.currentResulsType) {
      case 'stations':
        return <StationPanel result={result} onShowDialog={this.props.onShowDialog} />
      default:
        return null;
    }
  }

  render() {
    return <div className="results-list">
      {this.props.results.map(r => {
        return <div key={r._id}>
          <Collapse
            selectionId={r._id}
            onSelected={(resultId) => this.showResult(resultId)}
            active={r._id === this.state.activeResult}
            header={this.createHeader(r)}
            content={this.createContent(r)}
          />
        </div>
      })}
    </div>
  }
}

export default ResultsList;