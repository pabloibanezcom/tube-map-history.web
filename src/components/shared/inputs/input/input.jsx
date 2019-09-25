import { Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';
import regexPatterns from 'util/regex';

class Input extends React.Component {
  constructor(props) {
    super(props);
    const { value } = this.props;

    this.input = null;

    this.setInputRef = element => {
      this.input = element;
    };

    this.state = {
      isFocused: false,
      currentValue: value || ''
    };
    this.getHtmlType = this.getHtmlType.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.formRefValidation = this.formRefValidation.bind(this);
  }

  getHtmlType() {
    const { type } = this.props;
    if (type === 'email') {
      return 'text';
    }
    return type;
  }

  setValue(value) {
    this.setState({ currentValue: value });
  }

  handleOnFocus() {
    this.setState({ isFocused: true });
  }

  handleOnBlur() {
    this.setState({ isFocused: false });
  }

  handleOnChange(evt) {
    const { onChange } = this.props;
    evt.persist();
    this.setValue(evt.target.value);
    if (onChange) {
      onChange(evt.target.value);
    }
  }

  handleOnClick(evt) {
    const { onClick } = this.props;
    evt.persist();
    if (onClick) {
      onClick(evt);
    }
  }

  clearValue() {
    const { onChange } = this.props;
    this.setValue('');
    onChange('');
  }

  formRefValidation() {
    const { required, type, customPattern } = this.props;
    let validation = {
      required: required && 'You must enter a value'
    };
    if (type === 'email') {
      validation = {
        ...validation,
        pattern: regexPatterns.email
      };
    }
    if (type === 'password') {
      validation = {
        ...validation,
        pattern: regexPatterns.password
      };
    }
    if (customPattern) {
      validation = {
        ...validation,
        pattern: customPattern
      };
    }
    return validation;
  }

  render() {
    const {
      backgroundColor,
      color,
      clearable,
      defaultValue,
      formRef,
      disabled,
      readOnly,
      extraClass,
      name,
      placeholder,
      value
    } = this.props;
    const { isFocused, currentValue } = this.state;
    return (
      <div className={`custom-input ${isFocused ? 'is-focused' : ''}`}>
        {formRef ? (
          <input
            ref={formRef(this.formRefValidation())}
            defaultValue={defaultValue}
            className={`input-bg-${backgroundColor} ${
              color ? `input-text-${color}` : ''
            } ${extraClass}`}
            type={this.getHtmlType()}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onClick={this.handleOnClick}
            noValidate
          />
        ) : (
          <input
            value={value || currentValue}
            className={`input-bg-${backgroundColor} ${
              color ? `input-text-${color}` : ''
            } ${extraClass}`}
            type={this.getHtmlType()}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onClick={this.handleOnClick}
            noValidate
          />
        )}
        {clearable && (value || currentValue) ? (
          <a onClick={this.clearValue} className="clear-cross">
            <Icon name="close" />
          </a>
        ) : null}
      </div>
    );
  }
}

Input.defaultProps = {
  backgroundColor: 'primary',
  color: 'secondary',
  clearable: false,
  formRef: null,
  disabled: false,
  readOnly: false,
  extraClass: '',
  placeholder: null,
  required: false,
  customPattern: null,
  type: 'text',
  onChange: null,
  onClick: null
};

Input.propTypes = {
  backgroundColor: PropTypes.oneOf(['primary', 'secondary', 'white']),
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  clearable: PropTypes.bool,
  formRef: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  extraClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  customPattern: PropTypes.object,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'file']),
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default Input;
