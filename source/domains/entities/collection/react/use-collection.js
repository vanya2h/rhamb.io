// @flow

import { useEffect, useState } from 'react';
import { collectionRepository } from '~/domains/repositories/collection';
import { collectionService } from '~/domains/entities/collection';
import { useObserver } from 'mobx-react-lite';

export const useCollection = (collectionId) => {
  return useObserver(() => {
    const [collection, setCollection] = useState();

    const collectionFromRepository = collectionRepository.getEntities(
      (collection) => collection.id === collectionId,
    )[0];

    useEffect(() => {
      if (collectionFromRepository) {
        setCollection(collectionFromRepository);
      } else {
        const createdCollection = collectionService.createCollection({
          id: collectionId,
        });

        createdCollection.fetch().then(() => {
          collectionRepository.addElements([createdCollection]);
        });
      }
    }, [collectionFromRepository, collectionId]);

    const isHydrating =
      collection && collection.process.state.status === 'processing';
    const error = collection && collection.process.state.error;

    return [collection, error, isHydrating];
  });
};
