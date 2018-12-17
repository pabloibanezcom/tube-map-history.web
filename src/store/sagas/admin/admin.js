import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../../actions/admin/actionTypes";
import { addConnectionSagaStart, deleteConnectionSagaStart, editStationSagaStart, searchLinesSagaStart, searchStationsSagaStart } from './workers';

export const adminSagas = [
  takeEvery(actionTypes.ADD_CONNECTION_START, addConnectionSagaStart),
  takeEvery(actionTypes.DELETE_CONNECTION_START, deleteConnectionSagaStart),
  takeEvery(actionTypes.EDIT_STATION_START, editStationSagaStart),
  takeEvery(actionTypes.SEARCH_STATIONS_START, searchStationsSagaStart),
  takeEvery(actionTypes.SEARCH_LINES_START, searchLinesSagaStart)
];
