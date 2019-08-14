import { deleteStationFail, deleteStationSuccess, searchStationsStart } from 'actions/admin';
import Api from 'http/api';
import { put, select } from 'redux-saga/effects';
import { error, info } from 'util/notification';

export function* deleteStationSagaStart(action) {
  try {
    const state = yield select();
    yield Api.station.delete(action.stationId);
    yield put(deleteStationSuccess());
    yield put(searchStationsStart(state.admin.stationSearchParams, state.admin.stationPagination));
    info('Station was deleteded succesully');
  } catch (err) {
    error('Something went wrong!');
    yield put(deleteStationFail(err));
  }
}