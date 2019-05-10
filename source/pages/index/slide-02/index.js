// @flow

import React from 'react';
import { Slide02Raw } from './raw';
import withStyles from 'react-jss';
import { toolRepository } from '~/domains/repositories/tool';
import { useObserver } from 'mobx-react-lite';
import { useList } from '~/domains/abstractions/list/react/use-list';
import { styles } from './styles';

import type { JSSObject } from '~/domains/app/jss/types';

type InjectedProps = {
  classes: JSSObject,
};

const Slide02BusinessProvider = (props: InjectedProps) => {
  return useObserver(() => {
    const [entities, error, isHydrating] = useList((loadedLength) =>
      toolRepository
        .getTools({
          skip: loadedLength,
        })
        .then((tools) => tools.map((tool) => tool.id)),
    );

    return (
      <Slide02Raw
        toolsIds={entities}
        error={error}
        isHydrating={isHydrating}
        {...props}
      />
    );
  });
};

export const Slide02 = withStyles(styles)(Slide02BusinessProvider);
