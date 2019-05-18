import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Main from './Main/Main';

const defaultYear = process.env.REACT_APP_DEFAULT_YEAR;
const baseUrl = '';

const routes = (
  <Switch>
    <Route path={`${baseUrl}/login`} exact component={Login} />
    <Route path={`${baseUrl}/signup`} exact component={Signup} />
    <Route path={`${baseUrl}/:town/:year`} exact component={Main} />
    <Redirect to={`${baseUrl}/london/${defaultYear}`} />
  </Switch>
);

export default routes;