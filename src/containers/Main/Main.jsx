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
      printMode: false
    };
  }

  componentDidMount() {
    const town = this.props.match.params.town;
    const year = parseInt(this.props.match.params.year, 10);
    this.props.onInit(town, year);
  }

  yearChange = (year) => {
    this.props.history.push(`/${this.props.town.url}/${year}`);
    this.props.onYearChange(this.props.town._id, year, this.props.year, this.props.maxYearLoaded);
  }

  closeSideBar = () => {
    this.setState({ sideBarMode: null, sideBarData: null });
  }

  toggleYearSelector = () => {
    this.setState(prevState => ({
      showYearSelector: !prevState.showYearSelector
    }));
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
        optionsName="main"
        onToggleYearSelector={() => { this.toggleYearSelector() }}
        showYear={!this.state.showYearSelector}
        town={this.props.town}
        year={this.props.year}
      />
      <Sidebar />
      <MapWrapper mode="main" />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
