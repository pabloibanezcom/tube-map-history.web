import { getTownsFail, getTownsSuccess } from 'actions/admin';
import Api from 'http/api';
import { put } from 'redux-saga/effects';

export function* getTownsSagaStart() {
  try {
    const response = yield Api.town.getAll();
    yield put(getTownsSuccess(response.data));
  } catch (err) {
    yield put(getTownsFail(err));
  }
}