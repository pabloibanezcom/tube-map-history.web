import { Button } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const DeleteLine = () => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
  }

  return (
    <div className="delete-line-modal">
      <h3 className="secondary mb-20">Delete line</h3>
      <p className="mb-20">It is not possible to delete any line at the moment</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          submit
          color="secondary"
          text="Ok"
        />
      </form>
    </div>
  )
}

export default DeleteLine;