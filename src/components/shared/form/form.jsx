import { Button, ColorSelector, FormField, Input } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';
import { hasErrors } from 'util/data';
import customValidations from './custom-validations';

const Form = (props) => {
  const { i18nPrefix, config: { fields, submit }, initialValues, hide, onSubmit } = props;
  const { register, handleSubmit, errors, setValue, setError } = useForm({
    defaultValues: {
      ...initialValues
    }
  });

  React.useEffect(() => {
    if (!hide) {
      fields.filter(f => f.type !== 'text').forEach(f => {
        register({ name: f.name }, typeof f.validation === 'object' ? f.validation : { validate: customValidations[f.validation] });
        setValue(f.name, initialValues[f.name]);
      })
    }
  });

  const handleChange = (name, val) => {
    setError(name, null)
    setValue(name, val);
  }

  const getFieldComponent = (field) => {
    switch (field.type) {
      case 'text':
        return <Input
          type="text"
          name={field.name}
          formRef={register}
          extraClass={errors[field.name] && 'input-error'}
          required={field.validation.required}
        />
      case 'number': {
        return <Input
          type="number"
          name={field.name}
          value={initialValues[field.name]}
          onChange={val => handleChange(field.name, parseInt(val, 10))}
          extraClass={errors[field.name] && 'input-error'}
        />
      }
      case 'color': {
        return <ColorSelector
          color={initialValues[field.name]}
          onChange={val => handleChange(field.name, val)}
        />
      }
      default:
        return null;
    }
  }

  return (
    <React.Fragment>
      {!hide && (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {fields.map(f => (
              <div key={f.name} className={f.size}>
                <FormField
                  prefix={i18nPrefix}
                  id={f.label}
                  error={errors[f.name] && errors[f.name].message}
                >
                  {getFieldComponent(f)}
                </FormField>
              </div>
            ))}
          </div>
          <Button
            submit
            color={submit.color}
            inverse={submit.inverse}
            i18nPrefix={i18nPrefix}
            i18nText={submit.textI18n}
            disabled={hasErrors(errors)}
          />
        </form>
      )}
    </React.Fragment>

  )
}

export default Form;