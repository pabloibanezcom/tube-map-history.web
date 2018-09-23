import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import MapWrapper from '../../components/map/map-wrapper/map-wrapper';
import Header from '../../components/UI/header/header';
import YearSelector from '../../components/UI/year-selector/year-selector';
import * as actions from '../../store/actions/index';

class Main extends React.Component {

  componentDidMount() {
    const year = parseInt(this.props.match.params.year, 10);
    this.props.onYearChange(year);
  }

  yearChange(year) {
    this.props.history.push("/" + year);
    this.props.onYearChange(year, this.props.year, this.props.maxYearLoaded);
  }

  render() {
    return <div>
      {this.props.year ? <YearSelector
        year={this.props.year}
        showYearSelector={this.props.showYearSelector}
        onYearChange={(year) => { this.yearChange(year) }}
      /> : null}
      <Header
        onToggleYearSelector={() => { this.props.onToggleYearSelector() }}
      />
      <MapWrapper
        year={this.props.year}
        previousYear={this.props.previousYear}
        map={this.map}
        stations={this.props.stations}
        connections={this.props.connections}
      />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    year: state.main.year,
    previousYear: state.main.previousYear,
    maxYearLoaded: state.main.maxYearLoaded,
    stations: state.main.stations,
    connections: state.main.connections,
    loading: state.main.loading,
    showYearSelector: state.main.showYearSelector
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onYearChange: (year, previousYear, maxYearLoaded) => dispatch(actions.yearChanged(year, previousYear, maxYearLoaded)),
    onToggleYearSelector: () => dispatch(actions.toggleYearSelector())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
