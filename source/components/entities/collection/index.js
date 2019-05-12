// @flow

import React from 'react';
import { useCollection } from '~/domains/entities/collection/react/use-collection';
import { CollectionRaw } from './raw';

import type { View } from '~/components/entities/collection/types';

type Props = {
  collectionId: string,
  view: View,
};

const CollectionBusinessProvider = (props: Props) => {
  const [collection, error, isHydrating] = useCollection(props.collectionId);

  return (
    <CollectionRaw
      collection={collection}
      error={error}
      isHydrating={isHydrating}
      {...props}
    />
  );
};

export const Collection = CollectionBusinessProvider;
