// @flow

import * as React from 'react';
import { Router as ReactRouter } from 'react-router';
import { routerService } from '~/domains/app/router';

type Props = {|
  children: React.Node,
|};

export const RouterProvider = (props: Props) => (
  <ReactRouter history={routerService.history}>{props.children}</ReactRouter>
);
