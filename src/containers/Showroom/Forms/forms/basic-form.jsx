import { Button, Input } from 'components/shared';
import React from 'react';
import useForm from 'react-hook-form';

const BasicForm = () => {
  const { register, handleSubmit, errors } = useForm();

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
      <Button
        submit
        color="secondary"
        text="Login"
      />
    </form>
  );
};

export default BasicForm;