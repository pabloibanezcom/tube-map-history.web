import { Button, FormField, Input } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const BasicForm = () => {
  const { register, handleSubmit, errors } = useForm();

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
      <Button
        submit
        color="secondary"
        text="Login"
      />
    </form>
  );
};

export default BasicForm;