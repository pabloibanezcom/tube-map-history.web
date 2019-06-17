import { Form, FormChanges, Translation } from 'components/shared';
import React from 'react';
import config from './edit-line.config.json';

class EditLine extends React.Component {

  i18nPrefix = 'ADMIN.TOWN.LINES';

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

    this.handleCancel = this.handleCancel.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleCancel() {
    const { onClose } = this.props;
    onClose();
  }

  handleGoBack() {
    this.setState({ submitted: false });
  }

  handleSubmit(formData) {
    this.setState({ submitted: true, formData });
  }

  handleConfirm() {
    const { formData } = this.state;
    console.log(formData);
  }

  render() {
    const { formData, submitted } = this.state;
    return (
      <div className="edit-line-modal" style={{ width: '500px' }}>
        <h3 className="secondary mb-20"><Translation prefix={this.i18nPrefix} id="EDIT_LINE" /></h3>
        <Form
          hide={submitted}
          i18nPrefix={this.i18nPrefix}
          config={config}
          initialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
        />
        {submitted && <FormChanges
          initialValues={this.initialValues}
          formData={formData}
          title={<Translation prefix={this.i18nPrefix} id="EDIT_LINE_CONFIRMATION" />}
          nonChangesTitle={<Translation prefix={this.i18nPrefix} id="EDIT_LINE_NO_CHANGES" />}
          onConfirm={this.handleConfirm}
          onGoBack={this.handleGoBack}
          onCancel={this.handleCancel}
        />}
      </div>
    )
  }
}

export default EditLine;