import PropTypes from 'prop-types';
import React from 'react';

const panel = (props) => {

  const { background, children } = props;


  return (
    <div className={`panel panel-${background}`}>
      {children}
    </div>
  )
}

panel.defaultProps = {
  background: 'white'
};

panel.propTypes = {
  background: PropTypes.oneOf(['white', 'primary', 'secondary'])
};

export default panel;