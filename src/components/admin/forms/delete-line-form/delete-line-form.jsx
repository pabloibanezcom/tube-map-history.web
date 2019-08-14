import { Button, FormField, Input } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const DeleteLineForm = ({ actionObj, onSubmit, onCancel }) => {
  const { register, handleSubmit, errors, setError } = useForm();

  const processSubmit = (formData) => {
    if (formData.name.trim() === actionObj.name.trim()) {
      onSubmit(actionObj._id);
    } else {
      setError('name', 'notMatch', 'Name must be same as line name')
    }
  }

  return (
    <div>
      <h4 className="text-center">Are you sure you want to delete this line?</h4>
      <p className="text-center mt-20">All connections related to this line will be deleted too.</p>
      <p className="text-center">To delete the line <b>{actionObj.name}</b> , type the name to confirm.</p>
      <form className="form mt-40" onSubmit={handleSubmit(processSubmit)}>
        <FormField
          label="Name"
          error={errors.name && errors.name.message}
        >
          <Input
            name="name"
            formRef={register}
            extraClass={errors.name && 'input-error'}
            required
          />
        </FormField>
        <div className="row">
          <div className="col-lg-6">
            <Button
              submit
              color="danger"
              text="Confirm"
              block
            />
          </div>
          <div className="col-lg-6">
            <Button
              color="secondary"
              text="Cancel"
              outline
              block
              onClick={onCancel}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteLineForm;