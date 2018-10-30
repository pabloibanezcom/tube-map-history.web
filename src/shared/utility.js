export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const applyTypeToValue = (value, type) => {
  switch (type) {
    case 'string':
      return String(value);
    case 'number':
      return parseInt(value, 10);
    default:
      return value;
  }
}

export const transformDistance = (value) => {
  return value ? `${value.toLocaleString()} m` : '';
}