// @flow

import React from 'react';
import classnames from 'classnames';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  children: any,
  className?: string,
  full?: boolean,
  black?: boolean,
  grey?: boolean,
};

export const SlideRaw = (props: Props) => {
  const { classes, children, className, black, grey, full } = props;

  return (
    <div
      className={classnames(
        classes.root,
        { [classes.root_black]: black },
        { [classes.root_grey]: grey },
        { [classes.root_full]: full },
        className,
      )}
    >
      <div className={classes.inner}>{children}</div>
    </div>
  );
};
