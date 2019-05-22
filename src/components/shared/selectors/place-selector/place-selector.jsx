import { convertMapPointToPointArray, convertPointArrayToMapPoint, initMapForPlaceSearch, searchPlace } from 'map';
import React from 'react';
import Select from '../select/select';
import PlaceDropdown from './place-dropdown/place-dropdown';
import PlaceSelected from './place-selected/place-selected';
import * as selectConfig from './place-selector.config.json';

class PlaceSelector extends React.Component {

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      predictions: [],
      selectedPlace: null,
      value
    };
  }

  componentDidMount() {
    const { value } = this.state;
    if (value) {
      initMapForPlaceSearch('place-search-map-container', this.generatePlaceFromState(), this.handleOnGeometryChange);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedPlace } = this.state;
    if (selectedPlace !== prevState.selectedPlace) {
      initMapForPlaceSearch('place-search-map-container', selectedPlace, this.handleOnGeometryChange);
    }
  }

  handleOnInputChange = (str) => {
    if (str.length >= 3) {
      searchPlace(str)
        .then(predictions => {
          this.setState({ predictions });
        })
        .catch(err => err !== 'ZERO_RESULTS' ? console.log(err) : null);
    }
  }

  handleOnChange = (place) => {
    const { onChange } = this.props;
    const geometry = this.getGeometryFromLocation(place.geometry.location);
    this.setState({ selectedPlace: place, value: geometry });
    onChange(geometry);
  }

  handleOnGeometryChange = (location) => {
    const { onChange } = this.props;
    const geometry = this.getGeometryFromLocation(location)
    this.setState({ value: geometry });
    onChange(geometry);
  }

  getGeometryFromLocation = (location) => {
    return { type: 'Point', coordinates: convertMapPointToPointArray(location) };
  }

  generatePlaceFromState = () => {
    const { value } = this.state;
    return {
      geometry: {
        location: convertPointArrayToMapPoint(value.coordinates)
      }
    };
  }

  render() {
    const { predictions, value } = this.state;
    return (
      <div className="place-search">
        <Select
          config={{ ...selectConfig }}
          options={predictions}
          dropdown={PlaceDropdown}
          selected={PlaceSelected}
          onInputChange={this.handleOnInputChange}
          onChange={this.handleOnChange}
        />
        {value ? <div id="place-search-map-container" /> : null}
      </div>
    )
  }
}

export default PlaceSelector;