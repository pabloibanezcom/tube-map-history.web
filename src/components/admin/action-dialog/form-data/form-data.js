import * as addConnectionToStationFormData from './add-connection-to-station.json';
import * as addStationFormData from './add-station.json';
import * as deleteConfirmFormData from './delete-confirm.json';
import * as editStationFormData from './edit-station.json';
import * as uploadTownDataFormData from './upload-town-data.json';

const formData = {
  ADD_STATION: addStationFormData,
  EDIT_STATION: editStationFormData,
  DELETE_STATION: deleteConfirmFormData,
  ADD_CONNECTION_TO_STATION: addConnectionToStationFormData,
  DELETE_CONNECTION: deleteConfirmFormData,
  UPLOAD_TOWN_DATA: uploadTownDataFormData
};

export default formData;