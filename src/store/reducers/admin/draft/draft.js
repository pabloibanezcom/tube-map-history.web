export const getDraftSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    draft: action.draft
  }
}