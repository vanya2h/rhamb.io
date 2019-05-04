// @flow

import { getAvailablePages } from '~/domains/app/router/api';

import type { PageKey } from '~/domains/app/page/types';

export class Router {
  getAvailablePages = (): PageKey[] => {
    return getAvailablePages();
  };
}
