

import { getStationMarkerColor } from 'util/data';
import styles from './styles/styles';

const mapConfig = require('./config/map.config.json');
const connectionConfig = require('./config/connection.config.json');

export const initMap = (selector, center, zoom, year, marker) => {
  const centerMap = {
    lat: center.coordinates[1],
    lng: center.coordinates[0]
  };
  const map = new window.google.maps.Map(document.getElementById(selector),
    {
      ...mapConfig,
      center: centerMap,
      zoom
    });

  if (year) {
    applyYearStyle(map, year);
  }
  if (marker) {
    // eslint-disable-next-line no-new
    new window.google.maps.Marker({
      position: centerMap,
      map,
      icon: new window.google.maps.MarkerImage(require(`assets/img/towns/stockholm_logo_24.png`)),
    });
  }

  map.stations = [];
  map.connections = [];

  return map;
}

export const initMapForPlaceSearch = (selector, place, onGeometryChange) => {
  const map = new window.google.maps.Map(document.getElementById(selector),
    {
      center: place.geometry.location,
      zoom: 15
    });
  const marker = new window.google.maps.Marker({
    disableDefaultUI: false,
    position: place.geometry.location,
    map,
    icon: new window.google.maps.MarkerImage(require(`assets/img/markers/default_station.png`)),
    title: place.name
  });
  map.addListener('click', (event) => {
    marker.setPosition(event.latLng);
    onGeometryChange(event.latLng);
  });
  map.markers = [marker];
  return (map);
}

export const addStations = (map, stations) => {
  const bounds = new window.google.maps.LatLngBounds();
  let counter = 0;

  map.stations = stations.map(station => {
    const marker = new window.google.maps.Marker({
      position: convertPointArrayToMapPoint(station.geometry.coordinates),
      data: {
        year: station.year
      },
      map,
      icon: pinSymbol(getStationMarkerColor(station)),
      title: station.name
    });

    station.connections.map(con => {

      const samePathConnections = map.connections.filter(c => c.data.name === `${con.stations[0]._id}-${con.stations[1]._id}`);

      if (samePathConnections.find(c => c.data.colour === con.line.colour)) {
        return null;
      }

      // eslint-disable-next-line no-new
      map.connections.push(new window.google.maps.Polyline({
        ...connectionConfig,
        map,
        data: {
          name: `${con.stations[0]._id}-${con.stations[1]._id}`,
          year: con.year,
          colour: con.line.colour
        },
        path: con.stations.map(s => convertPointArrayToMapPoint(s.geometry.coordinates)),
        strokeColor: con.line.colour,
        strokeWeight: connectionConfig.strokeWeight * getStrokeRatio(samePathConnections.length),
        zIndex: 1000 - counter
      }));

      // eslint-disable-next-line no-plusplus
      counter++;

      return null;

    });

    bounds.extend(marker.getPosition());
    return marker;
  })

  map.fitBounds(bounds);
}

const applyYearStyle = (map, year, mode) => {

  let setMapTypeId = null;
  const defaultStyle = mode === 'print' ? styles.defaultStyle.concat(styles.print) : styles.defaultStyle;

  const getYearStyleForYear = (_year) => {
    let style;
    Object.keys(styles).forEach(key => {
      if (key.split('_')[1] <= year && key.split('_')[2] >= _year) {
        setMapTypeId = key;
        style = new window.google.maps.StyledMapType(defaultStyle.concat(styles[key]), { name: key });
      }
    });
    return style;
  }

  const styledMapType = getYearStyleForYear(year);

  if (styledMapType) {
    map.mapTypes.set(setMapTypeId, styledMapType);
    map.setMapTypeId(setMapTypeId);
  }
}

const convertPointArrayToMapPoint = (coordinates) => {
  return new window.google.maps.LatLng(coordinates[1], coordinates[0]);
}

const pinSymbol = (color) => {
  return {
    path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
    fillColor: color,
    fillOpacity: 1,
    strokeColor: '#000',
    strokeWeight: 1,
    scale: 0.25,
  };
}

const getStrokeRatio = (connectionNumber) => {
  switch (connectionNumber) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 4;
    default:
      return 1;
  }
}
