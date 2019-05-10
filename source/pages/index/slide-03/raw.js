// @flow

import React from 'react';
import classnames from 'classnames';
import { SomethingWrong } from '~/components/composite/something-wrong';
import { List } from '~/domains/abstractions/list/constructor';
import { Button, Spinner, Heading, Icon, Paragraph } from 'ui.rhamb.io';
import { Feedback } from '~/components/entities/feedback';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  list: List,
  error: ?Error,
  isHydrating: boolean,
};

export const Slide03Raw = (props: Props) => {
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
        <Heading size="h2" as="h2">
          People talk about rhamb.io
        </Heading>
        <Paragraph light primary>
          We love our community and community loves us
        </Paragraph>
      </div>
      <div className={classes.list} as="div">
        {list.entities.map((feedbackId) => (
          <div key={feedbackId} className={classes.item}>
            <Feedback feedbackId={feedbackId} />
          </div>
        ))}
      </div>
      <div className={classes.bottom}>
        <Button arrowed>Apply my opinion too</Button>
      </div>
    </div>
  );
};
