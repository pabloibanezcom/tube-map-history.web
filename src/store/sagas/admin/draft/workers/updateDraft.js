import { finishAction, getDraftStart, updateDraftFail, updateDraftSuccess } from 'actions/admin';
import Api from 'http/api';
import { put } from 'redux-saga/effects';
import { info } from 'util/notification';

export function* updateDraftSagaStart(action) {
  try {
    yield Api.draft.update(action.draft);
    yield put(updateDraftSuccess());
    yield put(finishAction());
    yield put(getDraftStart(action.draft._id));
    info('Draft updated succesully');
  } catch (err) {
    yield put(updateDraftFail(err));
  }
}