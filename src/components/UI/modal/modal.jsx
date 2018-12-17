import React from 'react';
import ModalContent from './modal-content/modal-content';

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <div className={`modal ${this.props.show ? 'show' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog animated zoomIn animated-3x" role="document">
          <ModalContent
            onClose={this.props.onClose}
            header={this.props.header}
            content={this.props.content}
          />
        </div>
      </div>
    )
  }
}

export default Modal;