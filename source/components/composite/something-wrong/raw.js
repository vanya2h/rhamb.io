// @flow

import * as React from 'react';
import { Icon, Heading, Paragraph } from 'ui.rhamb.io';
import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  title: string,
  annotation: string,
  children: React.Node,
};

export const SomethingWrongRaw = (props: Props) => {
  const { classes, title, annotation, children } = props;

  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <Icon icon="Frown" size={40} />
      </div>
      <Heading size="h4" as="h4">
        {title || 'Something went wrong'}
      </Heading>
      <Paragraph light>
        {annotation ||
          'Please, try to reload content or contact our support service. Thanks'}
      </Paragraph>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
