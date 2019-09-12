import { updateObject } from 'shared/utility';
import * as mainActions from 'store/public/actions/main/actionTypes';
import * as mainReducers from './main/main';

const initialState = {
  loading: false,
  year: null,
  town: null,
  draft: null,
  stations: []
};

const defaultStart = (state) => {
  return updateObject(state, { loading: true });
};

const defaultSuccess = (state) => {
  return updateObject(state, { loading: false, action: null, actionObj: null });
};

const defaultFail = (state) => {
  return updateObject(state, { loading: false });
};

const checkActionType = (action, type) => {
  return action.endsWith(type);
}

export const publicReducer = (state = initialState, action) => {
  switch (action.type) {
    // Default ones
    case checkActionType(action.type, 'START'): return defaultStart(state);
    case checkActionType(action.type, 'SUCCESS'): return defaultSuccess(state);
    case checkActionType(action.type, 'FAIL'): return defaultFail(state);

    // Main
    case mainActions.INIT_MAP_START: return defaultStart(state, action);
    case mainActions.INIT_MAP_SUCCESS: return mainReducers.initMapSuccess(state, action);
    case mainActions.INIT_MAP_FAIL: return defaultFail(state, action);

    case mainActions.INIT_MAP_DRAFT_START: return defaultStart(state, action);
    case mainActions.INIT_MAP_DRAFT_SUCCESS: return mainReducers.initMapSuccess(state, action);
    case mainActions.INIT_MAP_DRAFT_FAIL: return defaultFail(state, action);

    case mainActions.SET_YEAR: return mainReducers.setYear(state, action);

    default: return state;
  }
};