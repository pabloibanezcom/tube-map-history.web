import LinesInfo from 'components/admin/admin-town/lines-info/lines-info';
import { Pagination } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { finishAction, searchParamsChangeStart, startAction } from 'store/admin/actions';

class AdminLinesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.changePage = this.changePage.bind(this);
    this.addLineStart = this.addLineStart.bind(this);
    this.editLineStart = this.editLineStart.bind(this);
    this.deleteLineStart = this.deleteLineStart.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  search(page) {
    const { searchParams, pagination, searchLines } = this.props;
    const _pagination = page ? { ...pagination, page } : pagination;
    searchLines(searchParams, _pagination);
  }

  changePage(page) {
    this.search(page);
  }

  addLineStart() {
    const { _startAction } = this.props;
    _startAction('addLine');
  }

  editLineStart(line) {
    const { _startAction } = this.props;
    _startAction('editLine', line);
  }

  deleteLineStart(lineId) {
    const { _startAction } = this.props;
    _startAction('deleteLine', lineId);
  }

  render() {
    const { elementsType, lines, pagination } = this.props;
    return (
      <div className="admin-lines-panel">
        {elementsType === 'line' ? (
          <LinesInfo
            lines={lines}
            onAddLine={this.addLineStart}
            onEditLine={this.editLineStart}
            onDeleteLine={this.deleteLineStart}
          />
        ) : null}
        {lines.length ? (
          <Pagination color="secondary" pagination={pagination} onPageChange={this.changePage} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    elementsType: state.admin.elementsType,
    lines: state.admin.elements,
    searchParams: state.admin.searchParams,
    pagination: state.admin.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    searchLines: (searchParams, pagination) =>
      dispatch(searchParamsChangeStart(searchParams, pagination, 'line'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLinesPanel);
