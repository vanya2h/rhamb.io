// @flow

import { Page } from '~/domains/app/page/constructor';

import type { PageKey } from '~/domains/app/page/types';

class PageService {
  createPage = ({
    title,
    key,
    url,
  }: {
    title: String,
    key: PageKey,
    url: String,
  }) => {
    return new Page({ title, key, url });
  };
}

export const pageService = new PageService();
