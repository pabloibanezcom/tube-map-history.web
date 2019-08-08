import { getOwnUserFail, getOwnUserSuccess } from 'actions/admin';
import Api from 'http/api';
import { put } from 'redux-saga/effects';

export function* getOwnUserSagaStart() {
  try {
    const response = yield Api.user.getOwn();
    yield put(getOwnUserSuccess(response.data));
  } catch (err) {
    yield put(getOwnUserFail(err));
  }
}