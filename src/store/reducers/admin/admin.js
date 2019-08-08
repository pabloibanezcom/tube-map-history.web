import * as actionActions from 'actions/admin/action/actionTypes';
import * as draftActions from 'actions/admin/draft/actionTypes';
import * as townActions from 'actions/admin/town/actionTypes';
import * as userActions from 'actions/admin/user/actionTypes';
import { updateObject } from 'shared/utility';
import * as actionReducers from './action/action';
import * as draftReducers from './draft/draft';
import * as townReducers from './town/town';
import * as userReducers from './user/user';

const initialState = {
  loading: false,
  actionPanelInitiated: false,
  action: null,
  actionObj: null,
  user: null,
  towns: null,
  draft: null
};

const startLoading = (state) => {
  return updateObject(state, { loading: true });
};

const stopLoading = (state) => {
  return updateObject(state, { loading: false });
};

const checkActionType = (action, type) => {
  return action.endsWith(type);
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // Default ones
    case checkActionType(action.type, 'START'): return startLoading(state);
    case checkActionType(action.type, 'SUCCESS'): return stopLoading(state);
    case checkActionType(action.type, 'FAIL'): return stopLoading(state);
    // Action
    case actionActions.START_ACTION: return actionReducers.startAction(state, action);
    case actionActions.FINISH_ACTION: return actionReducers.finishAction(state);
    // User
    case userActions.USER_GET_OWN_SUCCESS: return userReducers.getOwnSuccess(state, action);
    // Town
    case townActions.GET_TOWNS_SUCCESS: return townReducers.getTownsSuccess(state, action);
    // Draft
    case draftActions.GET_DRAFT_START: return startLoading(state);
    case draftActions.GET_DRAFT_SUCCESS: return draftReducers.getDraftSuccess(state, action);
    case draftActions.GET_DRAFT_FAIL: return stopLoading(state);

    case draftActions.UPDATE_DRAFT_START: return startLoading(state);
    case draftActions.UPDATE_DRAFT_SUCCESS: return stopLoading(state);
    case draftActions.UPDATE_DRAFT_FAIL: return stopLoading(state);

    default: return state;
  }
};
