import Api from 'http/admin';
import pagination from 'http/admin/defaultParams/pagination';
import PropTypes from 'prop-types';
import React from 'react';
import Select from '../select/select';
import LineDropdown from './line-dropdown/line-dropdown';
import LineSelected from './line-selected/line-selected';
import selectConfig from './line-selector.config.json';

const searchParams = {
  select: 'shortName colour',
  populate: ''
};

const allLinesOption = { _id: null, shortName: 'All lines', colour: '#ffffff' };

class LineSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      initialLine: null
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.remoteSearch = this.remoteSearch.bind(this);
  }

  async componentDidMount() {
    const { allLinesOpt, defaultValue, draftId, remoteSearch } = this.props;

    if (!remoteSearch) {
      const res = await Api.line.search(draftId, { ...searchParams, filter: {} }, pagination);
      const lines = res.data.elements;
      if (allLinesOpt) {
        lines.unshift(allLinesOption);
      }
      this.setState({
        lines: res.data.elements,
        initialLine: lines.find(l => l._id === defaultValue)
      });
    } else {
      await this.getInitialLine(defaultValue);
    }
  }

  async getInitialLine(lineId) {
    const { draftId } = this.props;
    const res = await Api.line.search(
      draftId,
      { ...searchParams, filter: { _id: lineId } },
      pagination
    );
    this.setState({ initialLine: res.data.elements[0] });
  }

  handleOnChange(line) {
    const { onChange } = this.props;
    onChange(line);
  }

  handleInputChange(str) {
    const { remoteSearch } = this.props;
    if (remoteSearch) {
      this.remoteSearch(str);
    }
  }

  async remoteSearch(str) {
    if (!str || str.length < 2) {
      this.setState({ lines: [] });
      return;
    }
    const { draftId } = this.props;
    const res = await Api.line.search(
      draftId,
      { ...searchParams, filter: { name: str } },
      pagination
    );
    this.setState({ lines: res.data.elements });
  }

  render() {
    const { lines, initialLine } = this.state;
    const { allLinesOpt, className } = this.props;

    const getSelectedElement = () => {
      if (initialLine) {
        return initialLine;
      }
      if (allLinesOpt) {
        return allLinesOpt;
      }
      return null;
    };
    return (
      <div className={`line-selector ${className}`}>
        <Select
          config={{ ...selectConfig, remote: true }}
          options={lines}
          dropdown={LineDropdown}
          selected={LineSelected}
          selectedElement={getSelectedElement()}
          onChange={this.handleOnChange}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

LineSelector.defaultProps = {
  allLinesOpt: false,
  remoteSearch: false,
  defaultValue: null,
  className: '',
  onChange: () => {}
};

LineSelector.propTypes = {
  draftId: PropTypes.string.isRequired,
  remoteSearch: PropTypes.bool,
  allLinesOpt: PropTypes.bool,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default LineSelector;
