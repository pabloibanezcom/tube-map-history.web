import React from 'react';
import onClickOutside from "react-onclickoutside";

class ModalContent extends React.Component {

  handleClickOutside(evt) {
    this.props.onClose();
  }

  render() {
    return <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title secondary">{this.props.header}</h3>
        <button type="button" className="close" onClick={this.props.onClose}>
          <span aria-hidden="true">
            <i className="zmdi zmdi-close"></i>
          </span>
        </button>
      </div>
      <div className="modal-body">
        {this.props.content}
      </div>
    </div>

  }
}

export default onClickOutside(ModalContent);