import * as actionTypes from "actions/main/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { changeYearSagaStart, getCountriesSagaStart, getLineDetailsSagaStart, getStationDetailsSagaStart, loadInitSagaStart } from './workers';

export const mainSagas = [
  takeEvery(actionTypes.GET_COUNTRIES_START, getCountriesSagaStart),
  takeEvery(actionTypes.LOAD_INIT_START, loadInitSagaStart),
  takeEvery(actionTypes.CHANGE_YEAR_START, changeYearSagaStart),
  takeEvery(actionTypes.GET_LINE_DETAILS_START, getLineDetailsSagaStart),
  takeEvery(actionTypes.GET_STATION_DETAILS_START, getStationDetailsSagaStart)
];

