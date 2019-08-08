import { initMap } from 'map/map.google.service';
import PropTypes from 'prop-types';
import React from 'react';

class MapCard extends React.Component {
  componentDidMount() {
    const { center, zoom } = this.props;
    initMap('map-container', center, zoom, 2019);
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`map-card ${className}`}>
        <div id="map-container" />
      </div>
    )
  }
}

MapCard.defaultProps = {
  zoom: 12,
  className: '',
};

MapCard.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number,
  className: PropTypes.string
};

export default MapCard;
