import PropTypes from 'prop-types';
import React from 'react';
import { BarLoader } from 'react-spinners';

const loadingSpinner = props => {
  const { background, className, color, inverse, loading, noSpinner } = props;
  return (
    <React.Fragment>
      {loading ? (
        <div className={`loading-spinner ${className}`}>
          <div className={`ls-background ls-background-${background}`} />
          {!noSpinner && (
            <div
              className={`ls-spinner ls-spinner-${color} ${inverse ? 'ls-spinner-inverse' : ''}`}
            >
              <BarLoader loading={loading} />
            </div>
          )}
        </div>
      ) : null}
    </React.Fragment>
  );
};

loadingSpinner.defaultProps = {
  background: 'light',
  className: '',
  color: 'primary',
  inverse: false,
  loading: false,
  noSpinner: false
};

loadingSpinner.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  inverse: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  noSpinner: PropTypes.bool
};

export default loadingSpinner;
