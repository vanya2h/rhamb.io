// @flow

import { useEffect, useState } from 'react';
import { feedbackRepository } from '~/domains/repositories/feedback';
import { feedbackService } from '~/domains/entities/feedback';
import { useObserver } from 'mobx-react-lite';

export const useFeedback = (feedbackId) => {
  return useObserver(() => {
    const [feedback, setFeedback] = useState();

    const feedbackFromRepository = feedbackRepository.getEntities(
      (feedback) => feedback.id === feedbackId,
    )[0];

    useEffect(() => {
      if (feedbackFromRepository) {
        setFeedback(feedbackFromRepository);
      } else {
        const createdFeedback = feedbackService.createFeedback({
          id: feedbackId,
        });

        createdFeedback.fetch().then(() => {
          feedbackRepository.addElements([createdFeedback]);
        });
      }
    }, [feedbackFromRepository, feedbackId]);

    const isHydrating =
      feedback && feedback.process.state.status === 'processing';
    const error = feedback && feedback.process.state.error;

    return [feedback, error, isHydrating];
  });
};
