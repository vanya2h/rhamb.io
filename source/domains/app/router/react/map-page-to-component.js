// @flow

import { IndexPage } from '~/pages/index';

import type { PageKey } from '~/domains/app/page/types';

export const mapPageToComponent = (key: PageKey) => {
  switch (key) {
    case 'index': {
      return IndexPage;
    }
    default: {
      (key: empty);
      return null;
    }
  }
};
