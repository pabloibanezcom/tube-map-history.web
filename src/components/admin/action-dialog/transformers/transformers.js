const addStationFromForm = (formData) => {
  return { ...formData };
}

const editStationFromForm = (formData, element) => {
  return { _id: element._id, ...formData };
}

const uploadTownDataFromForm = (formData) => {
  return formData.file;
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
    ADD_STATION: null,
    EDIT_STATION: null,
    ADD_CONNECTION_TO_STATION: addConnectionToStationToForm,
    UPLOAD_TOWN_DATA: null
  },
  fromForm: {
    ADD_STATION: addStationFromForm,
    EDIT_STATION: editStationFromForm,
    ADD_CONNECTION_TO_STATION: addConnectionToStationFromForm,
    UPLOAD_TOWN_DATA: uploadTownDataFromForm
  }
};

export default transformers;