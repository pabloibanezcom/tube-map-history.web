import Api from 'http/api';
import React from 'react';
import Select from '../select/select';
import CountryDropdown from './country-dropdown/country-dropdown';
import CountrySelected from './country-selected/country-selected';
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
        {countries.length ? (
          <Select
            config={{ ...selectConfig }}
            options={countries}
            dropdown={CountryDropdown}
            selected={CountrySelected}
            onChange={this.handleOnChange}
            value={countries[40]}
          />
        ) : null}
      </div>
    )
  }
}

export default CountrySelector;