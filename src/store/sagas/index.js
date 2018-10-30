import { all } from "redux-saga/effects";
import { adminSagas } from './admin';
import { mainSagas } from './main';

export function* watchAll() {
  yield all([
    ...adminSagas,
    ...mainSagas
  ])
}