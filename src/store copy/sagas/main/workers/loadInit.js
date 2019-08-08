import * as actions from "actions/main";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* loadInitSagaStart(action) {
  try {
    const townResponse = yield Api.town.getTownInfo(action.town);
    const townId = townResponse.data._id;
    const linesResponse = yield Api.line.getLines(townId);
    const stationsResponse = yield Api.station.getStationsByYearRange(townId, action.year);
    const connectionsResponse = yield Api.connection.getConnectionsByYearRange(townId, action.year);
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