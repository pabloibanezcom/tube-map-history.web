import PropTypes from 'prop-types';
import React from 'react';

const badge = (props) => {
  const { color, backgroundColor, fontColor, extraClass, text } = props;
  const style = (backgroundColor || fontColor) ? { backgroundColor, color: fontColor } : null;
  return (
    <span
      className={`badge badge-${color} ${extraClass}`}
      style={style}
    >
      {text}
    </span>
  )
}

badge.defaultProps = {
  color: 'primary',
  backgroundColor: null,
  fontColor: null,
  extraClass: ''
};

badge.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  extraClass: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default badge;