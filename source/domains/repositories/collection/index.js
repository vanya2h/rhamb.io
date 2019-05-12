// @flow

import { Repository } from '~/domains/abstractions/repository/constructor';
import { processService } from '~/domains/abstractions/process';
import { collectionService } from '~/domains/entities/collection';
import { api } from '~/domains/app/api-client';

import type { Collection } from '~/domains/entities/collection/constructor';

const getDefaultData = (): Collection[] => {
  return [];
};

class CollectionRepository extends Repository<Collection> {
  constructor() {
    super(getDefaultData());
  }

  getCollections = async (query): Promise<Collection[]> => {
    const collections = await api.collection.getCollections(query);

    this.addEntities(
      collections.map((collection) =>
        collectionService.createCollection({
          id: collection.id,
          processState: processService.createProcess({
            title: 'Collection fetching',
            state: {
              status: 'success',
              result: collection,
            },
          }),
        }),
      ),
    );

    return collections;
  };

  getCollection = async (query): Promise<Collection> => {
    const collection = await api.collection.getCollection(query);

    this.addEntities([
      collectionService.createCollection({
        id: collection.id,
        processState: processService.createProcess({
          title: 'Collection fetching',
          state: {
            status: 'success',
            result: collection,
          },
        }),
      }),
    ]);

    return collection;
  };
}

export const collectionRepository = new CollectionRepository();
