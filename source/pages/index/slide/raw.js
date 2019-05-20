// @flow

import React from 'react';
import classnames from 'classnames';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  children: any,
  className?: string,
  black?: boolean,
  grey?: boolean,
  fullscreen?: boolean,
};

export const SlideRaw = (props: Props) => {
  const { classes, children, className, black, grey, fullscreen } = props;

  return (
    <div
      className={classnames(
        classes.root,
        { [classes.root_black]: black },
        { [classes.root_grey]: grey },
        { [classes.root_fullscreen]: fullscreen },
        className,
      )}
    >
      {children}
    </div>
  );
};
