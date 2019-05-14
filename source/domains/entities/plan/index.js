// @flow

import { Plan } from '~/domains/entities/plan/constructor';

class PlanService {
  createPlan = (props): Plan => new Plan(props);
}

export const planService = new PlanService();
