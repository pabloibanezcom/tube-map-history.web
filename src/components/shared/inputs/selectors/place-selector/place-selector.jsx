import { Button } from 'components/shared';
import { convertMapPointToPointArray, convertPointArrayToMapPoint, initMapForPlaceSearch, searchPlace } from 'map';
import React from 'react';
import Select from '../select/select';
import PlaceDropdown from './place-dropdown/place-dropdown';
import PlaceSelected from './place-selected/place-selected';
import selectConfig from './place-selector.config.json';

class PlaceSelector extends React.Component {

  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      predictions: [],
      selectedPlace: null,
      mapHidden: !!defaultValue,
      value: defaultValue
    };
    this.toggleMap = this.toggleMap.bind(this);
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

  toggleMap() {
    this.setState((prevState) => {
      return { mapHidden: !prevState.mapHidden };
    })
  }

  render() {
    const { predictions, value, mapHidden } = this.state;
    const { defaultName } = this.props;
    return (
      <div className="place-search">
        <Select
          config={{ ...selectConfig }}
          options={predictions}
          dropdown={PlaceDropdown}
          selected={PlaceSelected}
          onInputChange={this.handleOnInputChange}
          onChange={this.handleOnChange}
          value={defaultName}
        />
        {value ? (
          <React.Fragment>
            <div id="place-search-map-container" className={mapHidden ? 'map-hidden' : ''} />
            <div className="flex flex-horizontal-end">
              <Button
                type="link"
                text={mapHidden ? 'Show map' : 'Hide map'}
                color="secondary"
                onClick={this.toggleMap}
              />
            </div>

          </React.Fragment>
        ) : null}
      </div>
    )
  }
}

export default PlaceSelector;