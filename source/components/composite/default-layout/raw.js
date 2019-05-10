// @flow

import React from 'react';
import { Container } from 'ui.rhamb.io';
import { Navigation } from '~/components/composite/navigation';
import type { JSSObject } from '~/domains/app/jss/types';

type Props = {|
  classes: JSSObject,
  children: any,
|};

export const DefaultLayoutRaw = (props: Props) => {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Container>
          <Navigation />
        </Container>
      </div>
      <div className={classes.content}>
        <Container>{children}</Container>
      </div>
      <div className={classes.bottom}>
        <Container>Bottom</Container>
      </div>
    </div>
  );
};
