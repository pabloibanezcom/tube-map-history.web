import * as actions from 'actions/admin';
import ActionDialog from 'components/admin/action-dialog/action-dialog';
import ResultsList from 'components/admin/results-list/results-list';
import ResultsSummary from 'components/admin/results-summary/results-summary';
import SearchFilter from 'components/admin/search-filter/search-filter';
import TownHeader from 'components/admin/town-header/town-header';
import { LoadingSpinner, Pagination } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import adminTownMenu from './adminTownMenu';
import defaultPagination from './defaultPagination';

class AdminTown extends React.Component {

  constructor(props) {
    super(props);
    this.tabSet = React.createRef();
    this.state = {
      tabs: adminTownMenu.tabs,
      activeTab: null,
      tabIndicatorStyle: null,
      actionDialog: null
    };
  }

  componentDidMount() {
    const { getTown, match } = this.props;
    getTown(match.params.town);
    this.setActiveTab(adminTownMenu.tabs[0]);
  }

  getCurrentTown = () => {
    const { match, town } = this.props;
    return town ? town._id : match.params.town
  }

  setActiveTab = (tab) => {
    const { pagination, searchParams } = this.props;
    const { tabs } = this.state;
    const tabIndex = tabs.findIndex(t => t.id === tab.id);
    const tabWith = this.tabSet.current.offsetWidth / tabs.length;
    this.setState({ activeTab: tab, tabIndicatorStyle: { width: `${tabWith}px`, left: tabIndex * tabWith } });
    this.loadPanel(tab);
    this.search(tab.id, searchParams, pagination)
  }

  loadPanel = (panel) => {
    const { loadStationsPanel } = this.props;
    switch (panel.id) {
      case 'stations':
        loadStationsPanel(this.getCurrentTown());
        break;
      default:
        break;
    }
  }

  search = (tabId, _searchParams, pagination) => {
    const { onSearch, searchParams } = this.props;
    const { activeTab } = this.state;
    const activeTabId = tabId || activeTab.id;
    const _pagination = pagination || defaultPagination;
    let sParams;
    if (_searchParams) {
      sParams = _searchParams;
    } else if (searchParams && searchParams[activeTabId]) {
      sParams = searchParams[activeTabId];
    } else {
      sParams = defaultPagination[activeTabId];
    }
    onSearch[activeTabId](this.getCurrentTown(), sParams, _pagination);
  }

  changePage = (page) => {
    const { pagination } = this.props;
    this.search(null, null, { ...pagination, page });
  }

  showDialog = (action, element, otherData) => {
    this.setState({ actionDialog: { action, element, otherData } });
  }

  dialogSuccess = (action, element) => {
    /* eslint-disable-next-line react/destructuring-assignment */
    this.props[action](this.getCurrentTown(), element);
    this.setState({ actionDialog: null });
  }

  AddConnection(connection) {
    const { onAddConnection } = this.props;
    onAddConnection(connection);
  }

  render() {
    const { currentResulsType, downloadTownData, lines, loading, pagination, results, town } = this.props;
    const { actionDialog, activeTab, tabIndicatorStyle } = this.state;
    return (
      <div className="admin-town-container">
        {loading ? <LoadingSpinner /> : null}
        <div className="container">
          <h1 className="right-line mb-4">Admin Town</h1>
          <div className="row">
            <div className="col-md-12">
              {town ? <TownHeader
                town={town}
                onDownloadTownData={downloadTownData}
                onShowDialog={this.showDialog}
              /> : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="horizontal-tab card">
                <ul ref={this.tabSet} className={`nav nav-tabs nav-tabs-transparent indicator-dark nav-tabs-full nav-tabs-${adminTownMenu.tabs.length}`} role="tablist">
                  {adminTownMenu.tabs.map((t, i) => (
                    <li key={t.id} className="nav-item">
                      <a className={`nav-link withoutripple ${activeTab && activeTab.id === t.id ? 'active show' : ''}`} onClick={() => this.setActiveTab(t, i)}>
                        {/* <FontAwesomeIcon icon={t.icon} /> <span className="d-none d-sm-inline">{t.label}</span> */}
                      </a>
                    </li>
                  ))}
                  <span className="ms-tabs-indicator" style={tabIndicatorStyle} />
                </ul>
                <div className="card-body results-wrapper">
                  {pagination ? <ResultsSummary
                    numberElements={pagination.total}
                    label={activeTab.id}
                    onShowDialog={this.showDialog}
                  /> : null}
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade active show">
                      {currentResulsType ? <ResultsList
                        currentResulsType={currentResulsType}
                        town={town}
                        results={results}
                        onShowDialog={this.showDialog}
                      /> : null}
                      {pagination ? <Pagination
                        pagination={pagination}
                        onPageChange={this.changePage}
                      /> : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              {activeTab ? <SearchFilter
                activeTab={activeTab.id}
                town={town}
                lines={lines}
                onSearch={this.search}
              /> : null}
            </div>
          </div>
        </div>

        {actionDialog ?
          <ActionDialog
            action={actionDialog.action}
            element={actionDialog.element}
            otherData={actionDialog.otherData}
            onSuccess={this.dialogSuccess}
            onClose={() => this.showDialog(null)}
          />
          : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.admin.results,
    town: state.admin.town,
    lines: state.admin.lines,
    currentResulsType: state.admin.currentResulsType,
    pagination: state.admin.pagination,
    searchParams: state.admin.searchParams,
    loading: state.admin.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTown: (town) => dispatch(actions.getTownStart(town)),
    loadStationsPanel: (townId) => dispatch(actions.loadStationsPanelStart(townId)),
    onSearch: {
      stations: (town, searchParams, pagination) => dispatch(actions.searchStationsStart(town, searchParams, pagination)),
      lines: (searchParams, pagination) => dispatch(actions.searchLinesStart(searchParams, pagination)),
      connections: (searchParams, pagination) => dispatch(actions.searchConnectionsStart(searchParams, pagination))
    },
    onAddStation: (town, station) => dispatch(actions.addStationStart(town, station)),
    onUpdateStation: (town, station) => dispatch(actions.updateStationStart(town, station)),
    onAddConnection: (connection) => dispatch(actions.addConnectionStart(connection)),
    onDeleteConnection: (connection) => dispatch(actions.deleteConnectionStart(connection)),
    uploadTownData: (town, file) => dispatch(actions.uploadTownDataStart(town, file))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminTown));
