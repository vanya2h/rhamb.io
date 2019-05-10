// @flow

import { Repository } from '~/domains/abstractions/repository/constructor';

export const repositoryService = {
  createRepository: function<Shape>(props): Repository<Shape> {
    return new Repository<Shape>(props);
  },
};
