import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import SearchFilter from '../../components/admin/search-filter/search-filter';
import StationsList from '../../components/admin/stations-list/stations-list';
import Header from '../../components/UI/header/header';
import LoadingSpinner from '../../components/UI/loading-spinner/loading-spinner';
import Pagination from '../../components/UI/pagination/pagination';
import * as actions from '../../store/actions/admin';
import * as adminMenu from './adminMenu';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.tabSet = React.createRef();
    this.state = {
      activeTab: {
        id: 'null'
      },
      searchParams: null,
      tabIndicatorStyle: null
    };
  }

  componentDidMount() {
    this.tabWidth = this.tabSet.current.offsetWidth / adminMenu.tabs.length;
    this.props.onSearchStations();
    this.setActiveTab({ id: 'stations' }, 0)
  }

  AddConnection(connection) {
    this.props.onAddConnection(connection);
  }

  setActiveTab = (tab, index) => {
    this.setState({ activeTab: tab, tabIndicatorStyle: { width: `${this.tabWidth}px`, left: index * this.tabWidth } });
  }

  changePage = (page) => {
    this.props.onSearchStations(this.state.searchParams, { ...this.props.pagination, page: page });
  }

  searchStations = (searchParams) => {
    this.setState({ searchParams: searchParams });
    this.props.onSearchStations(searchParams, this.props.pagination);
  }

  render() {
    return <div>
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
              <div className="card-body">
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane fade active show">
                    {this.state.activeTab.id === 'stations' &&
                      <StationsList
                        stations={this.props.stations}
                        lines={this.props.allLines}
                        onEditStation={this.props.onEditStation}
                        onAddConnection={this.props.onAddConnection}
                        onSelectFilteredStations={this.props.onSelectFilteredStations}
                      />
                    }
                    {this.state.activeTab.id === 'lines' && <h2>Lines</h2>}
                    {this.state.activeTab.id === 'connections' && <h2>Connections</h2>}
                    <Pagination
                      pagination={this.props.pagination}
                      onPageChange={this.changePage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <SearchFilter
              onSearch={this.searchStations}
            />
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    stations: state.admin.stations,
    connections: state.admin.connections,
    pagination: state.admin.pagination,
    loading: state.admin.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchStations: (searchParams, pagination) => dispatch(actions.searchStationsStart(searchParams, pagination)),
    onEditStation: (station) => dispatch(actions.editStationStart(station)),
    onAddConnection: (connection) => dispatch(actions.addConnectionStart(connection))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
