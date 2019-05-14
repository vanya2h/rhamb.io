// @flow

import { Entity } from '~/domains/abstractions/entity/constructor';
import { Process } from '~/domains/abstractions/process/constructor';
import { api } from '~/domains/app/api-client';

import type { Shape } from '~/domains/entities/plan/types';

type Props = {
  id: string,
  processState?: Process<Shape>,
};

export class Plan extends Entity<Shape> {
  constructor(props: Props) {
    super({
      id: props.id,
      processState: props.processState,
      loader: () =>
        api.plan.getPlan({
          id: props.id,
        }),
    });
  }
}
