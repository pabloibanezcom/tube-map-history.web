import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminTown from './AdminTown/AdminTown';
import AdminUser from './AdminUser/AdminUser';

const baseUrl = '/admin';

const routes = (
  <Switch>
    <Route path={`${baseUrl}/user`} component={AdminUser} />
    <Route path={`${baseUrl}/town/:town`} exact component={AdminTown} />
    <Redirect to={`${baseUrl}/user`} />
  </Switch>
);

export default routes;