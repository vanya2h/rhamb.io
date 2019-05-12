// @flow

import React from 'react';
import { Collection } from '~/domains/entities/collection/constructor';
import { CollectionCardView } from '~/components/entities/collection/views/card';

import type { JSSObject } from '~/domains/app/jss/types';
import type { View } from '~/components/entities/collection/types';

type Props = {
  classes: JSSObject,
  isHydrating: Boolean,
  collection: ?Collection,
  error: ?Error,
  view: View,
};

/**
 * @todo error view
 * @todo hydrating view
 */

export const CollectionRaw = (props: Props) => {
  const { collection, view, isHydrating, error } = props;

  if (error) {
    return <div>Error</div>;
  }

  if (isHydrating || !collection) {
    return <div>Hydrating..</div>;
  }

  switch (view) {
    case 'card': {
      return <CollectionCardView collectionData={collection.data} />;
    }
    default: {
      return <CollectionCardView collectionData={collection.data} />;
    }
  }
};
