export const startAction = (state, action) => {
  return {
    ...state,
    actionPanelInitiated: true,
    action: action.actionName,
    actionObj: action.actionObj
  }
}

export const finishAction = (state) => {
  return {
    ...state,
    action: null,
    actionObj: null
  }
}