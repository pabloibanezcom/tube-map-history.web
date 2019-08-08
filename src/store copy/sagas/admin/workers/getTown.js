import * as actions from "actions/admin";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* getTownSagaStart(action) {
  try {
    const response = yield Api.town.getTownInfo(action.town);
    yield put(actions.getTownSuccess(response.data));
  } catch (error) {
    yield put(actions.getTownFail(error));
  }
}