import { put, select } from "redux-saga/effects";
import Api from '../../../../http/api';
import { error, info } from '../../../../shared/notification';
import * as actions from "../../../actions/admin";

export function* addStationSagaStart(action) {
  try {
    const response = yield Api.station.addStation(action.town, action.station);
    yield put(actions.addStationSuccess(response.data));
    const state = yield select();
    yield put(actions.searchStationsStart(action.town, state.admin.searchParams, state.admin.pagination));
    info(`Station added successfully!`);
  } catch (err) {
    yield put(actions.addStationFail(err));
    error(`Station could not be added!!`);
  }
}