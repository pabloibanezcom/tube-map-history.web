import { Icon } from 'components/shared';
import React from 'react';
import onClickOutside from "react-onclickoutside";

class ModalContent extends React.Component {

  handleClickOutside() {
    const { onClose } = this.props;
    onClose();
  }

  render() {
    const { content, header, onClose } = this.props;
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title secondary">{header}</h3>
          <button type="button" className="close" onClick={onClose}>
            <span aria-hidden="true">
              <Icon name="close" />
            </span>
          </button>
        </div>
        <div className="modal-body">
          {content}
        </div>
      </div>
    )
  }
}

export default onClickOutside(ModalContent);