import { convertMapPointToPointArray, convertPointArrayToMapPoint, initMapForPlaceSearch, searchPlace } from 'map';
import React from 'react';
import Select from '../select/select';

class PlaceSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStr: '',
      predictions: [],
      selectedPlace: null,
      value: this.props.value
    };
  }

  selectConfig = {
    label: 'Location',
    placeholder: 'Type a station name...',
    options: {
      key: '_id',
      label: 'name'
    },
    enableSearch: true,
    remote: true,
    custom: {
      selected: 'SelectedPlaceSuggestion',
      dropdown: 'DropdownPlaceSuggestion'
    }
  };

  componentDidMount() {
    if (this.state.value) {
      initMapForPlaceSearch('place-search-map-container', this.generatePlaceFromState(), this.handleOnGeometryChange);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedPlace !== prevState.selectedPlace) {
      initMapForPlaceSearch('place-search-map-container', this.state.selectedPlace, this.handleOnGeometryChange);
    }
  }

  handleOnInputChange = (str) => {
    this.setState({ currentStr: str });
    if (str.length >= 3) {
      searchPlace(str)
        .then(predictions => {
          this.setState({ predictions: predictions });
        })
        .catch(err => err !== 'ZERO_RESULTS' ? console.log(err) : null);
    }
  }

  handleOnChange = (place) => {
    const geometry = this.getGeometryFromLocation(place.geometry.location);
    this.setState({ selectedPlace: place, value: geometry });
    this.props.onChange(geometry);
  }

  handleOnGeometryChange = (location) => {
    const geometry = this.getGeometryFromLocation(location)
    this.setState({ value: geometry });
    this.props.onChange(geometry);
  }

  getGeometryFromLocation = (location) => {
    return { type: 'Point', coordinates: convertMapPointToPointArray(location) };
  }

  generatePlaceFromState = () => {
    return {
      geometry: {
        location: convertPointArrayToMapPoint(this.state.value.coordinates)
      }
    };
  }

  render() {
    return <div className="place-search">
      <Select config={{ ...this.selectConfig }} options={this.state.predictions} onInputChange={this.handleOnInputChange} onChange={this.handleOnChange} />
      {this.state.value ? <div id="place-search-map-container"></div> : null}
    </div>
  }
}

export default PlaceSearch;