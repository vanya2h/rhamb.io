// @flow

import React from 'react';
import { SlidePlansRaw } from './raw';
import withStyles from 'react-jss';
import { useObserver } from 'mobx-react-lite';
import { plansService } from '~/domains/app/plans';
import { usePlanList } from '~/domains/app/plans/react/use-plan-list';
import { styles } from './styles';

import type { JSSObject } from '~/domains/app/jss/types';

type InjectedProps = {
  classes: JSSObject,
};

const SlidePlansBusinessProvider = (props: InjectedProps) =>
  useObserver(() => {
    const [plansIds, error, isHydrating] = usePlanList({
      sort: (a, b) => a.data.cost - b.data.cost,
    });

    return (
      <SlidePlansRaw
        plansIds={plansIds}
        isHydrating={isHydrating}
        error={error}
        onReload={plansService.init}
        {...props}
      />
    );
  });

export const SlidePlans = withStyles(styles)(SlidePlansBusinessProvider);
