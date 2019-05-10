// @flow

import { Entity } from '~/domains/abstractions/entity/constructor';
import { Process } from '~/domains/abstractions/process/constructor';
import { api } from '~/domains/app/api-client';

import type { Shape } from '~/domains/entities/tool/types';

type Props = {
  id: string,
  processState?: Process<Shape>,
};

export class Feedback extends Entity<Shape> {
  constructor({ id, processState }: Props) {
    super({
      id,
      processState,
      loader: () =>
        api.feedback.getFeedback({
          id,
        }),
    });
  }
}
