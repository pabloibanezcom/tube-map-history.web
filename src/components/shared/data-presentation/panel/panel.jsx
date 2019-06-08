import PropTypes from 'prop-types';
import React from 'react';

const panel = (props) => {

  const { background, children, extraClass, width } = props;

  return (
    <div
      className={`panel panel-${background} ${extraClass}`}
      style={width ? { width } : null}
    >
      {children}
    </div>
  )
}

panel.defaultProps = {
  background: 'white',
  extraClass: null,
  width: null
};

panel.propTypes = {
  background: PropTypes.oneOf(['white', 'primary', 'secondary']),
  extraClass: PropTypes.string,
  width: PropTypes.number
};

export default panel;