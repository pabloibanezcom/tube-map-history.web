import { all } from "redux-saga/effects";
import { adminSagas } from './admin';
import { authSagas } from './auth';
import { mainSagas } from './main';

export function* watchAll() {
  yield all([
    ...authSagas,
    ...adminSagas,
    ...mainSagas
  ])
}