import { Button, FormField, Input, Selector } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import ageOptions from './age-options.json';

const BasicFormWithSelector = () => {
  const { register, handleSubmit, errors, setValue, setError } = useForm();

  useEffect(() => {
    register({ name: 'age' }, { required: false });
    register({ name: 'partnerAge' }, { required: true });
  }, [register]);

  const handleSelectorChange = (name, selectedOption) => {
    setValue(name, selectedOption);
    setError(name, null);
  }

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Email Address"
        error={errors.email && errors.email.message}
      >
        <Input
          type="email"
          name="email"
          formRef={register}
          extraClass={errors.email && 'input-error'}
          clearable
          required
        />
      </FormField>
      <FormField
        label="Password"
        error={errors.password && errors.password.message}
      >
        <Input
          type="password"
          name="password"
          formRef={register}
          extraClass={errors.password && 'input-error'}
          required
        />
      </FormField>
      <FormField
        label="Age"
        error={errors.age && 'You must enter the age'}
      >
        <Selector
          options={ageOptions}
          name="age"
          onChange={(selectedOptions) => handleSelectorChange('age', selectedOptions)}
        />
      </FormField>
      <FormField
        label="Partner Age"
        error={errors.partnerAge && 'You must enter the partner age'}
      >
        <Selector
          options={ageOptions}
          name="partnerAge"
          onChange={(selectedOptions) => handleSelectorChange('partnerAge', selectedOptions)}
        />
      </FormField>
      <Button
        submit
        color="secondary"
        text="Login"
      />
    </form>
  );
};

export default BasicFormWithSelector;