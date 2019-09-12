import { Button, FormField, Input } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const EditDraftForm = ({ actionObj, onSubmit, onCancel }) => {
  const { register, handleSubmit, errors } = useForm();

  const processSubmit = (formData) => {
    onSubmit({ ...formData, _id: actionObj._id });
  }

  return (
    <form className="form" onSubmit={handleSubmit(processSubmit)}>
      <FormField
        label="Name"
        error={errors.name && errors.name.message}
      >
        <Input
          name="name"
          formRef={register}
          defaultValue={actionObj.name}
          extraClass={errors.name && 'input-error'}
          required
        />
      </FormField>
      <FormField
        label="Description"
        error={errors.description && errors.description.message}
      >
        <Input
          name="description"
          formRef={register}
          defaultValue={actionObj.description}
          extraClass={errors.description && 'input-error'}
          required
        />
      </FormField>
      <div className="row">
        <div className="col-lg-6">
          <Button
            submit
            color="secondary"
            inverse
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
  );
};

export default EditDraftForm;