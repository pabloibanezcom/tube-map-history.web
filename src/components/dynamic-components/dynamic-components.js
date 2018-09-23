import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

export const getDynamicComponent = (componentName) => {
  return DYNAMIC_COMPONENTS[componentName];
}

const DYNAMIC_COMPONENTS = {
  SelectedLine: asyncComponent(() => {
    return import('../admin/custom-selects/selected-line/selected-line');
  }),
  DropdownLine: asyncComponent(() => {
    return import('../admin/custom-selects/dropdown-line/dropdown-line');
  }),
  SelectedStation: asyncComponent(() => {
    return import('../admin/custom-selects/selected-station/selected-station');
  }),
  DropdownStation: asyncComponent(() => {
    return import('../admin/custom-selects/dropdown-station/dropdown-station');
  })
}