import { Form } from 'components/shared';
import React from 'react';

const formFilters = {
  stations: require('./form-filters/stations.json'),
  lines: require('./form-filters/lines.json'),
  connections: require('./form-filters/connections.json'),
};

const searchFilter = (props) => {

  const { activeTab } = props;

  const handleValidSubmit = (formData) => {
    props.onSearch(null, formData);
  }

  return (
    <div className="search-filter">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><i className="fa fa-search" /> Search panel</h3>
        </div>
        <div className="panel-body">
          <Form
            formElements={formFilters[activeTab]}
            onValidSubmit={handleValidSubmit}
            {...props}
          />
        </div>
      </div>
    </div>
  )
}

export default searchFilter;