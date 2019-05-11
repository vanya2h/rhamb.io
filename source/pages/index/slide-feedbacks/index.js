// @flow

import React from 'react';
import { SlideFeedbacksRaw } from './raw';
import withStyles from 'react-jss';
import { feedbackRepository } from '~/domains/repositories/feedback';
import { useObserver } from 'mobx-react-lite';
import { useList } from '~/domains/abstractions/list/react/use-list';
import { styles } from './styles';

import type { JSSObject } from '~/domains/app/jss/types';

type InjectedProps = {
  classes: JSSObject,
};

const SlideFeedbacksBusinessProvider = (props: InjectedProps) =>
  useObserver(() => {
    const [list, error, isHydrating] = useList((loadedLength) =>
      feedbackRepository
        .getFeedbacks({
          skip: loadedLength,
          limit: 3,
          primary: 1,
        })
        .then((tools) => tools.map((tool) => tool.id)),
    );

    return (
      <SlideFeedbacksRaw
        list={list}
        error={error}
        isHydrating={isHydrating}
        {...props}
      />
    );
  });

export const SlideFeedbacks = withStyles(styles)(
  SlideFeedbacksBusinessProvider,
);
