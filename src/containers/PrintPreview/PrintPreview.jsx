import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Header from '../../components/UI/header/header';
import * as actions from '../../store/actions/main';
import MapWrapper from '../MapWrapper/MapWrapper';

class PrintPreview extends React.Component {

  componentDidMount() {
    const town = this.props.match.params.town;
    const year = parseInt(this.props.match.params.year, 10);
    this.props.onInit(town, year);
  }

  render() {
    return <div className="print-preview">
      <Header
        optionsName="print"
      />
      <div className="page">
        <MapWrapper mode="print" />
        {/* <div className="print-display-info-opacity">
          <div className="print-display-info-opacity-inner"></div>
        </div> */}
        {this.props.town && this.props.year ? <div className="print-display-info-container">
          <div className="print-display-info">
            <div className="print-display-info-town">{this.props.town.name}</div>
            <div className="print-display-info-country">{this.props.town.country}</div>
            <div className="print-display-info-year">{this.props.year}</div>
          </div>
        </div> : null}
      </div>
    </div>
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
