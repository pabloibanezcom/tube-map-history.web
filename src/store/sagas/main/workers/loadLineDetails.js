import { put } from "redux-saga/effects";
import { loadLine } from "../../../../http/main";
import * as actions from "../../../actions/main";

export function* loadLineDetailsSagaStart(action) {
  if (action.lineId) {
    try {
      const response = yield loadLine(action.lineId);
      yield put(actions.loadLineDetailsSuccess(response.data));
    } catch (error) {
      yield put(actions.loadLineDetailsFail(error));
    }
  } else {
    yield put(actions.loadLineDetailsSuccess(null));
  }
}