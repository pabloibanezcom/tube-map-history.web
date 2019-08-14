import * as actionTypes from "actions/admin/line/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { addLineSagaStart, deleteLineSagaStart, searchLinesSagaStart, updateLineSagaStart } from './workers';

export const lineSagas = [
  takeEvery(actionTypes.SEARCH_LINES_START, searchLinesSagaStart),
  takeEvery(actionTypes.ADD_LINE_START, addLineSagaStart),
  takeEvery(actionTypes.UPDATE_LINE_START, updateLineSagaStart),
  takeEvery(actionTypes.DELETE_LINE_START, deleteLineSagaStart)
];