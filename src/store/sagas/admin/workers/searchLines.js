import * as actions from "actions/admin";
import { put } from "redux-saga/effects";

export function* searchLinesSagaStart(action) {
  try {
    const response = null;
    yield put(actions.searchLinesSuccess(response.data));
  } catch (error) {
    yield put(actions.searchLinesFail(error));
  }
}