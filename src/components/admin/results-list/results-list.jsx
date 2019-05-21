import { Collapse } from 'components/shared';
import React from 'react';
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

  createHeader = (result) => {
    const { currentResulsType, town } = this.props;
    switch (currentResulsType) {
      case 'stations':
        return <StationHeader result={result} town={town} />
      case 'lines':
        return <LineHeader result={result} />
      default:
        return null;
    }
  }

  createContent = (result) => {
    const { currentResulsType, onShowDialog, town } = this.props;
    switch (currentResulsType) {
      case 'stations':
        return <StationPanel
          result={result}
          town={town}
          onShowDialog={onShowDialog}
        />
      default:
        return null;
    }
  }

  showResult(resultId) {
    const { activeResult } = this.state;
    const _activeResult = resultId === activeResult ? null : resultId;
    this.setState({ activeResult: _activeResult });
  }

  render() {
    const { results } = this.props;
    const { activeResult } = this.state;
    return (
      <div className="results-list">
        {results.map(r => {
          return (
            <div key={r._id}>
              <Collapse
                selectionId={r._id}
                onSelected={(resultId) => this.showResult(resultId)}
                active={r._id === activeResult}
                header={this.createHeader(r)}
                content={this.createContent(r)}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ResultsList;