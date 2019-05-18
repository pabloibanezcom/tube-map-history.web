import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

export const getDynamicComponent = (componentName) => {
  return DYNAMIC_COMPONENTS[componentName];
}

const DYNAMIC_COMPONENTS = {
  SelectedLine: asyncComponent(() => {
    return import('../UI/custom-selects/selected-line/selected-line');
  }),
  DropdownLine: asyncComponent(() => {
    return import('../UI/custom-selects/dropdown-line/dropdown-line');
  }),
  SelectedStation: asyncComponent(() => {
    return import('../UI/custom-selects/selected-station/selected-station');
  }),
  DropdownStation: asyncComponent(() => {
    return import('../UI/custom-selects/dropdown-station/dropdown-station');
  }),
  SelectedPlaceSuggestion: asyncComponent(() => {
    return import('../UI/custom-selects/selected-place-suggestion/selected-place-suggestion');
  }),
  DropdownPlaceSuggestion: asyncComponent(() => {
    return import('../UI/custom-selects/dropdown-place-suggestion/dropdown-place-suggestion');
  }),
  SelectedCountry: asyncComponent(() => {
    return import('../UI/custom-selects/selected-country/selected-country');
  }),
  DropdownCountry: asyncComponent(() => {
    return import('../UI/custom-selects/dropdown-country/dropdown-country');
  })
}