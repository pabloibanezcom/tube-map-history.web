import Api from 'http/admin';
import { put } from 'redux-saga/effects';
import {
  deleteConnectionFail,
  deleteConnectionSuccess,
  searchParamsChangeStart
} from 'store/admin/actions';
import { error, info } from 'util/notification';

export function* deleteConnectionSagaStart(action) {
  try {
    yield Api.connection.delete(action.connectionId);
    yield put(deleteConnectionSuccess());
    yield put(searchParamsChangeStart());
    info('Connection was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteConnectionFail(err));
  }
}
