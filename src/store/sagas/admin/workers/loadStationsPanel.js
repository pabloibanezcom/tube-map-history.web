import * as actions from "actions/admin";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* loadStationsPanelSagaStart(action) {
  try {
    const linesResponse = yield Api.line.getLines(action.town);
    yield put(actions.loadStationsPanelSuccess({ lines: linesResponse.data }));
  } catch (error) {
    yield put(actions.loadStationsPanelFail(error));
  }
}