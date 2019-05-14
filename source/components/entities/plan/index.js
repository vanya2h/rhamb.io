// @flow

import React from 'react';
import { usePlan } from '~/domains/entities/plan/react/use-plan';
import { PlanRaw } from './raw';

import type { View } from '~/components/entities/plan/types';

type Props = {
  planId: string,
  view: View,
};

const PlanBusinessProvider = (props: Props) => {
  const [plan, error, isHydrating] = usePlan(props.planId);

  return (
    <PlanRaw plan={plan} error={error} isHydrating={isHydrating} {...props} />
  );
};

export const Plan = PlanBusinessProvider;
