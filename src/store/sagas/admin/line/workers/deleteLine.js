import { deleteLineFail, deleteLineSuccess, searchLinesStart } from 'actions/admin';
import Api from 'http/api';
import { put, select } from 'redux-saga/effects';
import { error, info } from 'util/notification';

export function* deleteLineSagaStart(action) {
  try {
    const state = yield select();
    yield Api.line.delete(action.lineId);
    yield put(deleteLineSuccess());
    yield put(searchLinesStart(state.admin.lineSearchParams, state.admin.linePagination));
    info('Line was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteLineFail(err));
  }
}