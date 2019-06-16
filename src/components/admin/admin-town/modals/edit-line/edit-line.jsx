import { Form, FormChanges } from 'components/shared';
import React from 'react';
import config from './edit-line.config.json';

class EditLine extends React.Component {

  constructor(props) {
    super(props);
    const { line } = props;

    this.initialValues = {
      name: line.name,
      key: line.key,
      shortName: line.shortName,
      order: line.order,
      year: line.year,
      colour: line.colour,
      fontColour: line.fontColour
    }

    this.state = {
      submitted: false,
      formData: null
    }
  }

  onSubmit = formData => {
    this.setState({ submitted: true, formData })
  }

  render() {
    const { formData, submitted } = this.state;
    return (
      <div className="edit-line-modal" style={{ width: '500px' }}>
        <h3 className="secondary mb-20">Edit line</h3>
        <Form
          hide={submitted}
          config={config}
          initialValues={this.initialValues}
          onSubmit={this.onSubmit}
        />
        {submitted && <FormChanges
          initialValues={this.initialValues}
          formData={formData}
        />}
      </div>
    )
  }
}

export default EditLine;