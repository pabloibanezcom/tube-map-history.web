import { Button, ColorSelector, FormField, Input } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';

const AddLineForm = ({ onSubmit, onCancel }) => {
  const { register, handleSubmit, errors, setValue, setError } = useForm();

  useEffect(() => {
    register({ name: 'colour' }, { required: 'You must enter a color' });
    register({ name: 'fontColour' }, { required: 'You must enter a font color' });
  }, [register]);

  const handleSelectorChange = (name, selectedOption) => {
    setValue(name, selectedOption);
    setError(name, null);
  };

  const processSubmit = formData => {
    onSubmit({ ...formData });
  };
  return (
    <form className="form" onSubmit={handleSubmit(processSubmit)}>
      <FormField label="Key" error={errors.key && errors.key.message}>
        <Input name="key" formRef={register} extraClass={errors.key && 'input-error'} required />
      </FormField>
      <FormField label="Name" error={errors.name && errors.name.message}>
        <Input name="name" formRef={register} extraClass={errors.name && 'input-error'} required />
      </FormField>
      <FormField label="Short name" error={errors.shortName && errors.shortName.message}>
        <Input
          name="shortName"
          formRef={register}
          extraClass={errors.shortName && 'input-error'}
          required
        />
      </FormField>
      <FormField label="Year" error={errors.year && errors.year.message}>
        <Input
          name="year"
          type="number"
          formRef={register}
          extraClass={errors.year && 'input-error'}
          required
        />
      </FormField>
      <FormField label="Color" error={errors.colour && errors.colour.message}>
        <ColorSelector name="colour" onChange={value => handleSelectorChange('colour', value)} />
      </FormField>
      <FormField label="Font Color" error={errors.fontColour && errors.fontColour.message}>
        <ColorSelector
          name="fontColour"
          onChange={value => handleSelectorChange('fontColour', value)}
        />
      </FormField>
      <div className="row">
        <div className="col-lg-6">
          <Button submit color="secondary" inverse text="Add line" block />
        </div>
        <div className="col-lg-6">
          <Button color="secondary" text="Cancel" outline block onClick={onCancel} />
        </div>
      </div>
    </form>
  );
};

export default AddLineForm;
