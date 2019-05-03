// @flow

import * as React from 'react';
import invariant from 'invariant';
import ReactDOM from 'react-dom';
import Root from '~/root';
import { onDocumentReady } from '~/utils/on-document-ready';

const init = () => {
  const targetNode = document.querySelector('#app');

  invariant(
    targetNode instanceof HTMLElement,
    'Mount target node should exist',
  );

  ReactDOM.render(<Root />, targetNode);
};

onDocumentReady(init);
