import { Button, FormField, Input, PlaceSelector } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';

const EditStationForm = ({ actionObj, onSubmit, onCancel }) => {
  const { register, handleSubmit, errors, setValue, setError } = useForm();

  useEffect(() => {
    register({ name: 'geometry' }, { required: 'You must enter a position' });
  }, [register]);

  const handleSelectorChange = (name, selectedOption) => {
    setValue(name, selectedOption);
    setError(name, null);
  }

  const processSubmit = (formData) => {
    onSubmit({ ...formData, _id: actionObj._id });
  }

  setValue('geometry', actionObj.geometry);

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
        label="Year"
        error={errors.year && errors.year.message}
      >
        <Input
          name="year"
          type="number"
          formRef={register}
          defaultValue={actionObj.year}
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
          defaultValue={actionObj.yearEnd}
          extraClass={errors.yearEnd && 'input-error'}
        />
      </FormField>
      <FormField
        label="Position"
        error={errors.geometry && errors.geometry.message}
      >
        <PlaceSelector
          defaultValue={actionObj.geometry}
          defaultName={actionObj.name}
          onChange={(value) => handleSelectorChange('geometry', value)}
        />
      </FormField>
      <div className="row">
        <div className="col-lg-6">
          <Button
            submit
            color="secondary"
            inverse
            text="Edit station"
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

export default EditStationForm;