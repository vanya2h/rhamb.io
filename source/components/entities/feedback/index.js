// @flow

import React from 'react';
import { useFeedback } from '~/domains/entities/feedback/react/use-feedback';
import { FeedbackRaw } from './raw';

import type { View } from '~/components/entities/feedback/types';

type Props = {
  feedbackId: string,
  view: View,
};

const FeedbackBusinessProvider = (props: Props) => {
  const [feedback, error, isHydrating] = useFeedback(props.feedbackId);

  return (
    <FeedbackRaw
      feedback={feedback}
      error={error}
      isHydrating={isHydrating}
      {...props}
    />
  );
};

export const Feedback = FeedbackBusinessProvider;
