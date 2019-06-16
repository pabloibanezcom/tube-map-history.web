import React from 'react';
import ModalContent from './modal-content/modal-content';

class Modal extends React.Component {

  shouldComponentUpdate(nextProps) {
    const { children, show } = this.props;
    return nextProps.show !== show || nextProps.children !== children;
  }

  render() {
    const { content, header, onClose, show } = this.props;
    return (
      <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog animated zoomIn animated-3x" role="document">
          <ModalContent
            onClose={onClose}
            header={header}
            content={content}
          />
        </div>
      </div>
    )
  }
}

export default Modal;