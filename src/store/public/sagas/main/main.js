import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/public/actions/main/actionTypes';
import { initMapDraftSagaStart, initMapSagaStart } from './workers';

export const mainSagas = [
  takeEvery(actionTypes.INIT_MAP_START, initMapSagaStart),
  takeEvery(actionTypes.INIT_MAP_DRAFT_START, initMapDraftSagaStart)
];
