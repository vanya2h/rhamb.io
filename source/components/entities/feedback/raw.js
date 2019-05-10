// @flow

import React from 'react';
import { Feedback } from '~/domains/entities/feedback/constructor';
import { FeedbackCardView } from '~/components/entities/feedback/views/card';

import type { JSSObject } from '~/domains/app/jss/types';
import type { View } from '~/components/entities/feedback/types';

type Props = {
  classes: JSSObject,
  isHydrating: Boolean,
  feedback: ?Feedback,
  error: ?Error,
  view: View,
};

/**
 * @todo error view
 * @todo hydrating view
 */

export const FeedbackRaw = (props: Props) => {
  const { feedback, view, isHydrating, error } = props;

  if (error) {
    return <div>Error</div>;
  }

  if (isHydrating || !feedback) {
    return <div>Hydrating..</div>;
  }

  switch (view) {
    case 'card': {
      return <FeedbackCardView feedbackData={feedback.data} />;
    }
    default: {
      return <FeedbackCardView feedbackData={feedback.data} />;
    }
  }
};
