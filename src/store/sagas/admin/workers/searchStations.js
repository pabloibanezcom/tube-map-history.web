import { put } from "redux-saga/effects";
import { search } from "../../../../http/admin";
import * as actions from "../../../actions/admin";

export function* searchStationsSagaStart(action) {
  try {
    const response = yield search('station', action.searchParams, action.pagination);
    yield put(actions.searchStationsSuccess(response.data));
  } catch (error) {
    yield put(actions.searchStationsFail(error));
  }
}