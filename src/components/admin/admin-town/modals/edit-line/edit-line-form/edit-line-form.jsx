import { Button, ColorSelector, FormField, Input } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import { hasErrors } from 'util/data';

const EditLineForm = (props) => {
  const { initialValues, onSubmit, show } = props;
  const { register, handleSubmit, errors, setValue, setError } = useForm({
    defaultValues: {
      ...initialValues
    }
  });

  useEffect(() => {
    register({ name: 'order' }, { required: true });
    register({ name: 'year' }, { required: true });
    register({ name: 'colour' }, { required: true });
    register({ name: 'fontColour' }, { required: true });
    setValue('order', initialValues.order);
    setValue('year', initialValues.year);
    setValue('colour', initialValues.colour);
    setValue('fontColour', initialValues.fontColour);
  });

  const handleChange = (name, selectedOption) => {
    setValue(name, selectedOption);
    setError(name, null);
  }

  return (
    <React.Fragment>
      {show && (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6">
              <FormField
                label="Order"
                error={errors.order && errors.order.message}
              >
                <Input
                  type="number"
                  name="order"
                  value={initialValues.order}
                  onChange={val => handleChange('order', parseInt(val, 10))}
                  extraClass={errors.order && 'input-error'}
                />
              </FormField>
            </div>
            <div className="col-6">
              <FormField
                label="Key"
                error={errors.key && errors.key.message}
              >
                <Input
                  type="text"
                  name="key"
                  formRef={register}
                  extraClass={errors.key && 'input-error'}
                  required
                />
              </FormField>
            </div>
            <div className="col-6">
              <FormField
                label="Name"
                error={errors.name && errors.name.message}
              >
                <Input
                  type="text"
                  name="name"
                  formRef={register}
                  extraClass={errors.name && 'input-error'}
                  required
                />
              </FormField>
            </div>
            <div className="col-6">
              <FormField
                label="Short name"
                error={errors.shortName && errors.shortName.message}
              >
                <Input
                  type="text"
                  name="shortName"
                  formRef={register}
                  extraClass={errors.shortName && 'input-error'}
                  required
                />
              </FormField>
            </div>
            <div className="col-4">
              <FormField
                label="Year"
                error={errors.year && errors.year.type === "invalidYear" && 'Year must be between 1800 and 2019'}
              >
                <Input
                  type="number"
                  valueType="number"
                  name="year"
                  value={initialValues.year}
                  onChange={val => handleChange('year', parseInt(val, 10))}
                  customValidation={{
                    validate: {
                      invalidYear: value => parseFloat(value) >= 1800 && parseFloat(value) <= 2019
                    }
                  }}
                  extraClass={errors.year && 'input-error'}
                  required
                />
              </FormField>
            </div>
            <div className="col-4">
              <FormField
                label="Colour"
                error={errors.colour && errors.colour.message}
              >
                <ColorSelector
                  color={initialValues.colour}
                  onChange={val => handleChange('colour', val)}
                />
              </FormField>
            </div>
            <div className="col-4">
              <FormField
                label="Font Colour"
                error={errors.fontColour && errors.fontColour.message}
              >
                <ColorSelector
                  color={initialValues.fontColour}
                  onChange={val => handleChange('fontColour', val)}
                />
              </FormField>
            </div>
          </div>
          <Button
            submit
            color="secondary"
            inverse
            text="Confirm"
            disabled={hasErrors(errors)}
          />
        </form>
      )}
    </React.Fragment>
  )
}

export default EditLineForm;