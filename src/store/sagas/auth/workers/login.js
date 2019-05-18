import * as actions from 'actions/auth';
import { push } from 'connected-react-router';
import Api from 'http/api';
import { put } from 'redux-saga/effects';

export function* loginSagaStart(action) {
  try {
    const response = yield Api.user.login(action.email, action.password);
    Api.setAuthToken(response.data.token);
    localStorage.setItem('auth', response.data.token);
    yield put(push('/admin'));
    yield put(actions.loginSuccess());
  } catch (err) {
    yield put(actions.loginFail(err));
  }
}