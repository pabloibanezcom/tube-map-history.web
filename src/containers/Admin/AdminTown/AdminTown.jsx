import * as actions from 'actions/admin';
import LinesInfo from 'components/admin/admin-town/lines-info/lines-info';
import modalComponents from 'components/admin/admin-town/modals';
import StationsFilterPanel from 'components/admin/admin-town/stations-filter-panel/stations-filter-panel';
import StationsInfo from 'components/admin/admin-town/stations-info/stations-info';
import { Modal, TabMenu } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import defaultPagination from './defaultPagination.json';
import defaultSearchParams from './defaultSearchParams.json';
import townTabs from './menuTabs.json';

const emptyComponent = () => {
  return <div>This is tab D</div>;
};

class AdminTown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'lines',
      activeModal: null,
      modalProps: null
    };

    this.pageChanged = this.pageChanged.bind(this);
    this.searchParamsChanged = this.searchParamsChanged.bind(this);
    this.tabChanged = this.tabChanged.bind(this);
    this.viewLineStations = this.viewLineStations.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const { getLines, getTown, match } = this.props;
    getTown(match.params.town);
    getLines(match.params.town);
  }

  getCurrentTown = () => {
    const { match, town } = this.props;
    return town ? town._id : match.params.town;
  };

  getCurrentTabInfo() {
    const { currentTab } = this.state;
    const { lines, pagination, stations } = this.props;
    if (currentTab === 'lines' && lines) {
      return (
        <LinesInfo
          lines={lines}
          viewLineStations={this.viewLineStations}
          onAddLine={() => this.showModal('addLine')}
          onEditLine={line => this.showModal('editLine', { line })}
          onDeleteLine={() => this.showModal('deleteLine')}
        />
      );
    }
    if (currentTab === 'stations' && stations) {
      return (
        <StationsInfo
          stations={stations}
          pagination={pagination || defaultPagination}
          onPageChange={this.pageChanged}
        />
      );
    }
    return emptyComponent();
  }

  pageChanged = page => {
    this.refreshData(null, page);
  };

  searchParamsChanged = params => {
    this.refreshData(params);
  };

  tabChanged(tab) {
    this.setState({ currentTab: tab }, this.refreshData);
  }

  viewLineStations(line) {
    this.setState({ currentTab: 'stations' }, () =>
      this.refreshData({ ...defaultSearchParams, line: line._id })
    );
  }

  refreshData(newSearchParams, newPage) {
    const { getLines, match, pagination, searchParams, searchStations } = this.props;
    const _pagination = pagination || defaultPagination;
    let newPagination = !newPage ? _pagination : { ..._pagination, page: newPage };
    let _searchParams = defaultSearchParams;
    if (searchParams) {
      _searchParams = searchParams.stations;
    }
    if (newSearchParams) {
      _searchParams = newSearchParams;
      newPagination = defaultPagination;
    }
    const { currentTab } = this.state;
    if (currentTab === 'lines') {
      getLines(match.params.town);
    }
    if (currentTab === 'stations') {
      searchStations(match.params.town, _searchParams, newPagination);
    }
  }

  showModal(activeModal, modalProps) {
    this.setState({ activeModal, modalProps });
  }

  closeModal() {
    this.setState({ activeModal: null });
  }

  render() {
    const { currentTab, activeModal, modalProps } = this.state;
    const { lines, town } = this.props;
    return (
      <div className="admin-town">
        <h1 className="right-line mb-40">{town && town.name}</h1>
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <TabMenu
              type="secondary"
              tabs={townTabs}
              onTabChange={this.tabChanged}
              activeTab={currentTab}
              content={this.getCurrentTabInfo()}
            />
          </div>
          <div className="col-lg-3 col-md-12">
            {currentTab === 'stations' ? (
              <StationsFilterPanel lines={lines} onChange={this.searchParamsChanged} />
            ) : null}
          </div>
        </div>
        <Modal
          modalContent={modalComponents[activeModal]}
          onClose={this.closeModal}
          {...modalProps}
        />
      </div>
    );
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
    getTown: town => dispatch(actions.getTownStart(town)),
    getLines: town => dispatch(actions.getLinesStart(town)),
    searchStations: (town, searchParams, pagination) =>
      dispatch(actions.searchStationsStart(town, searchParams, pagination))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminTown));
