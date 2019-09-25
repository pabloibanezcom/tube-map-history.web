import { Button, FormField, Input } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const DeleteDraftForm = ({ actionObj, onSubmit, onCancel }) => {
  const { register, handleSubmit, errors, setError } = useForm();

  const processSubmit = formData => {
    if (formData.name.trim() === actionObj.name.trim()) {
      onSubmit(actionObj._id);
    } else {
      setError('name', 'notMatch', 'Name must be same as draft name');
    }
  };

  return (
    <div>
      <h4 className="text-center">Are you sure you want to delete this draft?</h4>
      <p className="text-center mt-20">
        To delete the draft <b>{actionObj.name}</b> , type the name to confirm.
      </p>
      <form className="form mt-40" onSubmit={handleSubmit(processSubmit)}>
        <FormField label="Name" error={errors.name && errors.name.message}>
          <Input
            name="name"
            formRef={register}
            extraClass={errors.name && 'input-error'}
            required
          />
        </FormField>
        <div className="row">
          <div className="col-lg-6">
            <Button submit color="danger" text="Confirm" block />
          </div>
          <div className="col-lg-6">
            <Button color="secondary" text="Cancel" outline block onClick={onCancel} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteDraftForm;
