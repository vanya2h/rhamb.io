// @flow

import { Repository } from '~/domains/abstractions/repository/constructor';
import { processService } from '~/domains/abstractions/process';
import { feedbackService } from '~/domains/entities/feedback';
import { api } from '~/domains/app/api-client';

import type { Feedback } from '~/domains/entities/feedback/constructor';

const getDefaultData = (): Feedback[] => {
  return [];
};

class FeedbackRepository extends Repository<Feedback> {
  constructor() {
    super(getDefaultData());
  }

  getFeedbacks = async (query): Promise<Feedback[]> => {
    const feedbacks = await api.feedback.getFeedbacks(query);

    this.addEntities(
      feedbacks.map((feedback) =>
        feedbackService.createFeedback({
          id: feedback.id,
          processState: processService.createProcess({
            title: 'Feedback fetching',
            state: {
              status: 'success',
              result: feedback,
            },
          }),
        }),
      ),
    );

    return feedbacks;
  };

  getFeedback = async (query): Promise<Feedback> => {
    const feedback = await api.feedback.getFeedback(query);

    this.addEntities([
      feedbackService.createFeedback({
        id: feedback.id,
        processState: processService.createProcess({
          title: 'Feedback fetching',
          state: {
            status: 'success',
            result: feedback,
          },
        }),
      }),
    ]);

    return feedback;
  };
}

export const feedbackRepository = new FeedbackRepository();
