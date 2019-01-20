import { put, select } from "redux-saga/effects";
import Api from '../../../../http/api';
import { error, info } from '../../../../shared/notification';
import * as actions from "../../../actions/admin";

export function* updateStationSagaStart(action) {
  try {
    const response = yield Api.station.updateStation(action.town, action.station);
    yield put(actions.updateStationSuccess(response.data));
    const state = yield select();
    yield put(actions.searchStationsStart(action.town, state.admin.searchParams, state.admin.pagination));
    info(`${action.station.name} - Station updated successfully!`);
  }
  catch (err) {
    yield put(actions.updateStationFail(err));
    error(`${action.station.name} - Station could not be updated!!`);
  }
}