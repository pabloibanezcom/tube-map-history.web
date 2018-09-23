import React from 'react';
import Form from '../../form/form';
import Modal from '../../UI/modal/modal';
import * as formElements from './edit-station.form.json';

class EditStation extends React.Component {

  handleValidSubmit(formData) {
    this.props.onClose();
    this.props.onEditStation({ _id: this.props.station._id, ...formData });
  }

  render() {
    this.content = <Form
      formElements={formElements}
      obj={this.props.station}
      onValidSubmit={this.handleValidSubmit.bind(this)}
      {...this.props}
    />;
    return <Modal
      show={this.props.show}
      onClose={this.props.onClose}
      header={this.props.station ? this.props.station.name : null}
      content={this.content}
    />
  }
}

export default EditStation;