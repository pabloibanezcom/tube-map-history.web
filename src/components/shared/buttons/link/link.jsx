import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const link = (props) => {
  const { text, to, type } = props;
  const linkClass = type === 'Link' ? '' : 'btn btn-raised btn-primary btn-block';
  return (
    <Link
      to={to}
      className={linkClass}
    >
      {text}
    </Link>
  )
}

link.defaultProps = {
  type: 'Link'
};

link.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Link', 'Button'])
};

export default link;