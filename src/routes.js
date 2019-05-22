import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Admin = React.lazy(() => import('./containers/Admin/Admin'));
const Public = React.lazy(() => import('./containers/Public/Public'));
const Showroom = React.lazy(() => import('./containers/Showroom/Showroom'));

// const defaultYear = process.env.REACT_APP_DEFAULT_YEAR;

const lazyComponent = (Component) => {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
}

const routes = (
  <Switch>
    <Route path="/admin" component={lazyComponent(Admin)} />
    <Route path="/showroom" component={lazyComponent(Showroom)} />
    <Route path="/" component={lazyComponent(Public)} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
