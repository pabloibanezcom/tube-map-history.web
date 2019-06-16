import PropTypes from 'prop-types';
import React from 'react';

const formChanges = (props) => {
  const { initialValues, formData } = props;
  console.log(initialValues, formData);
  return (
    <div className="form-changes">
      Form changes
    </div>
  )
}

formChanges.defaultProps = {
  initialValues: null,
  formData: null
};

formChanges.propTypes = {
  initialValues: PropTypes.object,
  formData: PropTypes.object
};

export default formChanges;