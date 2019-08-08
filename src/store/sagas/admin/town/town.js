import * as actionTypes from "actions/admin/town/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { getTownsSagaStart } from './workers';

export const townSagas = [
  takeEvery(actionTypes.GET_TOWNS_START, getTownsSagaStart)
];