import StationsInfo from 'components/admin/admin-town/stations-info/stations-info';
import { Pagination } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { finishAction, searchParamsChangeStart, startAction } from 'store/admin/actions';

class AdminStationsPanel extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeSearchParams = this.changeSearchParams.bind(this);
    this.addStationStart = this.addStationStart.bind(this);
    this.editStationStart = this.editStationStart.bind(this);
    this.deleteStationStart = this.deleteStationStart.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  search(params, page) {
    const { searchParams, pagination, searchStations } = this.props;
    const _pagination = page ? { ...pagination, page } : pagination;
    const _searchParams = params ? Object.assign({}, searchParams, params) : searchParams;
    searchStations(_searchParams, _pagination);
  }

  changePage(page) {
    this.search(null, page);
  }

  changeSearchParams(searchParams) {
    this.search(searchParams);
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
    const { draft, elementsType, stations, pagination } = this.props;
    return (
      <div className="admin-stations-panel">
        {elementsType === 'station' ? (
          <StationsInfo
            draftId={draft._id}
            stations={stations}
            onAddStation={this.addStationStart}
            onEditStation={this.editStationStart}
            onDeleteStation={this.deleteStationStart}
            onChangeParams={this.changeSearchParams}
          />
        ) : null}
        {stations.length ? (
          <Pagination
            color="secondary"
            pagination={pagination}
            onPageChange={this.changePage}
          />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    draft: state.admin.draft,
    elementsType: state.admin.elementsType,
    stations: state.admin.elements,
    searchParams: state.admin.searchParams,
    pagination: state.admin.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    searchStations: (searchParams, pagination) => dispatch(searchParamsChangeStart(searchParams, pagination, 'station'))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStationsPanel);
