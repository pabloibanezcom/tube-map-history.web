import { searchLinesFail, searchLinesSuccess } from 'actions/admin';
import Api from 'http/api';
import { put, select } from 'redux-saga/effects';
import { error } from 'util/notification';

export function* searchLinesSagaStart(action) {
  try {
    const state = yield select();
    const response = yield Api.line.search(state.admin.draft._id, action.searchParams, action.pagination);
    yield put(searchLinesSuccess(response.data));
  } catch (err) {
    error('Something went wrong!');
    yield put(searchLinesFail(err));
  }
}