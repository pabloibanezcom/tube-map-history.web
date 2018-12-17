import { put, select } from "redux-saga/effects";
import { search } from "../../../../http/admin";
import * as actions from "../../../actions/admin";

export function* searchStationsSagaStart(action) {
  try {
    let searchParams = action.searchParams;
    let pagination = action.pagination;
    if (!searchParams || !pagination) {
      const state = yield select();
      searchParams = searchParams || (state.admin.searchParams ? state.admin.searchParams.stations : null);
      pagination = pagination || state.admin.pagination;
    }
    const response = yield search('station', searchParams, pagination);
    yield put(actions.searchStationsSuccess(response.data));
  } catch (error) {
    yield put(actions.searchStationsFail(error));
  }
}