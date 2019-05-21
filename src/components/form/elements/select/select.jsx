import React from 'react';
import { getDynamicComponent } from '../../../dynamic-components/dynamic-components';
import SelectDropdown from './select-dropdown/select-dropdown';

class Select extends React.Component {

  constructor(props) {
    super(props);
    const { config } = this.props;
    this.state = {
      selectedOption: null,
      expanded: false
    }
    this.customSelected = getDynamicComponent(config.custom.selected);
    this.showDropdown = this.showDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  showDropdown() {
    this.setState({ expanded: true });
  }

  selectOption(option) {
    const { config, onChange } = this.props;
    this.setState({ selectedOption: option, expanded: false });
    const selectedOption = option && option[config.options.key] === 'none' ? null : option;
    onChange(config.options.value && selectedOption ? selectedOption[config.options.value] : selectedOption);
  }

  close() {
    this.setState({ expanded: false });
  }

  render() {
    const { config } = this.props;
    const { expanded, selectedOption } = this.state;
    return (
      <div className="form-group">
        <label className="control-label">{config.label}</label>
        <div className={`dropdown bootstrap-select form-control ${expanded ? 'show' : ''}`}>
          <button
            type="button"
            className="btn dropdown-toggle btn-light"
            data-toggle="dropdown"
            onClick={this.showDropdown}
            title="Ea nam qui vel consequatur"
            aria-expanded={!expanded}
          >
            {this.customSelected ?
              <this.customSelected selectedOption={selectedOption} /> :
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    {selectedOption ? selectedOption[config.label] : config.placeholder}
                  </div>
                </div>
              </div>
            }
          </button>
          <SelectDropdown
            expanded={expanded}
            onSelectOption={(opt) => this.selectOption(opt)}
            onClose={() => this.close()}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

export default Select;