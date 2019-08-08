import * as actions from "actions/main";
import Api from 'http/api';
import { put } from "redux-saga/effects";

export function* getCountriesSagaStart() {
  try {
    debugger
    const response = yield Api.country.getCountries();
    yield put(actions.getCountriesSuccess(response.data));
  } catch (error) {
    yield put(actions.getCountriesFail(error));
  }
}