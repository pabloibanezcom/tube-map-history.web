import { Button, FormField, Input, LineSelector, StationSelector } from 'components/shared';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';

const EditConnectionForm = ({ actionObj, draftId, onSubmit, onCancel }) => {
  const { register, handleSubmit, errors, setValue, setError } = useForm();

  useEffect(() => {
    register({ name: 'line' }, { required: 'You must enter a line' });
    register({ name: 'from' }, { required: 'You must enter a station' });
    register({ name: 'to' }, { required: 'You must enter a station' });
  }, [register]);

  const handleSelectorChange = (name, selectedOption) => {
    setValue(name, selectedOption);
    setError(name, null);
  };

  const processSubmit = formData => {
    onSubmit({
      _id: actionObj._id,
      line: formData.line._id,
      stations: [formData.from._id, formData.to._id],
      year: formData.year,
      yearEnd: formData.yearEnd
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(processSubmit)}>
      <FormField label="Line" error={errors.line && errors.line.message}>
        <LineSelector
          draftId={draftId}
          defaultValue={actionObj.line._id}
          onChange={value => handleSelectorChange('line', value)}
        />
      </FormField>
      <FormField label="From" error={errors.from && errors.from.message}>
        <StationSelector
          draftId={draftId}
          defaultValue={actionObj.stations[0]._id}
          onChange={value => handleSelectorChange('from', value)}
        />
      </FormField>
      <FormField label="To" error={errors.to && errors.to.message}>
        <StationSelector
          draftId={draftId}
          defaultValue={actionObj.stations[1]._id}
          onChange={value => handleSelectorChange('to', value)}
        />
      </FormField>
      <FormField label="Year" error={errors.year && errors.year.message}>
        <Input
          name="year"
          type="number"
          formRef={register}
          defaultValue={actionObj.year}
          extraClass={errors.year && 'input-error'}
          required
        />
      </FormField>
      <FormField label="Year End" error={errors.yearEnd && errors.yearEnd.message}>
        <Input
          name="yearEnd"
          type="number"
          formRef={register}
          defaultValue={actionObj.yearEnd}
          extraClass={errors.yearEnd && 'input-error'}
        />
      </FormField>
      <div className="row">
        <div className="col-lg-6">
          <Button submit color="secondary" inverse text="Confirm" block />
        </div>
        <div className="col-lg-6">
          <Button color="secondary" text="Cancel" outline block onClick={onCancel} />
        </div>
      </div>
    </form>
  );
};

export default EditConnectionForm;
