export const getLinesFromStation = station => {
  const result = [];
  station.connections.forEach(c => {
    if (result.findIndex(l => l._id === c.line._id) === -1) {
      result.push(c.line);
    }
  });
  return result;
};

export const hasErrors = errors => {
  return Object.keys(errors).length > 0 && errors.constructor === Object;
};

export const filterStationsAndConnectionsByYear = (stations, year) => {
  return stations
    .filter(station => station.year <= year)
    .map(station => {
      return {
        ...station,
        connections: station.connections.filter(
          con => con.year <= year && (!con.yearEnd || con.yearEnd > year)
        )
      };
    });
};

export const getStationMarkerColor = station => {
  const colors = station.connections.reduce((_colors, con) => {
    return _colors.includes(con.line.colour) ? _colors : [..._colors, con.line.colour];
  }, []);
  return colors.length === 1 ? colors[0] : '#ffffff';
};
