import { finishAction, searchStationsStart, startAction } from 'actions/admin';
import StationsInfo from 'components/admin/admin-town/stations-info/stations-info';
import { Pagination } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import defaultPagination from './defaultPagination.json';
import defaultSearchParams from './defaultSearchParams.json';

class AdminStationsPanel extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.changePage = this.changePage.bind(this);
    this.addStationStart = this.addStationStart.bind(this);
    this.editStationStart = this.editStationStart.bind(this);
    this.deleteStationStart = this.deleteStationStart.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  search(page) {
    const { stationSearchParams, stationPagination, searchStations } = this.props;
    let pagination;
    if (page) {
      pagination = {
        ...stationPagination,
        page
      }
    } else {
      pagination = stationPagination || defaultPagination;
    }
    searchStations(stationSearchParams || defaultSearchParams, pagination);
  }

  changePage(page) {
    this.search(page);
  }

  addStationStart() {
    const { _startAction } = this.props;
    _startAction('addStation');
  }

  editStationStart(station) {
    const { _startAction } = this.props;
    _startAction('editStation', station);
  }

  deleteStationStart(stationId) {
    const { _startAction } = this.props;
    _startAction('deleteStation', stationId);
  }

  render() {
    const { stations, stationPagination } = this.props;
    return (
      <div className="admin-stations-panel">
        <StationsInfo
          stations={stations}
          onAddStation={this.addStationStart}
          onEditStation={this.editStationStart}
          onDeleteStation={this.deleteStationStart}
        />
        {stations.length ? (
          <Pagination
            color="secondary"
            pagination={stationPagination}
            onPageChange={this.changePage}
          />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stations: state.admin.stations,
    stationSearchParams: state.admin.stationSearchParams,
    stationPagination: state.admin.stationPagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    searchStations: (searchParams, pagination) => dispatch(searchStationsStart(searchParams, pagination))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStationsPanel);
