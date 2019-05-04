// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { mapPageToComponent } from './map-page-to-component';
import { routerService } from '~/domains/app/router';

export const Switcher = () => {
  const pages = routerService.getAvailablePages();

  return (
    <Switch>
      {pages.map((route) => (
        <Route
          component={mapPageToComponent(route.key)}
          exact
          key={route.key}
          path={route.url}
        />
      ))}
    </Switch>
  );
};
