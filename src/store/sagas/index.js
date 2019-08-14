import { all } from "redux-saga/effects";
import { draftSagas } from './admin/draft';
import { lineSagas } from './admin/line';
import { townSagas } from './admin/town';
import { userSagas } from './admin/user';
import { authSagas } from './auth';

export function* watchAll() {
  yield all([
    ...authSagas,
    ...userSagas,
    ...townSagas,
    ...draftSagas,
    ...lineSagas
  ])
}