import Api from 'http/admin';
import pagination from 'http/admin/defaultParams/pagination';
import React from 'react';
import Select from '../select/select';
import StationDropdown from './station-dropdown/station-dropdown';
import StationSelected from './station-selected/station-selected';
import selectConfig from './station-selector.config.json';

const searchParams = {
  select: "name",
  populate: { path: 'draft', select: 'town', populate: { path: 'town', select: 'url' } }
}

class StationSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      initialStation: null
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getInitialStation = this.getInitialStation.bind(this);
    this.search = this.search.bind(this);
  }

  async componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      await this.getInitialStation(defaultValue);
    }
  }

  async getInitialStation(stationId) {
    const { draftId } = this.props;
    const res = await Api.station.search(draftId, { ...searchParams, filter: { _id: stationId } }, pagination);
    this.setState({ initialStation: res.data.elements[0] })
  }

  handleOnChange(station) {
    const { onChange } = this.props;
    onChange(station);
  }

  async search(str) {
    if (!str || str.length < 2) {
      this.setState({ stations: [] })
      return;
    }
    const { draftId } = this.props;
    const res = await Api.station.search(draftId, { ...searchParams, filter: { name: str } }, pagination);
    this.setState({ stations: res.data.elements })
  }

  render() {
    const { stations, initialStation } = this.state;
    const { className } = this.props;
    return (
      <div className={`station-selector ${className}`}>
        <Select
          config={{ ...selectConfig, remote: true }}
          options={stations}
          dropdown={StationDropdown}
          selected={StationSelected}
          selectedElement={initialStation}
          onChange={this.handleOnChange}
          onInputChange={this.search}
        />
      </div>
    )
  }
}

export default StationSelector;