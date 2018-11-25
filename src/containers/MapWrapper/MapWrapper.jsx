import React from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/UI/overlay/overlay';
import { initMap, restoreMapState, updateMap, zoomToPoint } from '../../map/map.google.service';
import * as actions from '../../store/actions/main';

class MapWrapper extends React.Component {

  componentDidMount() {
    this.map = initMap('map-container');
  }

  showStation = (station) => {
    this.props.onStationSelected(station, zoomToPoint(this.map, station.geometry.coordinates));
  }

  render() {
    if (!this.props.loading && this.map && this.props.stations && this.props.connections) {
      updateMap(this.map, this.props.stations, this.props.connections, this.props.year, this.props.previousYear, this.showStation);
    }
    if (!this.props.sideBarMode && this.props.mapState) {
      restoreMapState(this.map, this.props.mapState);
      this.props.onClearMapState();
    }
    return (
      <div>
        <Overlay show={this.props.sideBarMode} />
        <div id="map-container"></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    year: state.main.year,
    previousYear: state.main.previousYear,
    stations: state.main.stations,
    connections: state.main.connections,
    selectedStation: state.main.selectedStation,
    sideBarMode: state.main.sideBarMode,
    mapState: state.main.mapState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStationSelected: (station, mapState) => dispatch(actions.setSelectedStation(station, mapState)),
    onClearMapState: () => dispatch(actions.setMapState(null))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);