export const searchLinesStart = (state, action) => {
  return {
    ...state,
    loading: true,
    lineSearchParams: action.searchParams,
    linePagination: action.pagination
  }
}

export const searchLinesSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    lines: action.lines.elements,
    linePagination: action.lines.pagination
  }
}
