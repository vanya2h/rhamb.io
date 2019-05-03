// @flow

import React from 'react';
import { hot } from 'react-hot-loader';

export class Root extends React.Component<{}> {
  render() {
    return <div>Root component</div>;
  }
}

export default hot(module)(Root);
