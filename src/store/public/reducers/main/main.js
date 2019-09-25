export const initMapSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    town: action.town,
    year: action.year,
    draft: action.draft,
    stations: action.stations
  };
};

export const setYear = (state, action) => {
  return {
    ...state,
    year: action.year
  };
};
