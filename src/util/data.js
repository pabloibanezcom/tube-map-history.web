export const getLinesFromStation = (station) => {
  const result = [];
  station.connections.forEach(c => {
    if (result.findIndex(l => l._id === c.line._id) === -1) {
      result.push(c.line);
    }
  });
  return result;
}

export const hasErrors = (errors) => {
  return Object.keys(errors).length > 0 && errors.constructor === Object;
}