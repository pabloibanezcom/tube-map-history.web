import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Buttons from './Buttons/Buttons';
import Badges from './Data-Presentation/Badges/Badges';
import Collapses from './Data-Presentation/Collapses/Collapses';
import DataPresentation from './Data-Presentation/Data-Presentation';
import Headers from './Headers/Headers';
import Index from './Index/Index';
import Inputs from './Inputs/Inputs';
import Layout from './Layout/Layout';

const baseUrl = '/showroom';

const routes = (
  <Switch>
    <Route path={`${baseUrl}/buttons`} component={Buttons} />
    <Route path={`${baseUrl}/data-presentation`} exact component={DataPresentation} />
    <Route path={`${baseUrl}/data-presentation/collapses`} component={Collapses} />
    <Route path={`${baseUrl}/data-presentation/badges`} component={Badges} />
    <Route path={`${baseUrl}/inputs`} component={Inputs} />
    <Route path={`${baseUrl}/headers`} component={Headers} />
    <Route path={`${baseUrl}/layout`} component={Layout} />
    <Route path={`${baseUrl}`} component={Index} />
    <Redirect to={`${baseUrl}`} />
  </Switch>
);

export default routes;