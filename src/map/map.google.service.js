
import styles from './styles/styles';
const mapConfig = require('./config/map.config.json');
const connectionConfig = require('./config/connection.config.json');
const gmaps = window.google ? window.google.maps : null;

export const initMap = (selector, town, mode) => {
  return new gmaps.Map(document.getElementById(selector),
    {
      ...mapConfig,
      center: {
        lat: town.center.coordinates[0],
        lng: town.center.coordinates[1]
      },
      zoom: town.zoom
    });
}

export const initMapForPlaceSearch = (selector, place, onGeometryChange) => {
  const map = new gmaps.Map(document.getElementById(selector),
    {
      center: place.geometry.location,
      zoom: 15
    });
  const marker = new gmaps.Marker({
    disableDefaultUI: true,
    fullscreenControl: false,
    position: place.geometry.location,
    map: map,
    icon: new gmaps.MarkerImage(require(`../assets/img/markers/default_station.png`)),
    title: place.name
  });
  map.addListener('click', function (event) {
    marker.setPosition(event.latLng);
    onGeometryChange(event.latLng);
  });
  map.markers = [marker];
  return (map);
}

export const updateMap = (map, town, mode, stations, connections, currentYear, previousYear, onStationClick) => {
  applyYearStyle(map, currentYear, mode);
  if (!previousYear) {
    addStations(map, town, stations, onStationClick, currentYear);
    addConnections(map, town, connections, currentYear);
    return;
  }
  if (currentYear < previousYear) {
    removeStations(map.stations, previousYear, currentYear);
    removeConnections(map.connections, previousYear, currentYear);
    return;
  }
  if (currentYear > previousYear) {
    addStations(map, town, stations, onStationClick, currentYear, previousYear);
    addConnections(map, town, connections, currentYear, previousYear);
    return;
  }
}

export const restoreMapState = (map, mapState) => {
  map.panTo(mapState.center);
  map.setZoom(mapState.zoom);
}

export const zoomToPoint = (map, point) => {
  const previousState = {
    center: map.getCenter(),
    zoom: map.getZoom()
  };
  map.panTo({ lat: point[1], lng: point[0] });
  map.setZoom(15);
  return previousState;
}

export const convertPointArrayToMapPoint = (coordinates) => {
  return new gmaps.LatLng(coordinates[1], coordinates[0]);
}

export const convertMapPointToPointArray = (point) => {
  return [point.lng(), point.lat()];
}

const addStations = (map, town, stations, onStationClick, yearTo = 2019, yearFrom = 1800) => {
  if (!map.stations) {
    map.stations = [];
  }
  map.stations = map.stations.concat(stations
    .filter(s => s.year > yearFrom && s.year <= yearTo)
    .map(s => {
      const marker = new gmaps.Marker({
        position: convertPointArrayToMapPoint(s.geometry.coordinates),
        data: {
          year: s.year
        },
        map: map,
        icon: getStationMarker(town, s),
        title: s.name
      });
      marker.addListener('click', () => { onStationClick(s) });
      return marker;
    }));
}

const addConnections = (map, town, connections, yearTo = 2019, yearFrom = 1800) => {
  if (!map.connections) {
    map.connections = [];
  }

  const groupedConnections = setConnectionNumber(connections
    .filter(c => c.year > yearFrom && c.year <= yearTo));

  const getStrokeRatio = (connectionNumber) => {
    switch (connectionNumber) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 4;
      default:
        return 1;
    }
  }

  map.connections = map.connections.concat(groupedConnections
    .map(c => {
      return new gmaps.Polyline({
        ...connectionConfig,
        data: {
          year: c.year
        },
        map: map,
        path: c.stations.map(s => convertPointArrayToMapPoint(s.geometry.coordinates)),
        strokeColor: c.line.colour,
        strokeWeight: connectionConfig.strokeWeight * getStrokeRatio(c.connectionNumber)
      })
    }));
}

const removeStations = (stationMarkers, yearTo = 2019, yearFrom = 1800) => {
  if (stationMarkers) {
    stationMarkers.filter(sm => sm.data.year > yearFrom && sm.data.year <= yearTo)
      .map(s => {
        return s.setMap(null);
      });
  }
}

const removeConnections = (connectionLines, yearTo = 2019, yearFrom = 1800) => {
  if (connectionLines) {
    connectionLines.filter(cl => cl.data.year > yearFrom && cl.data.year <= yearTo)
      .map(c => {
        return c.setMap(null);
      });
  }
}

const getStationMarker = (town, station) => {
  return new gmaps.MarkerImage(require(`../assets/img/markers/${town.name.toLowerCase()}/${station.markerIcon}.png`),
    new gmaps.Size(64, 64),
    new gmaps.Point(0, 0),
    new gmaps.Point(5, 5),
    new gmaps.Size(10, 10)
  );
}

const setConnectionNumber = (connections) => {

  const paths = {};

  return connections.map(c => {
    if (paths[`${c.stations[0].name}-${c.stations[1].name}`]) {
      // Exists already a path for it
      c.connectionNumber = paths[`${c.stations[0].name}-${c.stations[1].name}`] + 1;
    } else {
      c.connectionNumber = 1;
    }
    paths[`${c.stations[0].name}-${c.stations[1].name}`] = c.connectionNumber;
    return c;
  }).sort((a, b) => b.connectionNumber - a.connectionNumber);
}

const applyYearStyle = (map, year, mode) => {

  let setMapTypeId = null;
  const defaultStyle = mode === 'print' ? styles['default_style'].concat(styles['print']) : styles['default_style'];

  const getYearStyleForYear = (year) => {
    for (const key in styles) {
      if (key.split('_')[1] <= year && key.split('_')[2] >= year) {
        setMapTypeId = key;
        return new gmaps.StyledMapType(defaultStyle.concat(styles[key]), { name: key });
      }
    }
    return null;
  }

  const styledMapType = getYearStyleForYear(year);

  if (styledMapType) {
    map.mapTypes.set(setMapTypeId, styledMapType);
    map.setMapTypeId(setMapTypeId);
  }
}
