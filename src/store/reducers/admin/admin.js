import * as actionActions from 'actions/admin/action/actionTypes';
import * as draftActions from 'actions/admin/draft/actionTypes';
import * as lineActions from 'actions/admin/line/actionTypes';
import * as stationActions from 'actions/admin/station/actionTypes';
import * as townActions from 'actions/admin/town/actionTypes';
import * as userActions from 'actions/admin/user/actionTypes';
import { updateObject } from 'shared/utility';
import * as actionReducers from './action/action';
import * as draftReducers from './draft/draft';
import * as lineReducers from './line/line';
import * as stationReducers from './station/station';
import * as townReducers from './town/town';
import * as userReducers from './user/user';

const initialState = {
  loading: false,
  actionPanelInitiated: false,
  action: null,
  actionObj: null,
  user: null,
  towns: null,
  draft: null,
  lines: [],
  lineSearchParams: null,
  linePagination: null,
  stations: [],
  stationSearchParams: null,
  stationPagination: null
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

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // Default ones
    case checkActionType(action.type, 'START'): return defaultStart(state);
    case checkActionType(action.type, 'SUCCESS'): return defaultSuccess(state);
    case checkActionType(action.type, 'FAIL'): return defaultFail(state);

    // Action
    case actionActions.START_ACTION: return actionReducers.startAction(state, action);
    case actionActions.FINISH_ACTION: return actionReducers.finishAction(state);
    case actionActions.CLEAR_DRAFT: return actionReducers.clearDraft(state);

    // User
    case userActions.USER_GET_OWN_SUCCESS: return userReducers.getOwnSuccess(state, action);

    // Town
    case townActions.GET_TOWNS_SUCCESS: return townReducers.getTownsSuccess(state, action);

    // Draft
    case draftActions.GET_DRAFT_START: return defaultStart(state);
    case draftActions.GET_DRAFT_SUCCESS: return draftReducers.getDraftSuccess(state, action);
    case draftActions.GET_DRAFT_FAIL: return defaultFail(state);

    case draftActions.UPDATE_DRAFT_START: return defaultStart(state);
    case draftActions.UPDATE_DRAFT_SUCCESS: return defaultSuccess(state);
    case draftActions.UPDATE_DRAFT_FAIL: return defaultFail(state);

    // Line
    case lineActions.SEARCH_LINES_START: return lineReducers.searchLinesStart(state, action);
    case lineActions.SEARCH_LINES_SUCCESS: return lineReducers.searchLinesSuccess(state, action);
    case lineActions.SEARCH_LINES_FAIL: return defaultFail(state);

    case lineActions.ADD_LINE_START: return defaultStart(state);
    case lineActions.ADD_LINE_SUCCESS: return defaultSuccess(state);
    case lineActions.ADD_LINE_FAIL: return defaultFail(state);

    case lineActions.UPDATE_LINE_START: return defaultStart(state);
    case lineActions.UPDATE_LINE_SUCCESS: return defaultSuccess(state);
    case lineActions.UPDATE_LINE_FAIL: return defaultFail(state);

    case lineActions.DELETE_LINE_START: return defaultStart(state);
    case lineActions.DELETE_LINE_SUCCESS: return defaultSuccess(state);
    case lineActions.DELETE_LINE_FAIL: return defaultFail(state);

    // Station
    case stationActions.SEARCH_STATIONS_START: return stationReducers.searchStationsStart(state, action);
    case stationActions.SEARCH_STATIONS_SUCCESS: return stationReducers.searchStationsSuccess(state, action);
    case stationActions.SEARCH_STATIONS_FAIL: return defaultFail(state);

    case stationActions.ADD_STATION_START: return defaultStart(state);
    case stationActions.ADD_STATION_SUCCESS: return defaultSuccess(state);
    case stationActions.ADD_STATION_FAIL: return defaultFail(state);

    case stationActions.UPDATE_STATION_START: return defaultStart(state);
    case stationActions.UPDATE_STATION_SUCCESS: return defaultSuccess(state);
    case stationActions.UPDATE_STATION_FAIL: return defaultFail(state);

    case stationActions.DELETE_STATION_START: return defaultStart(state);
    case stationActions.DELETE_STATION_SUCCESS: return defaultSuccess(state);
    case stationActions.DELETE_STATION_FAIL: return defaultFail(state);


    default: return state;
  }
};
