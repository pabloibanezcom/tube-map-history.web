import { addDraftFail, addDraftSuccess } from 'actions/admin';
import { push } from 'connected-react-router';
import Api from 'http/api';
import { put } from 'redux-saga/effects';
import { error, info } from 'util/notification';

export function* addDraftSagaStart(action) {
  try {
    yield Api.draft.add(action.town, action.draft);
    yield put(addDraftSuccess());
    yield put(push('/admin'));
    info('Draft was created succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(addDraftFail(err));
  }
}