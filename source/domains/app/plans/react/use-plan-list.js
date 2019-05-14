// @flow

import { useState, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { plansService } from '~/domains/app/plans';

const { init } = plansService;

export const usePlanList = (options: {
  sort: (a: number, b: number) => boolean,
}) =>
  useObserver(() => {
    const [plansIds, setPlans] = useState(null);

    useEffect(() => {
      const { status, result } = plansService.plans.state;

      switch (status) {
        case 'idle': {
          init();
          break;
        }
        case 'success': {
          const sorted = options.sort ? result.sort(options.sort) : result;

          setPlans(sorted.map((plan) => plan.id));
          break;
        }
        default: {
          break;
        }
      }
    }, [plansService.plans.state.status]);

    const isHydrating = plansService.plans.state.status === 'processing';
    const error = plansService.plans.state.error;

    return [plansIds, error, isHydrating];
  });
