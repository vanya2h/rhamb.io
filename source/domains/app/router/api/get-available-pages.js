// @flow

import { pageService } from '~/domains/app/page';

import type { Page } from '~/domains/app/page/constructor';

const availablePages = [
  pageService.createPage({
    title: 'Index page',
    key: 'index',
    url: '/',
  }),
];

export const getAvailablePages = (): Page => {
  return availablePages;
};
