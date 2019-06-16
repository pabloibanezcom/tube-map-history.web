import { Button } from 'components/shared';
import React from 'react';

const ModalWithProps = ({ name, onClick }) => {
  return (
    <div>
      <div className="mb-20">This is a modal with props - Name: {name}</div>
      <Button
        text="Print console log"
        onClick={onClick}
      />
    </div>
  )
}
export default ModalWithProps;