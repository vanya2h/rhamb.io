// @flow

import React from 'react';
import { SlideTopToolsRaw } from './raw';
import withStyles from 'react-jss';
import { toolRepository } from '~/domains/repositories/tool';
import { useObserver } from 'mobx-react-lite';
import { useList } from '~/domains/abstractions/list/react/use-list';
import { styles } from './styles';

import type { JSSObject } from '~/domains/app/jss/types';

type InjectedProps = {
  classes: JSSObject,
};

const SlideTopToolsBusinessProvider = (props: InjectedProps) =>
  useObserver(() => {
    const [list, error, isHydrating] = useList((loadedLength) =>
      toolRepository
        .getTools({
          skip: loadedLength,
        })
        .then((tools) => tools.map((tool) => tool.id)),
    );

    return (
      <SlideTopToolsRaw
        list={list}
        error={error}
        isHydrating={isHydrating}
        {...props}
      />
    );
  });

export const SlideTopTools = withStyles(styles)(SlideTopToolsBusinessProvider);
