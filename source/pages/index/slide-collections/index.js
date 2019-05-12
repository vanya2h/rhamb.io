// @flow

import React from 'react';
import { SlideCollectionsRaw } from './raw';
import withStyles from 'react-jss';
import { collectionRepository } from '~/domains/repositories/collection';
import { useObserver } from 'mobx-react-lite';
import { useList } from '~/domains/abstractions/list/react/use-list';
import { styles } from './styles';

import type { JSSObject } from '~/domains/app/jss/types';

type InjectedProps = {
  classes: JSSObject,
};

const SlideCollectionsBusinessProvider = (props: InjectedProps) =>
  useObserver(() => {
    const [list, error, isHydrating] = useList((loadedLength) =>
      collectionRepository
        .getCollections({
          skip: loadedLength,
          limit: 3,
          primary: 1,
        })
        .then((tools) => tools.map((tool) => tool.id)),
    );

    return (
      <SlideCollectionsRaw
        list={list}
        error={error}
        isHydrating={isHydrating}
        {...props}
      />
    );
  });

export const SlideCollections = withStyles(styles)(
  SlideCollectionsBusinessProvider,
);
