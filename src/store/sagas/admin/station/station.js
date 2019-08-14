import * as actionTypes from "actions/admin/station/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { addStationSagaStart, deleteStationSagaStart, searchStationsSagaStart, updateStationSagaStart } from './workers';

export const stationSagas = [
  takeEvery(actionTypes.SEARCH_STATIONS_START, searchStationsSagaStart),
  takeEvery(actionTypes.ADD_STATION_START, addStationSagaStart),
  takeEvery(actionTypes.UPDATE_STATION_START, updateStationSagaStart),
  takeEvery(actionTypes.DELETE_STATION_START, deleteStationSagaStart)
];