import { deleteDraftFail, deleteDraftSuccess, finishAction } from 'actions/admin';
import { push } from 'connected-react-router';
import Api from 'http/api';
import { put } from 'redux-saga/effects';
import { error, info } from 'util/notification';

export function* deleteDraftSagaStart(action) {
  try {
    yield Api.draft.delete(action.draftId);
    yield put(deleteDraftSuccess());
    yield put(finishAction());
    yield put(push('/admin'));
    info('Draft was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteDraftFail(err));
  }
}