import * as actionTypes from "actions/admin/draft/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { addDraftSagaStart, deleteDraftSagaStart, getDraftSagaStart, updateDraftSagaStart } from './workers';

export const draftSagas = [
  takeEvery(actionTypes.ADD_DRAFT_START, addDraftSagaStart),
  takeEvery(actionTypes.GET_DRAFT_START, getDraftSagaStart),
  takeEvery(actionTypes.UPDATE_DRAFT_START, updateDraftSagaStart),
  takeEvery(actionTypes.DELETE_DRAFT_START, deleteDraftSagaStart)
];