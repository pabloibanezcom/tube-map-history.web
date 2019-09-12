import Api from 'http/public';
import { put } from 'redux-saga/effects';
import { initMapFail, initMapSuccess, setYear } from 'store/public/actions';

export function* initMapSagaStart(action) {
  try {
    const townRes = yield Api.town.getTown(action.townUrl);
    const draftRes = yield Api.town.getPublishedDraft(townRes.data._id);
    const stationsRes = yield Api.station.getStations(draftRes.data._id, action.year, townRes.data.year);
    yield put(initMapSuccess(townRes.data, action.year, draftRes.data, stationsRes.data));
    yield put(setYear(action.year));
  } catch (err) {
    yield put(initMapFail(err));
  }
}