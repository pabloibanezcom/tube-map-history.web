import PropTypes from 'prop-types';
import React from 'react';

const icon = props => {
  const { color, extraClass, name, size } = props;
  return (
    <i
      className={`icon icon-${name} ${size ? `icon-${size}` : ''}  ${
        color ? `icon-${color}` : ''
      } ${extraClass}`}
    />
  );
};

icon.defaultProps = {
  color: null,
  size: null,
  extraClass: ''
};

icon.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'light']),
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  extraClass: PropTypes.string
};

export default icon;
