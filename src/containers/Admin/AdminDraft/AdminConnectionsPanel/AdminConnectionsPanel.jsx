import ConnectionsInfo from 'components/admin/admin-town/connections-info/connections-info';
import { Pagination } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { finishAction, searchParamsChangeStart, startAction } from 'store/admin/actions';

class AdminConnectionsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeSearchParams = this.changeSearchParams.bind(this);
    this.addConnectionStart = this.addConnectionStart.bind(this);
    this.editConnectionStart = this.editConnectionStart.bind(this);
    this.deleteConnectionStart = this.deleteConnectionStart.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  search(params, page) {
    const { searchParams, pagination, searchConnections } = this.props;
    const _pagination = page ? { ...pagination, page } : pagination;
    const _searchParams = params ? Object.assign({}, searchParams, params) : searchParams;
    searchConnections(_searchParams, _pagination);
  }

  changePage(page) {
    this.search(null, page);
  }

  changeSearchParams(searchParams) {
    this.search(searchParams);
  }

  addConnectionStart() {
    const { _startAction } = this.props;
    _startAction('addConnection');
  }

  editConnectionStart(connection) {
    const { _startAction } = this.props;
    _startAction('editConnection', connection);
  }

  deleteConnectionStart(connectionId) {
    const { _startAction } = this.props;
    _startAction('deleteConnection', connectionId);
  }

  render() {
    const { draft, elementsType, connections, pagination } = this.props;
    return (
      <div className="admin-connections-panel">
        {elementsType === 'connection' ? (
          <ConnectionsInfo
            draftId={draft._id}
            connections={connections}
            onAddConnection={this.addConnectionStart}
            onEditConnection={this.editConnectionStart}
            onDeleteConnection={this.deleteConnectionStart}
            onChangeParams={this.changeSearchParams}
          />
        ) : null}
        {connections.length ? (
          <Pagination color="secondary" pagination={pagination} onPageChange={this.changePage} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    draft: state.admin.draft,
    elementsType: state.admin.elementsType,
    connections: state.admin.elements,
    searchParams: state.admin.searchParams,
    pagination: state.admin.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    searchConnections: (searchParams, pagination) =>
      dispatch(searchParamsChangeStart(searchParams, pagination, 'connection'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminConnectionsPanel);
