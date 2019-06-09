import React from 'react';
import Select from '../select/select';
import StationDropdown from './station-dropdown/station-dropdown';
import StationSelected from './station-selected/station-selected';
import selectConfig from './station-selector.config.json';

class StationSelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(station) {
    const { onChange } = this.props;
    onChange(station);
  }

  render() {
    const { stations } = this.props;
    return (
      <div className="station-selector">
        <Select
          config={{ ...selectConfig }}
          options={stations}
          dropdown={StationDropdown}
          selected={StationSelected}
          onChange={this.handleOnChange}
        />
      </div>
    )
  }
}

export default StationSelector;