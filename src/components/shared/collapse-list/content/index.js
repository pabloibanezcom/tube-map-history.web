import asyncComponent from 'hoc/asyncComponent/asyncComponent';

export default {
  town: asyncComponent(() => {
    return import('./content-town/content-town');
  })
};