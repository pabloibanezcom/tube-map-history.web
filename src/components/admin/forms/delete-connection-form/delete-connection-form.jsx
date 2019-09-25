import { Button } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const DeleteConnectionForm = ({ actionObj, onSubmit, onCancel }) => {
  const { handleSubmit } = useForm();

  const processSubmit = () => {
    onSubmit(actionObj._id);
  };

  return (
    <div>
      <h4 className="text-center">Are you sure you want to delete this connection?</h4>
      <form className="form mt-40" onSubmit={handleSubmit(processSubmit)}>
        <div className="row">
          <div className="col-lg-6">
            <Button submit color="danger" text="Confirm" outline block />
          </div>
          <div className="col-lg-6">
            <Button color="secondary" text="Cancel" outline block onClick={onCancel} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteConnectionForm;
