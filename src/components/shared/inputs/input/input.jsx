import { Icon } from 'components/shared';
import React from 'react';

class Input extends React.Component {

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value,
      isFocused: false,
      isEmpty: !(value && value !== '')
    }
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  handleOnFocus() {
    this.setState({ isFocused: true });
  }

  handleOnBlur() {
    this.setState({ isFocused: false });
  }

  handleOnChange(evt) {
    this.updateValue(evt.target.value);
  }

  clearValue() {
    this.updateValue('');
  }

  updateValue(value) {
    const { onChange } = this.props;
    const { isEmpty } = this.state;
    const _isEmpty = !value || value === '';
    this.setState({ value });
    if (isEmpty !== _isEmpty) {
      this.setState({ isEmpty: _isEmpty });
    }
    onChange(value);
  }

  render() {
    const { config } = this.props;
    const { isEmpty, isFocused, value } = this.state;
    return (
      <div className={`form-group ${config.floating ? 'label-floating' : ''} ${isEmpty ? 'is-empty' : ''} ${isFocused ? 'is-focused' : ''}`}>
        <label className="control-label">{config.floating ? config.placeholder : config.label}</label>
        <div>
          <input
            className="form-control"
            type={config.type}
            value={value}
            placeholder={config.placeholder}
            disabled={config.disabled}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
          />
          {config.clearable && value ? <a onClick={this.clearValue} className="clear-cross"><Icon name="close" /></a> : null}
        </div>
      </div>
    )
  }
}

export default Input;