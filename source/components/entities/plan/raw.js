// @flow

import React from 'react';
import { Plan } from '~/domains/entities/plan/constructor';
import { PlanCardView } from '~/components/entities/plan/views/card';

import type { JSSObject } from '~/domains/app/jss/types';
import type { View } from '~/components/entities/plan/types';

type Props = {
  classes: JSSObject,
  isHydrating: Boolean,
  plan: ?Plan,
  error: ?Error,
  view: View,
};

/**
 * @todo error view
 * @todo hydrating view
 */

export const PlanRaw = (props: Props) => {
  const { plan, view, isHydrating, error } = props;

  if (error) {
    return <div>Error</div>;
  }

  if (isHydrating || !plan) {
    return <div>Hydrating..</div>;
  }

  switch (view) {
    case 'card': {
      return <PlanCardView planData={plan.data} />;
    }
    default: {
      return <PlanCardView planData={plan.data} />;
    }
  }
};
