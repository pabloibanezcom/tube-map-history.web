// import StationsInfo from 'components/admin/admin-town/stations-info/stations-info';
import PropTypes from 'prop-types';
import React from 'react';
// import defaultPagination from './defaultPagination.json';

const AdminStationsPanel = ({ className }) => {
  return (
    <div className={`admin-stations-panel ${className}`}>
      Stations
      {/* <StationsInfo
        stations={stations}
        pagination={defaultPagination}
        onPageChange={() => { }}
      /> */}
    </div>
  )
}

AdminStationsPanel.defaultProps = {
  className: '',
};

AdminStationsPanel.propTypes = {
  // stations: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string
};

export default AdminStationsPanel;
