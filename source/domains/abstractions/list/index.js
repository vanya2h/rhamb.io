// @flow

import { List } from '~/domains/abstractions/list/constructor';

export const listService = {
  createList: (props): List => new List(props),
};
