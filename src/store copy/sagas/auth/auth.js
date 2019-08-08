import * as actionTypes from "actions/auth/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { loginSagaStart, signUpSagaStart } from './workers';

export const authSagas = [
  takeEvery(actionTypes.LOGIN_START, loginSagaStart),
  takeEvery(actionTypes.SIGNUP_START, signUpSagaStart)
];