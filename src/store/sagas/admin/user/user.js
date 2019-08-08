import * as actionTypes from "actions/admin/user/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { getOwnUserSagaStart } from './workers';

export const userSagas = [
  takeEvery(actionTypes.USER_GET_OWN_START, getOwnUserSagaStart)
];