// @flow

import React from 'react';
import classnames from 'classnames';
import { SomethingWrong } from '~/components/composite/something-wrong';
import { List } from '~/domains/abstractions/list/constructor';
import { Feedback } from '~/components/entities/feedback';

import {
  HorizontalMenu,
  Button,
  Grid,
  Spinner,
  Heading,
  Icon,
  Paragraph,
} from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  list: List,
  error: ?Error,
  isHydrating: boolean,
};

export const SlideFeedbacksRaw = (props: Props) => {
  const { classes, list, error, isHydrating } = props;

  const reloadHandler = () => {
    list.fetch({
      delay: 1000,
    });
  };

  if (error) {
    return (
      <div className={classnames(classes.root, classes.root_error)}>
        <SomethingWrong>
          <Button
            onClick={reloadHandler}
            icon={<Icon icon="RefreshCcw" size={15} />}
          >
            Reload feedbacks
          </Button>
        </SomethingWrong>
      </div>
    );
  }

  if (isHydrating) {
    return (
      <div className={classnames(classes.root, classes.root_loader)}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Heading size="h3" as="h3">
          People talk about rhamb.io
        </Heading>
        <Paragraph light primary>
          We love our community and community loves us
        </Paragraph>
      </div>
      <Grid.Row className={classes.list}>
        {list.entities.slice(0, 3).map((feedbackId) => (
          <Grid.Column
            options={{
              mobile: {
                width: 12,
              },
              tablet: {
                width: 6,
              },
              desktop: {
                width: 4,
              },
            }}
            key={feedbackId}
          >
            <Feedback feedbackId={feedbackId} />
          </Grid.Column>
        ))}
      </Grid.Row>
      <HorizontalMenu className={classes.bottom}>
        <Button icon={<Icon icon="Smile" size={16} />} arrowed>
          View all opinions
        </Button>
      </HorizontalMenu>
    </div>
  );
};
