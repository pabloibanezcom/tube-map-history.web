import React from 'react';
import Form from '../../form/form';
import * as formElements from './search-filter.form.json';

class SearchFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stationName: '',
      testFilterName: 'Test'
    }
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  handleValidSubmit(formData) {
    this.props.onSearch(formData);
  }

  render() {
    return <div className="search-filter">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <i className="fa fa-search"></i> Search panel</h3>
        </div>
        <div className="panel-body">
          <Form
            formElements={formElements}
            onValidSubmit={this.handleValidSubmit}
            {...this.props}
          />
        </div>
      </div>
    </div>
  }
}

export default SearchFilter;