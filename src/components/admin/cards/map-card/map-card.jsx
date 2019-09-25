import { initMap } from 'map/map.google.service';
import PropTypes from 'prop-types';
import React from 'react';

class MapCard extends React.Component {
  componentDidMount() {
    const { center, zoom, marker, disableMap } = this.props;
    if (!disableMap) {
      initMap('map-container', center, zoom, 2019, marker);
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`map-card ${className}`}>
        <div id="map-container" />
      </div>
    );
  }
}

MapCard.defaultProps = {
  zoom: 12,
  marker: null,
  className: '',
  disableMap: false
};

MapCard.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number,
  marker: PropTypes.string,
  className: PropTypes.string,
  disableMap: PropTypes.bool
};

export default MapCard;
