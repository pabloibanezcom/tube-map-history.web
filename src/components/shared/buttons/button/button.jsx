import { Icon, Translation } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const button = (props) => {
  const { fontColor, backgroundColor, block, disabled, extraClass, icon, inverse, hover, onClick, outline, size, color, uppercase, submit, text, i18nPrefix, i18nText, to, type } = props;
  let buttonClasses = '';
  if (type === 'btn') {
    buttonClasses = `${uppercase ? 'btn-uppercase' : ''}  ${inverse ? 'btn-inverse' : ''} ${outline ? 'btn-outline' : ''} ${block ? 'btn-block' : ''}`;
  }
  const classStr = `${type} ${type}-${size} ${type}-${color} ${hover ? `btn-hover-${hover}` : ''} ${buttonClasses} ${extraClass}`;
  const style = { color: fontColor, backgroundColor, borderColor: backgroundColor };
  const renderedText = i18nText ? <Translation prefix={i18nPrefix} id={i18nText} /> : text;
  if (to) {
    return (
      <Link
        to={to}
        className={classStr}
        disabled={disabled}
      >
        {renderedText}
      </Link>
    );
  }
  if (type === 'btn') {
    return (
      /* eslint-disable-next-line react/button-has-type */
      <button
        type={submit ? 'submit' : 'button'}
        className={classStr}
        disabled={disabled}
        style={style}
        onClick={onClick}
      >
        {icon ? <Icon name={icon} /> : null}
        {renderedText}
      </button>
    );
  }
  if (type === 'link') {
    return (
      <a
        className={classStr}
        onClick={onClick}
        disabled={disabled}
      >
        {icon ? <Icon name={icon} /> : null}
        {renderedText}
      </a>
    );
  }
  return null;
}

button.defaultProps = {
  fontColor: null,
  backgroundColor: null,
  hover: null,
  block: false,
  disabled: false,
  extraClass: '',
  icon: '',
  inverse: false,
  outline: false,
  size: 'sm',
  color: 'primary',
  uppercase: true,
  onClick: () => { },
  submit: false,
  text: null,
  i18nPrefix: null,
  i18nText: null,
  to: null,
  type: 'btn'
};

button.propTypes = {
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  hover: PropTypes.oneOf(['primary', 'secondary']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  extraClass: PropTypes.string,
  inverse: PropTypes.bool,
  icon: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary', 'light']),
  uppercase: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  i18nPrefix: PropTypes.string,
  i18nText: PropTypes.string,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['link', 'btn'])
};

export default button