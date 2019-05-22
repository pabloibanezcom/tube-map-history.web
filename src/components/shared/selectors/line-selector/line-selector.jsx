import React from 'react';
import Select from '../select/select';
import LineDropdown from './line-dropdown/line-dropdown';
import LineSelected from './line-selected/line-selected';
import * as selectConfig from './line-selector.config.json';

class LineSelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(line) {
    const { onChange } = this.props;
    onChange(line);
  }

  render() {
    const { lines } = this.props;
    return (
      <div className="line-selector">
        <Select
          config={{ ...selectConfig }}
          options={lines}
          dropdown={LineDropdown}
          selected={LineSelected}
          onChange={this.handleOnChange}
        />
      </div>
    )
  }
}

export default LineSelector;