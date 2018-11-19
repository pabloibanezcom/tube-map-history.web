const gmaps = window.google.maps;
const mapConfig = require('./config/map.config.json');
const connectionConfig = require('./config/connection.config.json');

export const initMap = (selector) => {
  return new gmaps.Map(document.getElementById(selector), mapConfig);
}

export const updateMap = (map, stations, connections, currentYear, previousYear) => {
  if (!previousYear) {
    addStations(map, stations, currentYear);
    addConnections(map, connections, currentYear);
    return;
  }
  if (currentYear < previousYear) {
    removeStations(map.stations, previousYear, currentYear);
    removeConnections(map.connections, previousYear, currentYear);
    return;
  }
  if (currentYear > previousYear) {
    addStations(map, stations, currentYear, previousYear);
    addConnections(map, connections, currentYear, previousYear);
    return;
  }
}

const addStations = (map, stations, yearTo = 2018, yearFrom = 1800) => {
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
        icon: getStationMarker(s),
        title: s.name
      });
      marker.addListener('click', () => { alert(`${s.name} - ${s.year}`); });
      return marker;
    }));
}

const addConnections = (map, connections, yearTo = 2018, yearFrom = 1800) => {
  if (!map.connections) {
    map.connections = [];
  }
  map.connections = map.connections.concat(connections
    .filter(c => c.year > yearFrom && c.year <= yearTo)
    .map(c => {
      return new gmaps.Polyline({
        ...connectionConfig,
        data: {
          year: c.year
        },
        map: map,
        path: c.stations.map(s => convertPointArrayToMapPoint(s.geometry.coordinates)),
        strokeColor: c.line.colour
      })
    }));
}

const removeStations = (stationMarkers, yearTo = 2018, yearFrom = 1800) => {
  if (stationMarkers) {
    stationMarkers.filter(sm => sm.data.year > yearFrom && sm.data.year <= yearTo)
      .map(s => {
        return s.setMap(null);
      });
  }
}

const removeConnections = (connectionLines, yearTo = 2018, yearFrom = 1800) => {
  if (connectionLines) {
    connectionLines.filter(cl => cl.data.year > yearFrom && cl.data.year <= yearTo)
      .map(c => {
        return c.setMap(null);
      });
  }
}

const convertPointArrayToMapPoint = (coordinates) => {
  return new gmaps.LatLng(coordinates[1], coordinates[0]);
}

const getStationMarker = (station) => {
  return new gmaps.MarkerImage(require(`../assets/img/markers/${station.markerIcon}.png`),
    new gmaps.Size(64, 64),
    new gmaps.Point(0, 0),
    new gmaps.Point(5, 5),
    new gmaps.Size(10, 10)
  );
}