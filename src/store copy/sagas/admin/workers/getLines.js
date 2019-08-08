import * as actions from "actions/admin";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* getLinesSagaStart(action) {
  try {
    const response = yield Api.line.getLines(action.town);
    yield put(actions.getLinesSuccess(response.data));
  } catch (err) {
    yield put(actions.getLinesFail(err));
  }
}