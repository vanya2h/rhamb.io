// @flow

import { createBrowserHistory } from 'history';
import { getAvailablePages } from '~/domains/app/router/api';
import { Router } from './constructor';

import type { Page } from '~/domains/app/page/constructor';
import type { PageKey } from '~/domains/app/page/types';

export const router = new Router();

class RouterService {
  router = new Router();

  history = createBrowserHistory();

  getAvailablePages = (): Page[] => {
    return getAvailablePages();
  };

  getPageByKey = (key: PageKey): ?Page => {
    const pages = this.getAvailablePages();

    return pages.find((route) => route.key === key);
  };

  pushHistory = (key: PageKey) => {
    const page = this.getPageByKey(key);

    if (page) {
      this.history.push(page.url);
    } else {
      this.history.push(key);
    }
  };

  back = () => {
    history.goBack();
  };
}

export const routerService = new RouterService();
