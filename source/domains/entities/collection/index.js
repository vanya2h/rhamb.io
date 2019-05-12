// @flow

import { Collection } from '~/domains/entities/collection/constructor';

export const collectionService = {
  createCollection: (props): Collection => new Collection(props),
};
