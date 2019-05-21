import * as actions from 'actions/main';
import Header from 'components/UI/header/header';
import LoadingSpinner from 'components/UI/loading-spinner/loading-spinner';
import YearSelector from 'components/UI/year-selector/year-selector';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import MapWrapper from '../MapWrapper/MapWrapper';
import Sidebar from '../SideBar/SideBar';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showYearSelector: true
    };
  }

  componentDidMount() {
    const { match, onInit } = this.props;
    const town = match.params.town;
    const year = parseInt(match.params.year, 10);
    onInit(town, year);
  }

  yearChange = (_year) => {
    const { history, maxYearLoaded, onYearChange, town, year } = this.props;
    history.push(`/${town.url}/${_year}`);
    onYearChange(town._id, _year, year, maxYearLoaded);
  }

  toggleYearSelector = () => {
    this.setState(prevState => ({
      showYearSelector: !prevState.showYearSelector
    }));
  }

  render() {
    const { loading, town, year } = this.props;
    const { showYearSelector } = this.state;
    return (
      <div>
        {loading ? <LoadingSpinner /> : null}
        {year ? <YearSelector
          year={year}
          showYearSelector={showYearSelector}
          onYearChange={(_year) => { this.yearChange(_year) }}
        /> : null}
        <Header
          optionsName="main"
          onToggleYearSelector={() => { this.toggleYearSelector() }}
          showYear={!showYearSelector}
          town={town}
          year={year}
        />
        <Sidebar />
        <MapWrapper mode="main" />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
