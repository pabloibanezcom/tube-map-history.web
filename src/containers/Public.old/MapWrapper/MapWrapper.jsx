// import * as actions from 'actions/main';
import { Overlay } from 'components/shared';
import { initMapTown, restoreMapState, updateMap, zoomToPoint } from 'map/map.google.service.old';
import React from 'react';
import { connect } from 'react-redux';

const showMapAnimations = process.env.REACT_APP_MAP_ANIMATIONS === 'true';

class MapWrapper extends React.Component {
  componentDidUpdate(prevProps) {
    const { connections, mode, previousYear, stations, town, year } = this.props;
    if (prevProps.town !== town) {
      this.map = initMapTown('map-container', town, mode);
      updateMap(this.map, town, mode, stations, connections, year, previousYear, this.showStation);
    }
  }

  showStation = station => {
    const { onStationSelected } = this.props;
    const mapState = showMapAnimations ? zoomToPoint(this.map, station.geometry.coordinates) : null;
    onStationSelected(station, mapState);
  };

  render() {
    const {
      connections,
      mapState,
      mode,
      loading,
      onClearMapState,
      previousYear,
      sideBarState,
      stations,
      town,
      year
    } = this.props;
    if (!loading && this.map && stations && connections) {
      updateMap(this.map, town, mode, stations, connections, year, previousYear, this.showStation);
    }
    if (process.env.REACT_APP_MAP_ANIMATIONS && !sideBarState.open && mapState) {
      restoreMapState(this.map, mapState);
      onClearMapState();
    }
    return (
      <div className="map-wrapper">
        <Overlay show={sideBarState.open} />
        <div id="map-container" className={mode} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    town: state.main.town,
    year: state.main.year,
    previousYear: state.main.previousYear,
    stations: state.main.stations,
    connections: state.main.connections,
    selectedStation: state.main.selectedStation,
    sideBarState: state.main.sideBarState,
    mapState: state.main.mapState
  };
};

const mapDispatchToProps = () => {
  return {
    onStationSelected: station => {
      console.log(station);
    },
    onClearMapState: () => {}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapWrapper);
