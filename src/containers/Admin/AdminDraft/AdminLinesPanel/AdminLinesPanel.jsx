import LinesInfo from 'components/admin/admin-town/lines-info/lines-info';
import PropTypes from 'prop-types';
import React from 'react';

const AdminLinesPanel = ({ lines, className }) => {
  return (
    <div className={`admin-lines-panel ${className}`}>
      <LinesInfo
        lines={lines}
      />
    </div>
  )
}

AdminLinesPanel.defaultProps = {
  className: '',
};

AdminLinesPanel.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string
};

export default AdminLinesPanel;
