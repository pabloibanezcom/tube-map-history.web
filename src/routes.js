import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Admin = React.lazy(() => import('./containers/Admin/Admin'));
const Public = React.lazy(() => import('./containers/Public/Public'));

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
    <Route path="/" component={lazyComponent(Public)} />
    <Redirect to="/" />
    {/* <Route path="/:town/:year" exact component={lazyComponent(Public)} /> */}
    {/* <Redirect to={`/london/${defaultYear}`} /> */}
  </Switch>
);

export default routes;
