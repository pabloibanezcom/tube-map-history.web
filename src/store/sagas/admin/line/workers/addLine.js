import { addLineFail, addLineSuccess, getDraftStart, searchLinesStart } from 'actions/admin';
import Api from 'http/api';
import { put, select } from 'redux-saga/effects';
import { error, info } from 'util/notification';

export function* addLineSagaStart(action) {
  try {
    const state = yield select();
    yield Api.line.add(state.admin.draft._id, { ...action.line, order: 99 });
    yield put(addLineSuccess());
    yield put(getDraftStart(state.admin.draft._id));
    yield put(searchLinesStart(state.admin.lineSearchParams, state.admin.linePagination));
    info('Line was created succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(addLineFail(err));
  }
}