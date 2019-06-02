import { Button, Input, Selector } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import * as ageOptions from './age-options.json';

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
      <div className="field">
        <label className="label">Email Address</label>
        <div className="control">
          <Input
            type="email"
            name="email"
            formRef={register}
            extraClass={errors.email && 'input-error'}
            clearable
            required
          />
        </div>
        <div className="error-msg">
          {errors.email && errors.email.message}
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <Input
            type="password"
            name="password"
            formRef={register}
            extraClass={errors.password && 'input-error'}
            required
          />
        </div>
        <div className="error-msg">
          {errors.password && errors.password.message}
        </div>
      </div>
      <div className="field">
        <label className="label">Age</label>
        <div className="control">
          <Selector
            options={ageOptions}
            name="age"
            onChange={(selectedOptions) => handleSelectorChange('age', selectedOptions)}
          />
        </div>
        <div className="error-msg">
          {errors.age && 'You must enter the age'}
        </div>
      </div>
      <div className="field">
        <label className="label">Partner Age</label>
        <div className="control">
          <Selector
            options={ageOptions}
            name="partnerAge"
            onChange={(selectedOptions) => handleSelectorChange('partnerAge', selectedOptions)}
          />
        </div>
        <div className="error-msg">
          {errors.partnerAge && 'You must enter the partner age'}
        </div>
      </div>
      <Button
        submit
        color="secondary"
        text="Login"
      />
    </form>
  );
};

export default BasicFormWithSelector;