import PropTypes from 'prop-types';
import React from 'react';

const AdminConnectionsPanel = ({ connections, className }) => {
  return (
    <div className={`admin-connections-panel ${className}`}>
      Connections - {connections.length}
    </div>
  )
}

AdminConnectionsPanel.defaultProps = {
  className: '',
};

AdminConnectionsPanel.propTypes = {
  connections: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
};

export default AdminConnectionsPanel;
