import React from 'react';
import { applyTypeToValue, getDefaultValue, updateObject } from '../../shared/utility';
import Button from './elements/button/button';
import FileUpload from './elements/file-upload/file-upload';
import Input from './elements/input/input';
import PlaceSearch from './elements/place-search/place-search';
import Range from './elements/range/range';
import Select from './elements/select/select';

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
          value: this.props.obj && this.props.obj[fEl] ? this.props.obj[fEl] : getDefaultValue(this.props.formElements[fEl].propertyType),
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
              config={this.props.formElements[fEl].elementConfig}
              value={this.state.formData[fEl].value}
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
          case 'range':
            formElementHtml = <Range
              config={this.props.formElements[fEl].elementConfig}
              onChange={(evt) => this.onHandleChange(evt, fEl)}
            />
            break;
          case 'file-upload':
            formElementHtml = <FileUpload
              config={this.props.formElements[fEl].elementConfig}
              onChange={(evt) => this.onHandleChange(evt, fEl)}
            />
            break;
          case 'place-search':
            formElementHtml = <PlaceSearch
              onChange={(val) => this.onHandleChange(val, fEl)}
              value={this.state.formData[fEl].value}
            />;
            break;
          case 'button':
            formElementHtml = <Button
              text={this.props.formElements[fEl].elementConfig.text}
              type={this.props.formElements[fEl].elementConfig.style || 'primary'}
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