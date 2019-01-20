import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../../actions/admin/actionTypes";
import { addConnectionSagaStart, addStationSagaStart, deleteConnectionSagaStart, loadStationsPanelSagaStart, loadTownDataSagaStart, searchLinesSagaStart, searchStationsSagaStart, updateStationSagaStart } from './workers';

export const adminSagas = [
  takeEvery(actionTypes.LOAD_TOWN_DATA_START, loadTownDataSagaStart),
  takeEvery(actionTypes.LOAD_STATIONS_PANEL_START, loadStationsPanelSagaStart),
  takeEvery(actionTypes.ADD_STATION_START, addStationSagaStart),
  takeEvery(actionTypes.ADD_CONNECTION_START, addConnectionSagaStart),
  takeEvery(actionTypes.DELETE_CONNECTION_START, deleteConnectionSagaStart),
  takeEvery(actionTypes.UPDATE_STATION_START, updateStationSagaStart),
  takeEvery(actionTypes.SEARCH_STATIONS_START, searchStationsSagaStart),
  takeEvery(actionTypes.SEARCH_LINES_START, searchLinesSagaStart)
];
