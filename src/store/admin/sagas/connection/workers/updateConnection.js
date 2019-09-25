import Api from 'http/admin';
import { put } from 'redux-saga/effects';
import {
  searchParamsChangeStart,
  updateConnectionFail,
  updateConnectionSuccess
} from 'store/admin/actions';
import { info } from 'util/notification';

export function* updateConnectionSagaStart(action) {
  try {
    yield Api.connection.update(action.connection);
    yield put(updateConnectionSuccess());
    yield put(searchParamsChangeStart());
    info('Connection updated succesully');
  } catch (err) {
    yield put(updateConnectionFail(err));
  }
}
