import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Selectors from './Selectors/Selectors';

const baseUrl = '/showroom';

const routes = (
  <Switch>
    <Route path={`${baseUrl}/selectors`} component={Selectors} />
    <Redirect to={`${baseUrl}/selectors`} />
  </Switch>
);

export default routes;