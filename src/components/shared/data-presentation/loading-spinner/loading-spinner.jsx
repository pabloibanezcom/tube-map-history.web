import PropTypes from 'prop-types';
import React from 'react';
import { BarLoader } from 'react-spinners';

const loadingSpinner = (props) => {
  const { background, color, inverse, loading } = props;
  return (
    <React.Fragment>
      {loading ? (
        <div className="loading-spinner">
          <div className={`ls-background ls-background-${background}`} />
          <div className={`ls-spinner ls-spinner-${color} ${inverse ? 'ls-spinner-inverse' : ''}`}>
            <BarLoader loading={loading} />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  )
}

loadingSpinner.defaultProps = {
  background: 'light',
  color: 'primary',
  inverse: false,
  loading: false
};

loadingSpinner.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  inverse: PropTypes.bool,
  loading: PropTypes.bool
};

export default loadingSpinner;