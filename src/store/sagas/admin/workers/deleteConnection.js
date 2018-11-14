import { put } from "redux-saga/effects";
import { deleteConnection } from "../../../../http/admin";
import { error, info } from '../../../../shared/notification';
import * as actions from "../../../actions/admin";

export function* deleteConnectionSagaStart(action) {
  try {
    const response = yield deleteConnection(action.connection);
    yield put(actions.deleteConnectionSuccess(response.data));
    yield put(actions.searchStationsStart());
    info(`Connection deleted successfully!`);
  } catch (err) {
    yield put(actions.deleteConnectionFail(err));
    error(`Connection could not be deleted!!`);
  }
}