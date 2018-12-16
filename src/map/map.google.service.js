const gmaps = window.google.maps;
const mapConfig = require('./config/map.config.json');
const connectionConfig = require('./config/connection.config.json');

export const initMap = (selector, town) => {
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

export const updateMap = (map, town, stations, connections, currentYear, previousYear, onStationClick) => {
  debugger
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

const addStations = (map, town, stations, onStationClick, yearTo = 2018, yearFrom = 1800) => {
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

const addConnections = (map, town, connections, yearTo = 2018, yearFrom = 1800) => {
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

const getStationMarker = (town, station) => {
  return new gmaps.MarkerImage(require(`../assets/img/markers/${town.name.toLowerCase()}/${station.markerIcon}.png`),
    new gmaps.Size(64, 64),
    new gmaps.Point(0, 0),
    new gmaps.Point(5, 5),
    new gmaps.Size(10, 10)
  );
}