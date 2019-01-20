import { put } from "redux-saga/effects";
import Api from '../../../../http/api';
import * as actions from "../../../actions/admin";

export function* loadTownDataSagaStart(action) {
  try {
    const response = yield Api.town.getTownInfo(action.town);
    yield put(actions.loadTownDataSuccess(response.data));
  } catch (error) {
    yield put(actions.loadTownDataFail(error));
  }
}