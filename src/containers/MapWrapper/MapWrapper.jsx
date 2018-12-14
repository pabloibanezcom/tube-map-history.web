import React from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/UI/overlay/overlay';
import { initMap, restoreMapState, updateMap, zoomToPoint } from '../../map/map.google.service';
import * as actions from '../../store/actions/main';

const showMapAnimations = (process.env.REACT_APP_MAP_ANIMATIONS === 'true');

class MapWrapper extends React.Component {

  componentDidMount() {
    this.map = initMap('map-container');
  }

  showStation = (station) => {
    const mapState = showMapAnimations ? zoomToPoint(this.map, station.geometry.coordinates) : null;
    this.props.onStationSelected(station, mapState);
  }

  render() {
    if (!this.props.loading && this.map && this.props.stations && this.props.connections) {
      updateMap(this.map, this.props.stations, this.props.connections, this.props.year, this.props.previousYear, this.showStation);
    }
    if (process.env.REACT_APP_MAP_ANIMATIONS && !this.props.sideBarMode && this.props.mapState) {
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
    onStationSelected: (station) => dispatch(actions.getStationDetailsStart(station._id)),
    onClearMapState: () => dispatch(actions.setMapState(null))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);