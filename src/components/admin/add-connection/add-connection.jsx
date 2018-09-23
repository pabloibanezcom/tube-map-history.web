import React from 'react';
import Form from '../../form/form';
import Modal from '../../UI/modal/modal';
import * as formElements from './add-connection.form.json';

class AddConnection extends React.Component {

  handleValidSubmit(formData) {
    this.props.onClose();
    this.props.onAddConnection({
      year: formData.year,
      yearEnd: null,
      line: formData.line,
      stations: [this.props.stationFrom._id, formData.stationTo]
    });
  }

  render() {
    this.content = <Form
      formElements={formElements}
      obj={{ stationFrom: this.props.stationFrom && this.props.stationFrom.name }}
      onValidSubmit={this.handleValidSubmit.bind(this)}
    />;
    return <Modal
      show={this.props.show}
      onClose={this.props.onClose}
      header={'Add connection'}
      content={this.content}
    />
  }
}

export default AddConnection;