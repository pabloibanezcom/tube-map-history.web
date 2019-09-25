import { Button, FormField, Input, TownSelector } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';

const AddDraftForm = ({ towns, onSubmit }) => {
  const { register, handleSubmit, errors, setValue, setError } = useForm();

  useEffect(() => {
    register({ name: 'town' }, { required: true });
  }, [register]);

  const handleSelectorChange = (name, selectedOption) => {
    setValue(name, selectedOption);
    setError(name, null);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Name" error={errors.name && errors.name.message}>
        <Input name="name" formRef={register} extraClass={errors.name && 'input-error'} required />
      </FormField>
      <FormField label="Description" error={errors.description && errors.description.message}>
        <Input
          name="description"
          formRef={register}
          extraClass={errors.password && 'input-error'}
          required
        />
      </FormField>
      <FormField label="Town" error={errors.town && 'You must select a town'}>
        <TownSelector
          towns={towns}
          name="town"
          onChange={selectedOptions => handleSelectorChange('town', selectedOptions)}
        />
      </FormField>
      <Button submit color="secondary" text="Create draft" />
    </form>
  );
};

export default AddDraftForm;
