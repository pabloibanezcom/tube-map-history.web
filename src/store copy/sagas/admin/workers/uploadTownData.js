import * as actions from "actions/admin";
import Api from 'http/api';
import { put } from "redux-saga/effects";
import { error, info } from 'shared/notification';

export function* uploadTownDataSagaStart(action) {
  try {
    const response = yield Api.generation.importTownData(action.town, action.file);
    yield put(actions.uploadTownDataSuccess(response.data));
    info(`Town data was updated successfully!`);
  } catch (err) {
    yield put(actions.uploadTownDataFail(err));
    error('Town data could not be updated!');
  }
}