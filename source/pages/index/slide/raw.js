// @flow

import React from 'react';
import classnames from 'classnames';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  children: any,
  black?: boolean,
};

export const SlideRaw = (props: Props) => {
  const { classes, children, black } = props;

  return (
    <div className={classnames(classes.root, { [classes.root_black]: black })}>
      {children}
    </div>
  );
};
