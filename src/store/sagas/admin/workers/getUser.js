import * as actions from "actions/admin";
import { push } from 'connected-react-router';
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* getUserSagaStart() {
  try {
    const response = yield Api.user.getUserInfo();
    yield put(actions.getUserSuccess(response.data));
  } catch (err) {
    yield put(actions.getUserFail(err));
    yield put(push('/login'));
  }
}