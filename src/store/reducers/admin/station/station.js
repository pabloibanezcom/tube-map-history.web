export const searchStationsStart = (state, action) => {
  return {
    ...state,
    loading: true,
    stationSearchParams: action.searchParams,
    stationPagination: action.pagination
  }
}

export const searchStationsSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    stations: action.stations.elements,
    stationPagination: action.stations.pagination
  }
}
