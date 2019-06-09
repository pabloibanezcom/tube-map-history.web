import * as actions from 'actions/admin';
import LinesInfo from 'components/admin/admin-town/lines-info/lines-info';
import StationsInfo from 'components/admin/admin-town/stations-info/stations-info';
import { TabMenu } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import defaultPagination from './defaultPagination.json';
import defaultSearchParams from './defaultSearchParams.json';

const emptyComponent = () => {
  return (
    <div>This is tab D</div>
  )
}

const townTabs = [
  {
    id: 'town',
    name: 'Town',
    icon: 'town'
  },
  {
    id: 'lines',
    name: 'Lines',
    icon: 'lines'
  },
  {
    id: 'stations',
    name: 'Stations',
    icon: 'underground'
  }
];

class AdminTown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'lines',
      pagination: defaultPagination
    }

    this.tabChange = this.tabChange.bind(this);
    this.changeStationPage = this.changeStationPage.bind(this);
  }

  componentDidMount() {
    const { getLines, getTown, match } = this.props;
    getTown(match.params.town);
    getLines(match.params.town);
  }

  getCurrentTown = () => {
    const { match, town } = this.props;
    return town ? town._id : match.params.town
  }

  getCurrentTabInfo() {
    const { currentTab } = this.state;
    const { lines, stations } = this.props;
    if (currentTab === 'lines' && lines) {
      return (
        <LinesInfo
          lines={lines}
        />
      )
    }
    if (currentTab === 'stations' && stations) {
      return (
        <StationsInfo
          stations={stations}
        />
      )
    }
    return emptyComponent();
  }

  changePage = (page) => {
    const { pagination } = this.state;

    this.search(null, null, { ...pagination, page });
  }

  changeStationPage(page) {
    this.setState(prevState => {
      return { pagination: { ...prevState.pagination, page } }
    })
  }

  tabChange(tab) {
    const { getLines, match, searchStations } = this.props;
    if (tab === 'lines') {
      getLines(match.params.town);
    }
    if (tab === 'stations') {
      searchStations(match.params.town, defaultSearchParams, defaultPagination);
    }
    this.setState({ currentTab: tab });
  }

  AddConnection(connection) {
    const { onAddConnection } = this.props;
    onAddConnection(connection);
  }

  render() {
    const { currentTab } = this.state;
    const { town } = this.props;
    return (
      <div className="admin-town">
        <h1 className="right-line mb-40">{town && town.name}</h1>
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <TabMenu
              type="secondary"
              tabs={townTabs}
              onTabChange={this.tabChange}
              activeTab={currentTab}
              content={this.getCurrentTabInfo()}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stations: state.admin.stations,
    town: state.admin.town,
    lines: state.admin.lines,
    pagination: state.admin.pagination,
    searchParams: state.admin.searchParams,
    loading: state.admin.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTown: (town) => dispatch(actions.getTownStart(town)),
    getLines: (town) => dispatch(actions.getLinesStart(town)),
    searchStations: (town, searchParams, pagination) => dispatch(actions.searchStationsStart(town, searchParams, pagination))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminTown));
