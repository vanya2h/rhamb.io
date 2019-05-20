// @flow

import React from 'react';
import { Navigation } from '~/components/composite/navigation';
import { Footer } from '~/components/composite/footer';
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
        <Navigation />
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.bottom}>
        <Footer />
      </div>
    </div>
  );
};
