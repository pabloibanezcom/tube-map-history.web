import { searchLinesStart, updateLineFail, updateLineSuccess } from 'actions/admin';
import Api from 'http/api';
import { put, select } from 'redux-saga/effects';
import { info } from 'util/notification';

export function* updateLineSagaStart(action) {
  try {
    const state = yield select();
    yield Api.line.update(action.line);
    yield put(updateLineSuccess());
    yield put(searchLinesStart(state.admin.lineSearchParams, state.admin.linePagination));
    info('Line updated succesully');
  } catch (err) {
    yield put(updateLineFail(err));
  }
}