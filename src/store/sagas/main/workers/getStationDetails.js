import { put } from "redux-saga/effects";
import { getStation } from "../../../../http/main";
import * as actions from "../../../actions/main";

export function* getStationDetailsSagaStart(action) {
  try {
    const response = yield getStation(action.stationId);
    yield put(actions.getStationDetailsSuccess(response.data));
  } catch (error) {
    yield put(actions.getStationDetailsFail(error));
  }
}