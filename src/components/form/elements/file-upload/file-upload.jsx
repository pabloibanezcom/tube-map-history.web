import React from 'react';
import Dropzone from 'react-dropzone';

class FileUpload extends React.Component {

  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  onDrop = (files) => {
    this.setState({ files });
    this.props.onChange(files[0]);
  }

  onCancel = () => {
    this.setState({
      files: []
    });
  }

  render() {
    return (
      <Dropzone
        onDrop={this.onDrop}
        onFileDialogCancel={this.onCancel}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <div className="form-group">
              <input {...getInputProps()} />
              <input className="form-control" type="text" placeholder="Browse..." value={this.state.files[0] ? this.state.files[0].name : ''} />
            </div>
          </div>
        )}
      </Dropzone>
    );
  }
}

export default FileUpload;