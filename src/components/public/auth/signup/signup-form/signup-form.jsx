import { Button, CountrySelector, FormField, Input } from 'components/shared';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';

const SignUpForm = (props) => {
  const { onSubmit } = props;
  const { register, formState, handleSubmit, errors, getValues, setError, setValue } = useForm();


  useEffect(() => {
    register({ name: 'country' }, { required: true });
  }, [register]);

  const handleSelectorChange = (name, selectedOption) => {
    setValue(name, selectedOption);
    setError(name, null);
  }

  const checkRepeatPassword = (repeatPassword, isSubmitted) => {
    if ((isSubmitted || formState.isSubmitted) && repeatPassword !== getValues().password) {
      setError('repeatPassword', 'notMatch', 'Passwords must match')
    }
  }

  const submit = (formData) => {
    checkRepeatPassword(getValues().repeatPassword, true);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      onSubmit(formData);
      console.log(formData);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="row">
        <div className="col-6">
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
            label="Repeat Password"
            error={errors.repeatPassword && errors.repeatPassword.message}
          >
            <Input
              type="password"
              name="repeatPassword"
              formRef={register}
              extraClass={errors.repeatPassword && 'input-error'}
              onChange={checkRepeatPassword}
              required
            />
          </FormField>
        </div>
        <div className="col-6">
          <FormField
            label="First name"
            error={errors.firstName && errors.firstName.message}
          >
            <Input
              type="text"
              name="firstName"
              formRef={register}
              extraClass={errors.firstName && 'input-error'}
              required
            />
          </FormField>
          <FormField
            label="Last name"
            error={errors.lastName && errors.lastName.message}
          >
            <Input
              type="text"
              name="lastName"
              formRef={register}
              extraClass={errors.lastName && 'input-error'}
              required
            />
          </FormField>
          <FormField
            label="Country"
            error={errors.country && 'You must select a country'}
          >
            <CountrySelector
              name="country"
              onChange={(selectedOptions) => handleSelectorChange('country', selectedOptions)}
            />
          </FormField>
        </div>
      </div>
      <Button
        submit
        color="primary"
        text="Sign Up"
        extraClass="mb-20"
      />
    </form>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignUpForm;