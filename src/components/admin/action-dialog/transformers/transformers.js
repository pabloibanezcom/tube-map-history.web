
const editStationFromForm = (formData, element, otherData) => {
  return { _id: element._id, ...formData };
}

const addConnectionToStationToForm = (element, otherData) => {
  return {
    ...element,
    stationFrom: otherData.stationFrom.name
  };
}

const addConnectionToStationFromForm = (formData, element, otherData) => {
  return {
    year: formData.year,
    yearEnd: null,
    line: formData.line,
    stations: [otherData.stationFrom._id, formData.stationTo]
  };
}

const transformers = {
  toForm: {
    EDIT_STATION: null,
    ADD_CONNECTION_TO_STATION: addConnectionToStationToForm
  },
  fromForm: {
    EDIT_STATION: editStationFromForm,
    ADD_CONNECTION_TO_STATION: addConnectionToStationFromForm
  }
};

export default transformers;