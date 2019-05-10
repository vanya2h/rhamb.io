// @flow

import { Process } from '~/domains/abstractions/process/constructor';

export const processService = {
  createProcess: function<T>(props): Process<T> {
    return new Process<T>(props);
  },
};
