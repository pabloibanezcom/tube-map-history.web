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
  }

  handleOnFocus() {
    this.setState({ isFocused: true });
  }

  handleOnBlur() {
    this.setState({ isFocused: false });
  }

  handleOnChange(evt) {
    const value = evt.target.value;
    const isEmpty = !value || value === '' ? true : false;
    this.setState({ value: value });
    if (this.state.isEmpty !== isEmpty) {
      this.setState({ isEmpty: isEmpty });
    }
    this.props.onChange(value);
  }

  render() {
    return <div className={`form-group label-floating ${this.state.isEmpty ? 'is-empty' : ''} ${this.state.isFocused ? 'is-focused' : ''}`}>
      <label className="control-label">{this.props.placeholder}</label>
      <input className="form-control"
        type={this.props.type}
        value={this.state.value}
        disabled={this.props.disabled}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        onChange={this.handleOnChange}
      /> </div>
  }
}

export default Input;