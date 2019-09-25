import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Buttons from './Buttons/Buttons';
import Badges from './Data-Presentation/Badges/Badges';
import Collapses from './Data-Presentation/Collapses/Collapses';
import CountryLabels from './Data-Presentation/Country-Labels/Country-Labels';
import DataPresentation from './Data-Presentation/Data-Presentation';
import Icons from './Data-Presentation/Icons/Icons';
import LoadingSpinners from './Data-Presentation/Loading-Spinners/Loading-Spinners';
import Paginations from './Data-Presentation/Paginations/Paginations';
import Panels from './Data-Presentation/Panels/Panels';
import Tabs from './Data-Presentation/Tabs/Tabs';
import Forms from './Forms/Forms';
import Headers from './Headers/Headers';
import Index from './Index/Index';
import Inputs from './Inputs/Inputs';
import Layout from './Layout/Layout';
import Modals from './Layout/Modals/Modals';

const baseUrl = '/showroom';

const routes = (
  <Switch>
    <Route path={`${baseUrl}/buttons`} component={Buttons} />
    <Route path={`${baseUrl}/data-presentation`} exact component={DataPresentation} />
    <Route path={`${baseUrl}/data-presentation/collapses`} component={Collapses} />
    <Route path={`${baseUrl}/data-presentation/country-labels`} component={CountryLabels} />
    <Route path={`${baseUrl}/data-presentation/badges`} component={Badges} />
    <Route path={`${baseUrl}/data-presentation/icons`} component={Icons} />
    <Route path={`${baseUrl}/data-presentation/loading-spinners`} component={LoadingSpinners} />
    <Route path={`${baseUrl}/data-presentation/paginations`} component={Paginations} />
    <Route path={`${baseUrl}/data-presentation/panels`} component={Panels} />
    <Route path={`${baseUrl}/data-presentation/tabs`} component={Tabs} />
    <Route path={`${baseUrl}/forms`} component={Forms} />
    <Route path={`${baseUrl}/inputs`} component={Inputs} />
    <Route path={`${baseUrl}/headers`} component={Headers} />
    <Route path={`${baseUrl}/layout`} exact component={Layout} />
    <Route path={`${baseUrl}/layout/modals`} component={Modals} />
    <Route path={`${baseUrl}`} component={Index} />
    <Redirect to={`${baseUrl}`} />
  </Switch>
);

export default routes;
