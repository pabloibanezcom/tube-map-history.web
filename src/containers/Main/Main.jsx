import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import MapWrapper from '../../components/map/map-wrapper/map-wrapper';
import Sidebar from '../../components/side-bar/side-bar';
import Header from '../../components/UI/header/header';
import YearSelector from '../../components/UI/year-selector/year-selector';
import * as actions from '../../store/actions/main';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showYearSelector: true,
      showSidebar: false
    };
    this.toggleYearSelector = this.toggleYearSelector.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  componentDidMount() {
    const year = parseInt(this.props.match.params.year, 10);
    this.props.onInit(year);
  }

  yearChange(year) {
    this.props.history.push("/" + year);
    this.props.onYearChange(year, this.props.year, this.props.maxYearLoaded);
  }

  toggleYearSelector() {
    this.setState(prevState => ({
      showYearSelector: !prevState.showYearSelector
    }));
  }

  toggleSideBar() {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar
    }));
  }

  render() {
    return <div>
      {this.props.year ? <YearSelector
        year={this.props.year}
        showYearSelector={this.state.showYearSelector}
        onYearChange={(year) => { this.yearChange(year) }}
      /> : null}
      <Header
        onToggleYearSelector={() => { this.toggleYearSelector() }}
        onToggleSideBar={() => { this.toggleSideBar() }}
      />
      <Sidebar
        lines={this.props.lines}
        selectedLine={this.props.selectedLine}
        show={this.state.showSidebar}
        onClose={this.toggleSideBar}
        onLineSelected={this.props.onLoadLineDetails} />
      <MapWrapper
        overlay={this.state.showSidebar}
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
    lines: state.main.lines,
    selectedLine: state.main.selectedLine,
    stations: state.main.stations,
    connections: state.main.connections,
    loading: state.main.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInit: (year) => dispatch(actions.loadInitStart(year)),
    onYearChange: (year, previousYear, maxYearLoaded) => dispatch(actions.changeYearStart(year, previousYear, maxYearLoaded)),
    onLoadLineDetails: (lineId) => dispatch(actions.loadLineDetailsStart(lineId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
