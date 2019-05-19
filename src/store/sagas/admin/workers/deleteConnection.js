import * as actions from "actions/admin";
import Api from 'http/api';
import { put } from "redux-saga/effects";
import { error, info } from 'shared/notification';

export function* deleteConnectionSagaStart(action) {
  try {
    const response = yield Api.connection.removeConnection(action.connection);
    yield put(actions.deleteConnectionSuccess(response.data));
    yield put(actions.searchStationsStart());
    info(`Connection deleted successfully!`);
  } catch (err) {
    yield put(actions.deleteConnectionFail(err));
    error(`Connection could not be deleted!!`);
  }
}