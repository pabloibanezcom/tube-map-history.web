import { updateObject } from 'shared/utility';

const initialState = {
  loading: false
};

const startLoading = state => {
  return updateObject(state, { loading: true });
};

const stopLoading = state => {
  return updateObject(state, { loading: false });
};

const checkActionType = (action, type) => {
  return action.endsWith(type);
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Default ones
    case checkActionType(action.type, 'START'):
      return startLoading(state);
    case checkActionType(action.type, 'SUCCESS'):
      return stopLoading(state);
    case checkActionType(action.type, 'FAIL'):
      return stopLoading(state);
    default:
      return state;
  }
};
