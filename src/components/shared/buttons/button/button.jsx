import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const button = (props) => {
  const { block, inverse, onClick, outline, size, color, uppercase, text, to, type } = props;
  const classStr = `${type} ${type}-${size} ${type}-${color} ${uppercase && type === 'btn' ? 'btn-uppercase' : ''}  ${inverse ? 'btn-inverse' : ''} ${outline ? 'btn-outline' : ''} ${block && type === 'btn' ? 'btn-block' : ''}`;
  if (to) {
    return (
      <Link
        to={to}
        className={classStr}
      >
        {text}
      </Link>
    );
  }
  if (type === 'btn') {
    return (
      <button
        type="button"
        className={classStr}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  if (type === 'link') {
    return (
      <a
        className={classStr}
        onClick={onClick}
      >
        {text}
      </a>
    );
  }
  return null;
}

button.defaultProps = {
  block: true,
  inverse: false,
  outline: false,
  size: 'sm',
  color: 'primary',
  uppercase: true,
  onClick: () => { },
  to: null,
  type: 'btn'
};

button.propTypes = {
  block: PropTypes.bool,
  inverse: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary', 'light']),
  uppercase: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.oneOf(['link', 'btn'])
};

export default button