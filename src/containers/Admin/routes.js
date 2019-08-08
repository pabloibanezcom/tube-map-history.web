import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddDraft from './AddDraft/AddDraft';
import AdminDraft from './AdminDraft/AdminDraft';
// import AdminTown from './AdminTown/AdminTown';
import AdminHome from './AdminHome/AdminHome';

const baseUrl = '/admin';

const routes = (
  <Switch>
    <Route path={`${baseUrl}`} exact component={AdminHome} />
    <Route path={`${baseUrl}/draft/:draftId`} exact component={AdminDraft} />
    <Route path={`${baseUrl}/create-draft`} exact component={AddDraft} />
    {/* <Route path={`${baseUrl}/town/:town`} exact component={AdminTown} /> */}
    <Redirect to={`${baseUrl}`} />
  </Switch>
);

export default routes;