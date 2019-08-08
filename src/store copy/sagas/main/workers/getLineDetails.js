import * as actions from "actions/main";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* getLineDetailsSagaStart(action) {
  if (action.lineId) {
    try {
      const response = yield Api.line.getFullInfoLine(action.lineId);
      yield put(actions.getLineDetailsSuccess(response.data));
    } catch (error) {
      yield put(actions.getLineDetailsFail(error));
    }
  } else {
    yield put(actions.getLineDetailsSuccess(null));
  }
}