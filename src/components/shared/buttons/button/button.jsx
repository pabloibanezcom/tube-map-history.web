import { Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const button = (props) => {
  const { block, extraClass, icon, inverse, onClick, outline, size, color, uppercase, submit, text, to, type } = props;
  let buttonClasses = '';
  if (type === 'btn') {
    buttonClasses = `${uppercase ? 'btn-uppercase' : ''}  ${inverse ? 'btn-inverse' : ''} ${outline ? 'btn-outline' : ''} ${block ? 'btn-block' : ''}`;
  }
  const classStr = `${type} ${type}-${size} ${type}-${color} ${buttonClasses} ${extraClass}`;
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
      /* eslint-disable-next-line react/button-has-type */
      <button
        type={submit ? 'submit' : 'button'}
        className={classStr}
        onClick={onClick}
      >
        {icon ? <Icon name={icon} /> : null}
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
  extraClass: '',
  icon: '',
  inverse: false,
  outline: false,
  size: 'sm',
  color: 'primary',
  uppercase: true,
  onClick: () => { },
  submit: false,
  to: null,
  type: 'btn'
};

button.propTypes = {
  block: PropTypes.bool,
  extraClass: PropTypes.string,
  inverse: PropTypes.bool,
  icon: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary', 'light']),
  uppercase: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['link', 'btn'])
};

export default button