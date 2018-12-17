import { put } from "redux-saga/effects";
import { getLine } from "../../../../http/main";
import * as actions from "../../../actions/main";

export function* getLineDetailsSagaStart(action) {
  if (action.lineId) {
    try {
      const response = yield getLine(action.lineId);
      yield put(actions.getLineDetailsSuccess(response.data));
    } catch (error) {
      yield put(actions.getLineDetailsFail(error));
    }
  } else {
    yield put(actions.getLineDetailsSuccess(null));
  }
}