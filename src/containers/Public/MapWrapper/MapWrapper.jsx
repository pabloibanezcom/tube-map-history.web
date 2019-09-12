// import * as actions from 'actions/main';
import { Overlay } from 'components/shared';
import { addStations, initMap } from 'map/map.google.service';
import React from 'react';
import { connect } from 'react-redux';
import { filterStationsAndConnectionsByYear } from 'util/data';

class MapWrapper extends React.Component {

  componentDidUpdate(prevProps) {
    const { year, town, stations, } = this.props;
    if (prevProps.town !== town) {
      this.map = initMap('map-container', town.center, town.zoom, year);
    }

    if (prevProps.year !== year) {
      addStations(this.map, filterStationsAndConnectionsByYear(stations, year));
    }
  }

  render() {
    const { mode } = this.props;
    return (
      <div className="map-wrapper">
        <Overlay show={false} />
        <div id="map-container" className={mode} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    town: state.public.town,
    year: state.public.year,
    stations: state.public.stations,
    connections: state.public.connections
  };
};

const mapDispatchToProps = () => {
  return {
    onClearMapState: () => { }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);