import { Button, FormField, Input } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const AddStationForm = ({ onSubmit, onCancel }) => {
  const { register, handleSubmit, errors } = useForm();

  const processSubmit = (formData) => {
    onSubmit({ ...formData });
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
          extraClass={errors.name && 'input-error'}
          required
        />
      </FormField>
      <FormField
        label="Year"
        error={errors.year && errors.year.message}
      >
        <Input
          name="year"
          type="number"
          formRef={register}
          extraClass={errors.year && 'input-error'}
          required
        />
      </FormField>
      <FormField
        label="Year End"
        error={errors.yearEnd && errors.yearEnd.message}
      >
        <Input
          name="yearEnd"
          type="number"
          formRef={register}
          extraClass={errors.yearEnd && 'input-error'}
        />
      </FormField>
      <div className="row">
        <div className="col-lg-6">
          <Button
            submit
            color="secondary"
            inverse
            text="Add station"
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

export default AddStationForm;