import * as actionTypes from './actionTypes';

export const initMapDraftStart = (draftId, year) => {
  return {
    type: actionTypes.INIT_MAP_DRAFT_START,
    draftId,
    year
  };
};

export const initMapDraftSuccess = (town, year, draft, stations) => {
  return {
    type: actionTypes.INIT_MAP_DRAFT_SUCCESS,
    town,
    year,
    draft,
    stations
  };
};

export const initMapDraftFail = error => {
  return {
    type: actionTypes.INIT_MAP_DRAFT_FAIL,
    error
  };
};
