import React from 'react';
import BasicForm from './forms/basic-form';
import BasicFormWithSelector from './forms/basic-form-selector';

class Forms extends React.Component {
  render() {
    return (
      <div className="showroom-forms">
        <h1 className="right-line mb-40">Forms</h1>
        <div className="row">
          <div className="col-3">
            <div className="showroom-element">
              <label>Basic form</label>
              <BasicForm />
            </div>
          </div>
          <div className="col-3">
            <div className="showroom-element">
              <label>Basic form with selector</label>
              <BasicFormWithSelector />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Forms;
