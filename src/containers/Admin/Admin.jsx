import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ActionDialog from '../../components/admin/action-dialog/action-dialog';
import ResultsList from '../../components/admin/results-list/results-list';
import ResultsSummary from '../../components/admin/results-summary/results-summary';
import SearchFilter from '../../components/admin/search-filter/search-filter';
import Footer from '../../components/UI/footer/footer';
import Header from '../../components/UI/header/header';
import LoadingSpinner from '../../components/UI/loading-spinner/loading-spinner';
import Pagination from '../../components/UI/pagination/pagination';
import * as actions from '../../store/actions/admin';
import * as adminMenu from './adminMenu';
import * as defaultPagination from './defaultPagination';
import * as defaultSearchParams from './defaultPagination';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.tabSet = React.createRef();
    this.state = {
      tabs: adminMenu.tabs,
      activeTab: null,
      tabIndicatorStyle: null,
      tabWidth: null,
      actionDialog: null
    };
  }

  componentDidMount() {
    this.setActiveTab(adminMenu.tabs[0]);
  }

  setActiveTab = (tab) => {
    const tabIndex = this.state.tabs.findIndex(t => t.id === tab.id);
    const tabWith = this.tabSet.current.offsetWidth / this.state.tabs.length;
    this.setState({ activeTab: tab, tabIndicatorStyle: { width: `${tabWith}px`, left: tabIndex * tabWith } });
    this.search(tab.id);
  }

  search = (tabId, searchParams, pagination) => {
    const activeTabId = tabId || this.state.activeTab.id;
    const _pagination = pagination || defaultPagination;
    let _searchParams;
    if (searchParams) {
      _searchParams = searchParams;
    } else if (this.props.searchParams && this.props.searchParams[activeTabId]) {
      _searchParams = this.props.searchParams[activeTabId];
    } else {
      _searchParams = defaultSearchParams[activeTabId];
    }
    this.props.onSearch[activeTabId](_searchParams, _pagination);
  }

  changePage = (page) => {
    this.search(null, null, { ...this.props.pagination, page: page });
  }

  showDialog = (action, element, otherData) => {
    this.setState({ actionDialog: { action: action, element: element, otherData: otherData } });
  }

  dialogSuccess = (action, element) => {
    this.props[action](element);
    this.setState({ actionDialog: null });
  }

  AddConnection(connection) {
    this.props.onAddConnection(connection);
  }

  render() {
    return <div className="admin-container">
      {this.props.loading ? <LoadingSpinner /> : null}
      <Header />
      <div className="container">
        <h1 className="right-line mb-4">Admin</h1>
        <div className="row">
          <div className="col-md-9">
            <div className="horizontal-tab card">
              <ul ref={this.tabSet} className={`nav nav-tabs nav-tabs-transparent indicator-dark nav-tabs-full nav-tabs-${adminMenu.tabs.length}`} role="tablist">
                {adminMenu.tabs.map((t, i) => <li key={t.id} className="nav-item"><a className={`nav-link withoutripple ${this.state.activeTab && this.state.activeTab.id === t.id ? 'active show' : ''}`}
                  onClick={() => this.setActiveTab(t, i)}><FontAwesomeIcon icon={t.icon} /> <span className="d-none d-sm-inline">{t.label}</span></a></li>)}
                <span className="ms-tabs-indicator" style={this.state.tabIndicatorStyle}></span>
              </ul>
              <div className="card-body results-wrapper">
                {this.props.pagination ? <ResultsSummary
                  numberElements={this.props.pagination.total}
                  label={this.state.activeTab.id}
                /> : null}
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane fade active show">
                    {this.props.currentResulsType ? <ResultsList
                      currentResulsType={this.props.currentResulsType}
                      results={this.props.results}
                      onShowDialog={this.showDialog}
                    /> : null}
                    {this.props.pagination ? <Pagination
                      pagination={this.props.pagination}
                      onPageChange={this.changePage}
                    /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {this.state.activeTab ? <SearchFilter
              activeTab={this.state.activeTab.id}
              onSearch={this.search}
            /> : null}
          </div>
        </div>
      </div>
      <Footer />
      {this.state.actionDialog ?
        <ActionDialog
          action={this.state.actionDialog.action}
          element={this.state.actionDialog.element}
          otherData={this.state.actionDialog.otherData}
          onSuccess={this.dialogSuccess}
          onClose={() => this.showDialog(null)} />
        : null}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    results: state.admin.results,
    currentResulsType: state.admin.currentResulsType,
    pagination: state.admin.pagination,
    searchParams: state.admin.searchParams,
    loading: state.admin.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: {
      stations: (searchParams, pagination) => dispatch(actions.searchStationsStart(searchParams, pagination)),
      lines: (searchParams, pagination) => dispatch(actions.searchLinesStart(searchParams, pagination)),
      connections: (searchParams, pagination) => dispatch(actions.searchConnectionsStart(searchParams, pagination))
    },
    onEditStation: (station) => dispatch(actions.editStationStart(station)),
    onAddConnection: (connection) => dispatch(actions.addConnectionStart(connection))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
