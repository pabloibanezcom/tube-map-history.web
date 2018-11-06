import { put } from "redux-saga/effects";
import { search } from "../../../../http/admin";
import * as actions from "../../../actions/admin";

export function* searchLinesSagaStart(action) {
  try {
    const response = yield search('line', action.searchParams, action.pagination);
    yield put(actions.searchLinesSuccess(response.data));
  } catch (error) {
    yield put(actions.searchLinesFail(error));
  }
}