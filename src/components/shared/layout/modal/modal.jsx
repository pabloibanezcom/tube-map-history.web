import { Button } from 'components/shared';
import React from 'react';
import Modal from 'react-modal';

const CustomModal = (props) => {

  const { modalContent, onClose } = props;
  const ModalContent = modalContent;
  // eslint-disable-next-line no-unneeded-ternary
  const isOpen = modalContent ? true : false;

  return (
    <div>
      <Modal
        className="m0dal animated zoomIn animated-3x"
        overlayClassName="m0dal-overlay"
        isOpen={isOpen}
        ariaHideApp={false}
      >
        {isOpen && <ModalContent {...props} />}
        <Button
          type="link"
          text=""
          icon="close"
          color="secondary"
          extraClass="close-button"
          onClick={onClose}
        />
      </Modal>
    </div>
  )
}

export default CustomModal;