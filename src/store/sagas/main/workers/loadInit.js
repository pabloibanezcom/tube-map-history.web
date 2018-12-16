import { put } from "redux-saga/effects";
import { getLines, getTown, loadConnections, loadStations } from "../../../../http/main";
import * as actions from "../../../actions/main";

export function* loadInitSagaStart(action) {
  try {
    const townResponse = yield getTown(action.town);
    const townId = townResponse.data._id;
    const linesResponse = yield getLines(townId);
    const stationsResponse = yield loadStations(townId, action.year);
    const connectionsResponse = yield loadConnections(townId, action.year);
    yield put(actions.loadInitSuccess(
      action.year,
      {
        town: townResponse.data,
        lines: linesResponse.data,
        stations: stationsResponse.data,
        connections: connectionsResponse.data
      }));
  } catch (error) {
    yield put(actions.loadInitFail(error));
  }
}