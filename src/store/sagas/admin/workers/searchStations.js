import { put } from "redux-saga/effects";
import { searchStations } from "../../../../http/admin";
import * as actions from "../../../actions/admin";

export function* searchStationsSagaStart(action) {
  try {
    const response = yield searchStations(action.searchParams);
    yield put(actions.searchStationsSuccess(response.data));
  } catch (error) {
    yield put(actions.searchStationsFail(error));
  }
}