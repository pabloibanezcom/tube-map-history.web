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

export const groupBy = (arr, groupProperty, itemsProperty, sort) => {
  if (!itemsProperty) {
    // Object result
    return arr.reduce((rv, x) => {
      (rv[x[groupProperty]] = rv[x[groupProperty]] || []).push(x);
      return rv;
    }, {});
  } else {
    // Array result
    const result = [];
    arr.map(e => {
      const resultElement = result.find(rE => rE[groupProperty] === e[groupProperty]);
      if (resultElement) {
        resultElement[itemsProperty].push(e);
      } else {
        result.push({ [groupProperty]: e[groupProperty], [itemsProperty]: [e] });
      }
      return null;
    });
    return sort ? result.sort((a, b) => a[groupProperty] - b[groupProperty]) : result;
  }

}