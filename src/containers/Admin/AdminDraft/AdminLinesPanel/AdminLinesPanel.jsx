import { finishAction, searchLinesStart, startAction } from 'actions/admin';
import LinesInfo from 'components/admin/admin-town/lines-info/lines-info';
import { Pagination } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import defaultPagination from './defaultPagination.json';
import defaultSearchParams from './defaultSearchParams.json';

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
    const { lineSearchParams, linePagination, searchLines } = this.props;
    let pagination;
    if (page) {
      pagination = {
        ...linePagination,
        page
      }
    } else {
      pagination = linePagination || defaultPagination;
    }
    searchLines(lineSearchParams || defaultSearchParams, pagination);
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
    const { lines, linePagination } = this.props;
    return (
      <div className="admin-lines-panel">
        <LinesInfo
          lines={lines}
          onAddLine={this.addLineStart}
          onEditLine={this.editLineStart}
          onDeleteLine={this.deleteLineStart}
        />
        {lines.length ? (
          <Pagination
            color="secondary"
            pagination={linePagination}
            onPageChange={this.changePage}
          />
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lines: state.admin.lines,
    lineSearchParams: state.admin.lineSearchParams,
    linePagination: state.admin.linePagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    searchLines: (searchParams, pagination) => dispatch(searchLinesStart(searchParams, pagination))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLinesPanel);
