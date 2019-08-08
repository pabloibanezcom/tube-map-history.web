import { getDraftFail, getDraftSuccess } from 'actions/admin';
import Api from 'http/api';
import { put } from 'redux-saga/effects';

export function* getDraftSagaStart(action) {
  try {
    const response = yield Api.draft.get(action.draftId);
    yield put(getDraftSuccess(response.data));
  } catch (err) {
    yield put(getDraftFail(err));
  }
}