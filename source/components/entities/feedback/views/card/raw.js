// @flow

import React from 'react';
import { Paragraph, Heading } from 'ui.rhamb.io';
import { api } from '~/domains/app/api-client';
import { Shape as FeedbackShape } from '~/domains/entities/feedback/types';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  feedbackData: ?FeedbackShape,
  classes: JSSObject,
};

export const FeedbackCardViewRaw = (props: Props) => {
  const { feedbackData, classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img
          src={api.resolveImage(feedbackData.author.image)}
          alt={feedbackData.author.name}
          width="100px"
          height="100px"
        />
      </div>
      <Heading mega className={classes.name} as="h5" size="h5">
        {feedbackData.author.name}
      </Heading>
      <Paragraph light>{feedbackData.author.description}</Paragraph>
      <Paragraph primary className={classes.content}>
        {feedbackData.content}
      </Paragraph>
    </div>
  );
};
