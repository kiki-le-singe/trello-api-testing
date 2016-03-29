// Docs:
  // - https://github.com/rackt/react-router
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md
  // - https://github.com/rackt/react-router/blob/master/docs/API.md
  // - https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import AppLayout from 'layouts/AppLayout';
import Home from 'components/views/Home';
import About from 'components/views/About';
import ListCards from 'components/views/ListCards';
import NotFound from 'components/views/NotFound';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="about" component={About} />
    <Route path="trello" component={ListCards} />
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="404" />
  </Route>
);
