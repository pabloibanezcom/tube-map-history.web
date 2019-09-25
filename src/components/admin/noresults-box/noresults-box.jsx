import { Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const NoResultsBox = ({ noDrafts, className }) => {
  return (
    <div className={`noresults-box ${className}`}>
      {!noDrafts && (
        <Link to="/admin/create-draft">
          <Icon name="add" color="secondary" size="lg" />
          <span>Create your first draft</span>
        </Link>
      )}
      {noDrafts && (
        <div>
          <span>You need to create a draft in order to publish it</span>
        </div>
      )}
    </div>
  );
};

NoResultsBox.defaultProps = {
  noDrafts: false,
  className: ''
};

NoResultsBox.propTypes = {
  noDrafts: PropTypes.bool,
  className: PropTypes.string
};

export default NoResultsBox;
