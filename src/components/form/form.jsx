import React from 'react';
import { applyTypeToValue, updateObject } from '../../shared/utility';
import Button from './button/button';
import Input from './input/input';
import Select from './select/select';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.generateFormData(),
      formIsValid: true
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  generateFormData() {
    let formData = {};
    Object.keys(this.props.formElements).map(fEl => {
      if (this.props.formElements[fEl].elementType !== 'button') {
        formData[fEl] = {
          value: this.props.obj && this.props.obj[fEl] ? this.props.obj[fEl] : '',
          valid: true,
          touched: null
        }
      }
      return null;
    });
    return formData;
  }

  onHandleChange(value, formElementName) {
    const updatedFormElement = updateObject(this.state.formData[formElementName], {
      value: value,
      valid: true,
      touched: true
    });
    const updatedFormData = updateObject(this.state.formData, {
      [formElementName]: updatedFormElement
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedFormData) {
      formIsValid = updatedFormData[inputIdentifier].valid && formIsValid;
    }
    this.setState({ formData: updatedFormData, formIsValid: formIsValid });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.formIsValid) {
      const formValues = {};
      Object.keys(this.state.formData).map(fEl => formValues[fEl] =
        applyTypeToValue(this.state.formData[fEl].value, this.props.formElements[fEl].propertyType));
      this.props.onValidSubmit(formValues);
    }
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      {Object.keys(this.props.formElements).map((fEl, i) => {
        let formElementHtml;
        switch (this.props.formElements[fEl].elementType) {
          case 'input':
            formElementHtml = <Input
              type={this.props.formElements[fEl].elementConfig.type}
              placeholder={this.props.formElements[fEl].elementConfig.placeholder}
              value={this.state.formData[fEl].value}
              disabled={this.props.formElements[fEl].elementConfig.disabled}
              onChange={(evt) => this.onHandleChange(evt, fEl)}
            />;
            break;
          case 'select':
            formElementHtml = <Select
              options={this.props[this.props.formElements[fEl].options]}
              config={this.props.formElements[fEl].elementConfig}
              onChange={(evt) => this.onHandleChange(evt, fEl)}
            />
            break;
          case 'button':
            formElementHtml = <Button
              text={this.props.formElements[fEl].elementConfig.text}
              style={{ marginTop: '50px' }}
            />;
            break;
          default:
            break;
        }
        return <div key={i}>{formElementHtml}</div>
      })}
    </form>
  }
}

export default Form;