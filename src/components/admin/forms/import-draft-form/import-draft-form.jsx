import { Button, FormField, Input } from 'components/shared';
import React from 'react';
import Dropzone from 'react-dropzone';

class ImportDraftForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleFileSelected = this.handleFileSelected.bind(this);
    this.processSubmit = this.processSubmit.bind(this);
  }

  handleFileSelected(files) {
    this.setState({ file: files[0] });
  }

  processSubmit(event) {
    const { actionObj, onSubmit } = this.props;
    event.preventDefault();
    const { file } = this.state;
    onSubmit({ file, _id: actionObj._id });
  }

  render() {
    const { onCancel } = this.props;
    const { file } = this.state;

    return (
      <div>
        <h4 className="text-center">
          Warning - This will erase existing data for this draft (lines, stations and connections)
        </h4>
        <form className="form mt-40" onSubmit={this.processSubmit}>
          <Dropzone
            onDrop={this.handleFileSelected}
            multiple={false}
            accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <FormField label="File">
                    <Input name="file" value={file && file.name} required readOnly />
                  </FormField>
                </div>
              </section>
            )}
          </Dropzone>
          <div className="row">
            <div className="col-lg-6">
              <Button submit color="warning" text="Import data" outline block />
            </div>
            <div className="col-lg-6">
              <Button color="secondary" text="Cancel" outline block onClick={onCancel} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ImportDraftForm;
