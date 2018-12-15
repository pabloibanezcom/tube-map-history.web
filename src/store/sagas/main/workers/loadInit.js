import { put } from "redux-saga/effects";
import { getCityInfo, getLines, loadConnections, loadStations } from "../../../../http/main";
import * as actions from "../../../actions/main";

export function* loadInitSagaStart(action) {
  try {
    const cityInfoResponse = yield getCityInfo();
    const linesResponse = yield getLines();
    const stationsResponse = yield loadStations(action.year);
    const connectionsResponse = yield loadConnections(action.year);
    yield put(actions.loadInitSuccess(
      action.year,
      {
        cityInfo: cityInfoResponse.data,
        lines: linesResponse.data,
        stations: stationsResponse.data,
        connections: connectionsResponse.data
      }));
  } catch (error) {
    yield put(actions.loadInitFail(error));
  }
}