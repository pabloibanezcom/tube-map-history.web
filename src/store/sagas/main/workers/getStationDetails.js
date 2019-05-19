import * as actions from "actions/main";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* getStationDetailsSagaStart(action) {
  try {
    const response = yield Api.station.getStation(action.stationId);
    yield put(actions.getStationDetailsSuccess(response.data));
  } catch (error) {
    yield put(actions.getStationDetailsFail(error));
  }
}