import React from 'react';
import Dropzone from 'react-dropzone';

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }

  onDrop = files => {
    const { onChange } = this.props;
    this.setState({ files });
    onChange(files[0]);
  };

  onCancel = () => {
    this.setState({
      files: []
    });
  };

  render() {
    const { files } = this.state;
    return (
      <Dropzone onDrop={this.onDrop} onFileDialogCancel={this.onCancel}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <div className="form-group">
              <input {...getInputProps()} />
              <input
                className="form-control"
                type="text"
                placeholder="Browse..."
                value={files[0] ? files[0].name : ''}
              />
            </div>
          </div>
        )}
      </Dropzone>
    );
  }
}

export default FileUpload;
