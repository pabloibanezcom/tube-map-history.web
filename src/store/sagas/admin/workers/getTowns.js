import * as actions from "actions/admin";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* getTownsSagaStart() {
  try {
    const response = yield Api.town.getTowns();
    yield put(actions.getTownsSuccess(response.data));
  } catch (err) {
    yield put(actions.getTownsFail(err));
  }
}