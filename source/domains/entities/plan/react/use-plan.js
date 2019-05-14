// @flow

import { useEffect, useState } from 'react';
import { plansService } from '~/domains/app/plans';
import { useObserver } from 'mobx-react-lite';

export const usePlan = (planId) => {
  return useObserver(() => {
    const [plan, setPlan] = useState();

    useEffect(() => {
      const plans = plansService.plans.state.result;

      if (plans) {
        setPlan(plans.find((iterablePlan) => iterablePlan.id === planId));
      }
    }, [plansService.plans.state.status]);

    const isHydrating = plansService.plans.state.status === 'processing';
    const error = plansService.plans.state.error;

    return [plan, error, isHydrating];
  });
};
