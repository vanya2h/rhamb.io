// @flow

import { processService } from '~/domains/abstractions/process';
import { api } from '~/domains/app/api-client';
import { planService } from '~/domains/entities/plan';
import { Plan } from '~/domains/entities/plan/constructor';
import { Process } from '~/domains/abstractions/process/constructor';

const mapPlans = (plan) =>
  planService.createPlan({
    id: plan.id,
    processState: processService.createProcess({
      title: 'List fetching',
      state: {
        status: 'success',
        result: plan,
      },
    }),
  });

class PlansService {
  plans: Process<Plan[]> = processService.createProcess({
    title: 'Plan service loading',
  });

  init = async () => {
    this.plans.start();

    try {
      const plans = await api.plan.getPlans();

      this.plans.finish(plans.map(mapPlans));
    } catch (error) {
      this.plans.catch(error);

      throw error;
    }
  };
}

export const plansService = new PlansService();
