import { Form, Translation } from 'components/shared';
import React from 'react';
import config from './add-line.config.json';

class AddLine extends React.Component {

  i18nPrefix = 'ADMIN.TOWN.LINES';

  constructor(props) {
    super(props);

    this.state = {
      formData: null
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    const { onClose } = this.props;
    onClose();
  }

  handleSubmit(formData) {
    console.log(this.state);
    console.log(formData);
  }


  render() {
    return (
      <div className="edit-line-modal" style={{ width: '500px' }}>
        <h3 className="secondary mb-20"><Translation prefix={this.i18nPrefix} id="ADD_LINE" /></h3>
        <Form
          i18nPrefix={this.i18nPrefix}
          config={config}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
        />
      </div>
    )
  }
}

export default AddLine;