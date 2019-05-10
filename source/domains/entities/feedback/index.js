// @flow

import { Feedback } from '~/domains/entities/feedback/constructor';

export const feedbackService = {
  createFeedback: (props): Feedback => new Feedback(props),
};
