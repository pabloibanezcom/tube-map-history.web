import { Button, Modal } from 'components/shared';
import React from 'react';
import BasicModal1 from './example-modals/basic-modal-1';
import BasicModal2 from './example-modals/basic-modal-2';
import ModalWithProps from './example-modals/modal-with-props';

class Modals extends React.Component {
  modalComponents = {
    basicModal1: BasicModal1,
    basicModal2: BasicModal2,
    modalWithProps: ModalWithProps
  };

  constructor(props) {
    super(props);
    this.state = {
      activeModal: null,
      modalProps: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalKey, modalProps) {
    this.setState({ activeModal: modalKey, modalProps });
  }

  closeModal() {
    this.setState({ activeModal: null });
  }

  render() {
    const { activeModal, modalProps } = this.state;
    return (
      <div className="showroom-layout">
        <Modal
          modalContent={this.modalComponents[activeModal]}
          onClose={this.closeModal}
          {...modalProps}
        />
        <h1 className="right-line mb-4">Modals</h1>
        <div className="row">
          <div className="col-lg-2 col-md-4">
            <div className="showroom-element">
              <label>Basic modal 1</label>
              <Button text="Open modal" onClick={() => this.openModal('basicModal1')} />
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="showroom-element">
              <label>Basic modal 2</label>
              <Button text="Open modal" onClick={() => this.openModal('basicModal2')} />
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="showroom-element">
              <label>Modal with props</label>
              <Button
                text="Open modal"
                onClick={() =>
                  this.openModal('modalWithProps', {
                    name: 'John',
                    onClick: () => console.log('Printing from modal with props')
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modals;
