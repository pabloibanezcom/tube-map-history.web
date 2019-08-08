import * as actions from "actions/admin";
import Api from 'http/api';
import { put } from "redux-saga/effects";
import { error, info } from 'shared/notification';

export function* addConnectionSagaStart(action) {
  try {
    const response = yield Api.connection.addConnection(action.connection);
    yield put(actions.addConnectionSuccess(response.data));
    yield put(actions.searchStationsStart());
    info(`Connection added successfully!`);
  } catch (err) {
    yield put(actions.addConnectionFail(err));
    error(`Connection could not be added!!`);
  }
}