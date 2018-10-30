import { put } from "redux-saga/effects";
import { editStation } from "../../../../http/admin";
import * as actions from "../../../actions/admin";

export function* editStationSagaStart(action) {
  try {
    const response = yield editStation(action.station);
    yield put(actions.editStationSuccess(response.data));
  } catch (error) {
    yield put(actions.editStationFail(error));
  }
}