import { push } from 'connected-react-router';
import Api from 'http/public';
import { put } from 'redux-saga/effects';
import { initMapDraftFail, initMapDraftSuccess, setYear } from 'store/public/actions';
import { handleError } from 'store/util/errorHandling';

export function* initMapDraftSagaStart(action) {
  try {
    const draftRes = yield Api.draft.getDraftWithTown(action.draftId);
    const stationsRes = yield Api.station.getStationsWithAuth(draftRes.data._id, action.year, draftRes.data.town.year);
    yield put(initMapDraftSuccess(draftRes.data.town, action.year, draftRes.data, stationsRes.data));
    yield put(setYear(action.year));
  } catch (err) {
    const redirectTo = handleError(err);
    if (redirectTo) {
      yield put(push(redirectTo));
    }
    yield put(initMapDraftFail(err));
  }
}