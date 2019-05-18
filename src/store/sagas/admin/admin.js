import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../../actions/admin/actionTypes";
import { addConnectionSagaStart, addStationSagaStart, deleteConnectionSagaStart, getTownSagaStart, getTownsSagaStart, getUserSagaStart, loadStationsPanelSagaStart, searchLinesSagaStart, searchStationsSagaStart, updateStationSagaStart, uploadTownDataSagaStart } from './workers';

export const adminSagas = [
  takeEvery(actionTypes.GET_USER_START, getUserSagaStart),
  takeEvery(actionTypes.GET_TOWNS_START, getTownsSagaStart),
  takeEvery(actionTypes.GET_TOWN_START, getTownSagaStart),
  takeEvery(actionTypes.LOAD_STATIONS_PANEL_START, loadStationsPanelSagaStart),
  takeEvery(actionTypes.ADD_STATION_START, addStationSagaStart),
  takeEvery(actionTypes.ADD_CONNECTION_START, addConnectionSagaStart),
  takeEvery(actionTypes.DELETE_CONNECTION_START, deleteConnectionSagaStart),
  takeEvery(actionTypes.UPDATE_STATION_START, updateStationSagaStart),
  takeEvery(actionTypes.SEARCH_STATIONS_START, searchStationsSagaStart),
  takeEvery(actionTypes.SEARCH_LINES_START, searchLinesSagaStart),
  takeEvery(actionTypes.UPLOAD_TOWN_DATA_START, uploadTownDataSagaStart)
];
