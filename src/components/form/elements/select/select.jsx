import React from 'react';
import { getDynamicComponent } from '../../../dynamic-components/dynamic-components';
import SelectDropdown from './select-dropdown/select-dropdown';

class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      expanded: false
    }
    this.customSelected = getDynamicComponent(this.props.config.custom.selected);
    this.showDropdown = this.showDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  showDropdown() {
    this.setState({ expanded: true });
  }

  selectOption(option) {
    this.setState({ selectedOption: option, expanded: false });
    const selectedOption = option && option[this.props.config.options.key] === 'none' ? null : option;
    this.props.onChange(this.props.config.options.value && selectedOption ? selectedOption[this.props.config.options.value] : selectedOption);
  }

  close() {
    this.setState({ expanded: false });
  }

  render() {
    return (
      <div className="form-group">
        <label className="control-label">{this.props.config.label}</label>
        <div className={`dropdown bootstrap-select form-control ${this.state.expanded ? 'show' : ''}`}>
          <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" onClick={this.showDropdown}
            title="Ea nam qui vel consequatur" aria-expanded={this.state.expanded ? false : true}>
            {this.customSelected ? <this.customSelected selectedOption={this.state.selectedOption} /> :
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    {this.state.selectedOption ? this.state.selectedOption[this.props.config.label] : 'Select a line'}
                  </div>
                </div>
              </div>}
          </button>
          <SelectDropdown
            expanded={this.state.expanded}
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