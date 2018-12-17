import React from 'react';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isFocused: false,
      isEmpty: this.props.value && this.props.value !== '' ? false : true
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
    const isEmpty = !value || value === '' ? true : false;
    this.setState({ value: value });
    if (this.state.isEmpty !== isEmpty) {
      this.setState({ isEmpty: isEmpty });
    }
    this.props.onChange(value);
  }

  render() {
    return <div className={`form-group ${this.props.config.floating ? 'label-floating' : ''} ${this.state.isEmpty ? 'is-empty' : ''} ${this.state.isFocused ? 'is-focused' : ''}`}>
      <label className="control-label">{this.props.config.floating ? this.props.config.placeholder : this.props.config.label}</label>
      <div>
        <input className="form-control"
          type={this.props.config.type}
          value={this.state.value}
          placeholder={this.props.config.placeholder}
          disabled={this.props.config.disabled}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
        />
        {this.props.config.clearable && this.state.value ? <a onClick={this.clearValue} className="clear-cross"><i className="fa fa-times"></i></a> : null}
      </div>
    </div>
  }
}

export default Input;