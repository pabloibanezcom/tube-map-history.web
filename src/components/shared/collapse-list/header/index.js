import asyncComponent from 'hoc/asyncComponent/asyncComponent';

export default {
  town: asyncComponent(() => {
    return import('./header-town/header-town');
  })
};