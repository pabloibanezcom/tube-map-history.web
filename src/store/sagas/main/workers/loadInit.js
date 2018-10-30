import { put } from "redux-saga/effects";
import { loadConnections, loadLines, loadStations } from "../../../../http/main";
import * as actions from "../../../actions/main";

export function* loadInitSagaStart(action) {
  try {
    const linesResponse = yield loadLines();
    const stationsResponse = yield loadStations(action.year);
    const connectionsResponse = yield loadConnections(action.year);
    yield put(actions.loadInitSuccess(
      action.year,
      {
        lines: linesResponse.data,
        stations: stationsResponse.data,
        connections: connectionsResponse.data
      }));
  } catch (error) {
    yield put(actions.loadInitFail(error));
  }
}