import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../../actions/main/actionTypes";
import { changeYearSagaStart, getStationDetailsSagaStart, loadInitSagaStart, loadLineDetailsSagaStart } from './workers';

export const mainSagas = [
  takeEvery(actionTypes.LOAD_INIT_START, loadInitSagaStart),
  takeEvery(actionTypes.CHANGE_YEAR_START, changeYearSagaStart),
  takeEvery(actionTypes.LOAD_LINE_DETAILS_START, loadLineDetailsSagaStart),
  takeEvery(actionTypes.GET_STATION_DETAILS_START, getStationDetailsSagaStart)
];

