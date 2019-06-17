import { Button, FormField, Input, LineSelector, Panel } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';

const StationsFilterPanel = (props) => {
  const { lines, onChange } = props;
  const { register, handleSubmit, errors, setValue, setError } = useForm();

  useEffect(() => {
    register({ name: 'name' }, { required: false });
    register({ name: 'line' }, { required: false });
  }, [register]);

  const handleSelect = (name, selectedOption) => {
    setValue(name, selectedOption._id);
    setError(name, null);
  }

  const onSubmit = data => {
    onChange(data);
  }

  return (
    <div className="stations-filter-panel">
      <Panel
        header="Search stations"
        headerColor="primary"
      >
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="Station name"
            error={errors.name && errors.name.message}
          >
            <Input
              type="text"
              name="name"
              formRef={register}
              extraClass={errors.name && 'input-error'}
              clearable
            />
          </FormField>
          <FormField
            label="Line"
            error={errors.line && 'You must enter a line'}
          >
            <LineSelector
              lines={lines}
              onChange={(value) => handleSelect('line', value)}
            />
          </FormField>
          <Button
            submit
            block
            color="secondary"
            text="Search"
          />
        </form>
      </Panel>
    </div>
  )
}

export default StationsFilterPanel;