import Login from 'containers/Auth/Login/Login';
import Signup from 'containers/Auth/Signup/Signup';
import Public from 'containers/Public/Public';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Admin = React.lazy(() => import('containers/Admin/Admin'));
const Showroom = React.lazy(() => import('containers/Showroom/Showroom'));

const lazyComponent = (Component, history) => {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component history={history} {...props} />
    </React.Suspense>
  );
}

const routes = (history) => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/admin" component={lazyComponent(Admin, history)} />
    <Route path="/showroom" component={lazyComponent(Showroom, history)} />
    <Route path="/" component={lazyComponent(Public)} />
    <Redirect to="/admin" />
  </Switch>
);

export default routes;
