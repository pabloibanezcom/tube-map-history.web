import { searchStationsFail, searchStationsSuccess } from 'actions/admin';
import Api from 'http/api';
import { put, select } from 'redux-saga/effects';
import { error } from 'util/notification';

export function* searchStationsSagaStart(action) {
  try {
    const state = yield select();
    const response = yield Api.station.search(state.admin.draft._id, action.searchParams, action.pagination);
    yield put(searchStationsSuccess(response.data));
  } catch (err) {
    error('Something went wrong!');
    yield put(searchStationsFail(err));
  }
}