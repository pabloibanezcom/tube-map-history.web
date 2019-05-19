const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export const initMap = (selector) => {
  const map = new mapboxgl.Map({
    container: selector,
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-0.1371599, 51.5099695],
    zoom: 12
  });

  return map;
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

const addStations = (map, stations, yearTo = 2019, yearFrom = 1800) => {
  if (!map.stations) {
    map.stations = [];
  }
  map.stations = map.stations.concat(stations
    .filter(s => s.year > yearFrom && s.year <= yearTo)
    .map(s => {
      const el = document.createElement('i');
      el.className = 'zmdi zmdi-circle';
      el.style.color = s.markerColor;
      const marker = new mapboxgl.Marker(el)
        .setLngLat(convertPointArrayToMapPoint(s.geometry.coordinates))
        .addTo(map);

      return marker;
    }));
}

const addConnections = (map, connections, yearTo = 2019, yearFrom = 1800) => {
  if (!map.connections) {
    map.connections = [];
  }
  map.connections = map.connections.concat(connections
    .filter(c => c.year > yearFrom && c.year <= yearTo)
    .map(c => {
      const coordinates = c.stations.map(s => s.geometry.coordinates);
      return map.addLayer({
        "id": c._id,
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": coordinates
            }
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": c.line.colour,
          "line-width": 4
        }
      });
    }));
}

const removeStations = (stationMarkers, yearTo = 2019, yearFrom = 1800) => {
  // if (stationMarkers) {
  //   stationMarkers.filter(sm => sm.data.year > yearFrom && sm.data.year <= yearTo)
  //     .map(s => {
  //       return s.setMap(null);
  //     });
  // }
}

const removeConnections = (connectionLines, yearTo = 2019, yearFrom = 1800) => {
  // if (connectionLines) {
  //   connectionLines.filter(cl => cl.data.year > yearFrom && cl.data.year <= yearTo)
  //     .map(c => {
  //       return c.setMap(null);
  //     });
  // }
}

const convertPointArrayToMapPoint = (coordinates) => {
  return new mapboxgl.LngLat(coordinates[0], coordinates[1]);
}

const getStationMarker = (station) => {
  // return new gmaps.MarkerImage(require(`assets/img/markers/${station.markerIcon}.png`),
  //   new gmaps.Size(64, 64),
  //   new gmaps.Point(0, 0),
  //   new gmaps.Point(5, 5),
  //   new gmaps.Size(10, 10)
  // );
}

