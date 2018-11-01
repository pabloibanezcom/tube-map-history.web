export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const getDefaultValue = (type) => {
  switch (type) {
    case 'string':
      return '';
    case 'number':
      return 0;
    default:
      return null;
  }
}

export const applyTypeToValue = (value, type) => {
  if (value === null || value === undefined) {
    return value;
  }
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