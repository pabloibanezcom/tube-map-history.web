import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Header from '../../components/UI/header/header';
import LoadingSpinner from '../../components/UI/loading-spinner/loading-spinner';
import YearSelector from '../../components/UI/year-selector/year-selector';
import * as actions from '../../store/actions/main';
import MapWrapper from '../MapWrapper/MapWrapper';
import Sidebar from '../SideBar/SideBar';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showYearSelector: true,
      sideBarMode: null,
      sideBarData: null
    };
  }

  componentDidMount() {
    const year = parseInt(this.props.match.params.year, 10);
    this.props.onInit(year);
  }

  yearChange = (year) => {
    this.props.history.push("/" + year);
    this.props.onYearChange(year, this.props.year, this.props.maxYearLoaded);
  }

  selectStation = (station) => {
    this.setState({ sideBarMode: 'station', sideBarData: { station: station } });
  }

  closeSideBar = () => {
    this.setState({ sideBarMode: null, sideBarData: null });
  }

  toggleYearSelector = () => {
    this.setState(prevState => ({
      showYearSelector: !prevState.showYearSelector
    }));
  }

  toggleSideBar = () => {
    if (this.state.sideBarMode) {
      this.closeSideBar();
    } else {
      this.setState({ sideBarMode: 'lines' });
    }
  }

  render() {
    return <div>
      {this.props.loading ? <LoadingSpinner /> : null}
      {this.props.year ? <YearSelector
        year={this.props.year}
        showYearSelector={this.state.showYearSelector}
        onYearChange={(year) => { this.yearChange(year) }}
      /> : null}
      <Header
        onToggleYearSelector={() => { this.toggleYearSelector() }}
        onToggleSideBar={() => { this.toggleSideBar() }}
      />
      <Sidebar />
      <MapWrapper />
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
