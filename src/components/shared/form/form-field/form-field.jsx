import PropTypes from 'prop-types';
import React from 'react';

const formField = (props) => {
  const { children, error, label } = props;
  return (
    <div className="field">
      {label ? <label className="label">{label}</label> : null}
      <div className="control">
        {children}
      </div>
      <div className="error-msg">{error}</div>
    </div>
  )
}

formField.defaultProps = {
  error: null,
  label: null
};

formField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string
};

export default formField;