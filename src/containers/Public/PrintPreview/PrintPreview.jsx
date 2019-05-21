import * as actions from 'actions/main';
import Header from 'components/UI/header/header';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import MapWrapper from '../MapWrapper/MapWrapper';

class PrintPreview extends React.Component {

  componentDidMount() {
    const { match, onInit } = this.props;
    const town = match.params.town;
    const year = parseInt(match.params.year, 10);
    onInit(town, year);
  }

  render() {
    const { town, year } = this.props;
    return (
      <div className="print-preview">
        <Header
          optionsName="print"
        />
        <div className="page">
          <MapWrapper mode="print" />
          {town && year ? (
            <div className="print-display-info-container">
              <div className="print-display-info">
                <div className="print-display-info-town">{town.name}</div>
                <div className="print-display-info-country">{town.country}</div>
                <div className="print-display-info-year">{year}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    town: state.main.town,
    year: state.main.year,
    previousYear: state.main.previousYear,
    maxYearLoaded: state.main.maxYearLoaded,
    lines: state.main.lines,
    selectedLine: state.main.selectedLine,
    stations: state.main.stations,
    connections: state.main.connections,
    sideBarMode: state.main.sideBarMode,
    loading: state.main.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInit: (town, year) => dispatch(actions.loadInitStart(town, year)),
    onYearChange: (townId, year, previousYear, maxYearLoaded) => dispatch(actions.changeYearStart(townId, year, previousYear, maxYearLoaded))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrintPreview));
