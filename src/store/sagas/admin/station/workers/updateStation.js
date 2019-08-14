import { searchStationsStart, updateStationFail, updateStationSuccess } from 'actions/admin';
import Api from 'http/api';
import { put, select } from 'redux-saga/effects';
import { info } from 'util/notification';

export function* updateStationSagaStart(action) {
  try {
    const state = yield select();
    yield Api.station.update(action.station);
    yield put(updateStationSuccess());
    yield put(searchStationsStart(state.admin.stationSearchParams, state.admin.stationPagination));
    info('Station updated succesully');
  } catch (err) {
    yield put(updateStationFail(err));
  }
}