import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import generateIcons from './icons-library/icons-library';

generateIcons();

const defaultYear = process.env.REACT_APP_DEFAULT_YEAR;

const asyncMain = asyncComponent(() => {
  return import('./containers/Main/Main');
});

const asyncAdmin = asyncComponent(() => {
  return import('./containers/Admin/Admin');
});

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/admin" component={asyncAdmin} />
        <Route path="/:year" exact component={asyncMain} />
        <Redirect to={`/${defaultYear}`} />
      </Switch>
    );

    return (
      <div className="ms-site-container">
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
