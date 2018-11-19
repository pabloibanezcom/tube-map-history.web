import React from 'react';
import { initMap, updateMap } from '../../../map/map.google.service';
import Overlay from '../../UI/overlay/overlay';

class MapWrapper extends React.Component {

  componentDidMount() {
    this.map = initMap('map-container');
  }

  render() {
    if (!this.props.loading && this.map && this.props.stations && this.props.connections) {
      updateMap(this.map, this.props.stations, this.props.connections, this.props.year, this.props.previousYear);
    }
    return (
      <div>
        <Overlay show={this.props.overlay} />
        <div id="map-container"></div>
      </div>
    )
  }
}

export default MapWrapper;