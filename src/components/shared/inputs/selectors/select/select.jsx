import React from 'react';
import SelectDropdown from './select-dropdown/select-dropdown';

class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      expanded: false
    }
    this.showDropdown = this.showDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  // static getDerivedStateFromProps(props, currentState) {
  //   debugger
  //   if (currentState.value !== props.value) {
  //     return { selectedOption: props.value };
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.selectOption(value);
    }
  }

  showDropdown() {
    const { noDropdown, onDropdownOpen } = this.props;
    if (!noDropdown) {
      this.setState({ expanded: true });
    }
    if (onDropdownOpen) {
      onDropdownOpen();
    }
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
    const { externalExpanded, noDropdown, selected, selectedElement } = this.props;
    const { expanded, selectedOption } = this.state;

    const Selected = selected;
    return (
      <div className={`dropdown bootstrap-select form-control ${expanded ? 'show' : ''}`}>
        <button
          type="button"
          className="btn btn-lg btn-select dropdown-toggle"
          onClick={this.showDropdown}
          aria-expanded={!expanded}
        >
          <Selected
            selectedOption={selectedOption || selectedElement}
          />
        </button>
        {!noDropdown && (
          <SelectDropdown
            expanded={expanded}
            onSelectOption={(opt) => this.selectOption(opt)}
            onClose={() => this.close()}
            {...this.props}
          />
        )}
        {(expanded || externalExpanded) && noDropdown}
      </div>
    )
  }
}

export default Select;