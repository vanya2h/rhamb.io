// @flow

import React from 'react';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  children: any,
};

export const SlideRaw = (props: Props) => {
  const { classes, children } = props;

  return <div className={classes.root}>{children}</div>;
};
