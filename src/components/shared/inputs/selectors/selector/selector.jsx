import React from 'react';
import Select from '../select/select';
import DefaultDropdown from './default-dropdown/default-dropdown';
import DefaultSelected from './default-selected/default-selected';
import selectConfig from './selector.config.json';

class Selector extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(option) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(option);
    }
  }

  render() {
    const { config, options, setValue } = this.props;
    return (
      <div className="line-selector">
        <Select
          config={config || selectConfig}
          options={options}
          dropdown={DefaultDropdown}
          selected={DefaultSelected}
          onChange={this.handleOnChange}
          setValue={setValue}
        />
      </div>
    )
  }
}

export default Selector;