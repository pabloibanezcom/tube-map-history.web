import React from 'react';
import { applyTypeToValue, getDefaultValue, updateObject } from 'shared/utility';
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

  onHandleChange(value, formElementName) {
    const { formData } = this.state;
    const updatedFormElement = updateObject(formData[formElementName], {
      value,
      valid: true,
      touched: true
    });
    const updatedFormData = updateObject(formData, {
      [formElementName]: updatedFormElement
    });
    let formIsValid = true;
    Object.keys(updatedFormData).forEach(inputIdentifier => {
      formIsValid = updatedFormData[inputIdentifier].valid && formIsValid;
    });
    this.setState({ formData: updatedFormData, formIsValid });
  }

  onSubmit(e) {
    const { formElements, onValidSubmit } = this.props;
    const { formData, formIsValid } = this.state;
    e.preventDefault();
    if (formIsValid) {
      const formValues = {};
      Object.keys(formData).forEach(fEl => {
        formValues[fEl] = applyTypeToValue(formData[fEl].value, formElements[fEl].propertyType);
      });
      onValidSubmit(formValues);
    }
  }

  generateFormData() {
    const { formElements, obj } = this.props;
    const formData = {};
    Object.keys(formElements).map(fEl => {
      if (formElements[fEl].elementType !== 'button') {
        formData[fEl] = {
          value: obj && obj[fEl] ? obj[fEl] : getDefaultValue(formElements[fEl].propertyType),
          valid: true,
          touched: null
        }
      }
      return null;
    });
    return formData;
  }

  render() {
    const { formElements, mode } = this.props;
    const { formData } = this.state;

    return (
      <form className={`form-${mode || 'dark'}`} onSubmit={this.onSubmit}>
        {Object.keys(formElements).map((fEl, i) => {
          let formElementHtml;
          switch (formElements[fEl].elementType) {
            case 'input':
              formElementHtml = <Input
                config={formElements[fEl].elementConfig}
                value={formData[fEl].value}
                onChange={(evt) => this.onHandleChange(evt, fEl)}
              />;
              break;
            case 'select':
              formElementHtml = <Select
                /* eslint-disable-next-line react/destructuring-assignment */
                options={this.props[this.props.formElements[fEl].options]}
                config={formElements[fEl].elementConfig}
                onChange={(evt) => this.onHandleChange(evt, fEl)}
              />
              break;
            case 'range':
              formElementHtml = <Range
                config={formElements[fEl].elementConfig}
                onChange={(evt) => this.onHandleChange(evt, fEl)}
              />
              break;
            case 'file-upload':
              formElementHtml = <FileUpload
                config={formElements[fEl].elementConfig}
                onChange={(evt) => this.onHandleChange(evt, fEl)}
              />
              break;
            case 'place-search':
              formElementHtml = <PlaceSearch
                onChange={(val) => this.onHandleChange(val, fEl)}
                value={formData[fEl].value}
              />;
              break;
            case 'button':
              formElementHtml = <Button
                text={formElements[fEl].elementConfig.text}
                type={formElements[fEl].elementConfig.style || 'primary'}
                style={{ marginTop: '50px' }}
              />;
              break;

            default:
              break;
          }
          return <div key={i}>{formElementHtml}</div>
        })}
      </form>
    )
  }
}

export default Form;