import { put } from "redux-saga/effects";
import { addConnection } from "../../../../http/admin";
import * as actions from "../../../actions/admin";

export function* addConnectionSagaStart(action) {
  try {
    const response = yield addConnection(action.connection);
    yield put(actions.addConnectionSuccess(response.data));
  } catch (error) {
    yield put(actions.addConnectionFail(error));
  }
}