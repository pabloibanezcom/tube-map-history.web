import { put } from "redux-saga/effects";
import { editStation } from "../../../../http/admin";
import { error, info } from '../../../../shared/notification';
import * as actions from "../../../actions/admin";

export function* editStationSagaStart(action) {
  try {
    const response = yield editStation(action.station);
    yield put(actions.editStationSuccess(response.data));
    yield put(actions.searchStationsStart());
    info(`${action.station.name} - Station updated successfully!`);
  }
  catch (err) {
    yield put(actions.editStationFail(err));
    error(`${action.station.name} - Station could not be updated!!`);
  }
}