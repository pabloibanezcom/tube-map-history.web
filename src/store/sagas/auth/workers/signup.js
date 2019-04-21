import * as actions from "actions/auth";
import { put } from "redux-saga/effects";

export function* signUpSagaStart(action) {
  try {
    yield put(actions.signUpSuccess());
  } catch (err) {
    yield put(actions.signUpFail(err));
  }
}