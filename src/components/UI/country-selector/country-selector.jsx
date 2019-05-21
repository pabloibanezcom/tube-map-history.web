import Select from 'components/form/elements/select/select';
import Api from 'http/api';
import React from 'react';
import * as selectConfig from './country-selector.config.json';

class CountrySelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  async componentDidMount() {
    const response = await Api.country.getCountries();
    this.setState({ countries: response.data });
  }

  handleOnChange(country) {
    const { onChange } = this.props;
    onChange(country);
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="country-selector">
        <Select config={{ ...selectConfig }} options={countries} onChange={this.handleOnChange} />
      </div>
    )
  }
}

export default CountrySelector;