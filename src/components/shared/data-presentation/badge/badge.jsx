import PropTypes from 'prop-types';
import React from 'react';
import { getContrastColor } from 'util/color';

const badge = props => {
  const { block, border, color, backgroundColor, fontColor, extraClass, text } = props;
  const style =
    backgroundColor || fontColor
      ? { backgroundColor, color: fontColor || getContrastColor(backgroundColor) }
      : null;
  if (border && fontColor) {
    style.borderColor = fontColor;
  }
  return (
    <span
      className={`badge badge-${color} ${block ? 'badge-block' : ''} ${
        border ? 'badge-border' : ''
      } ${extraClass}`}
      style={style}
    >
      {text}
    </span>
  );
};

badge.defaultProps = {
  block: false,
  border: false,
  color: 'primary',
  backgroundColor: null,
  fontColor: null,
  extraClass: ''
};

badge.propTypes = {
  block: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  extraClass: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default badge;
