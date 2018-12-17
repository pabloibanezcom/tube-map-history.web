import { put } from "redux-saga/effects";
import { getConnections, getStations } from "../../../../http/main";
import * as actions from "../../../actions/main";

export function* changeYearSagaStart(action) {
  const loadStationYears = checkIfLoadStations(action.year, action.maxYearLoaded);
  try {
    let data = null;
    if (loadStationYears) {
      const stationsResponse = yield getStations(action.year, action.maxYearLoaded);
      const connectionsResponse = yield getConnections(action.year, action.maxYearLoaded);
      data = {
        stations: stationsResponse.data,
        connections: connectionsResponse.data
      };
    }
    yield put(actions.changeYearSuccess(
      action.year,
      action.previousYear,
      data
    ));
  } catch (error) {
    yield put(actions.changeYearFail(error));
  }
}

const checkIfLoadStations = (year, maxYearLoaded) => {
  return year > maxYearLoaded || !maxYearLoaded ? { yearTo: year, yearFrom: maxYearLoaded + 1 } : null;
}