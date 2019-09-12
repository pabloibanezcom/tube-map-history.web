import Api from 'http/admin';
import { put } from 'redux-saga/effects';
import { getDraftFail, getDraftSuccess } from 'store/admin/actions';

export function* getDraftSagaStart(action) {
  try {
    const response = yield Api.draft.get(action.draftId);
    yield put(getDraftSuccess(response.data));
  } catch (err) {
    yield put(getDraftFail(err));
  }
}