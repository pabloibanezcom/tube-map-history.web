import { Translation } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';

const formField = (props) => {
  const { children, error, label, prefix, id } = props;
  const getLabel = () => id ? <Translation prefix={prefix} id={id} /> : label;
  return (
    <div className="field">
      {label || id ? <label className="label">{getLabel()}</label> : null}
      <div className="control">
        {children}
      </div>
      <div className="error-msg">{error}</div>
    </div>
  )
}

formField.defaultProps = {
  error: null,
  label: null,
  prefix: null,
  id: null
};

formField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.string,
  id: PropTypes.string
};

export default formField;