import PropTypes from 'prop-types';
import React from 'react';

const panel = (props) => {

  const { background, children, className, header, headerColor, width } = props;

  return (
    <div className={`panel ${className}`}>
      {header ? (
        <div className={`panel-header panel-${headerColor}`}>
          <h4 className="mb-0 mt-0">{header}</h4>
        </div>
      ) : null}
      <div
        className={`panel-content panel-${background}`}
        style={width ? { width } : null}
      >
        {children}
      </div>
    </div>
  )
}

panel.defaultProps = {
  background: 'white',
  className: null,
  header: null,
  headerColor: null,
  width: null
};

panel.propTypes = {
  background: PropTypes.oneOf(['white', 'primary', 'secondary']),
  className: PropTypes.string,
  header: PropTypes.string,
  headerColor: PropTypes.oneOf(['primary', 'secondary']),
  width: PropTypes.number
};

export default panel;