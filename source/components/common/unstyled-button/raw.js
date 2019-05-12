// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  children?: React.Node,
  classes: JSSObject,
  className?: string,
};

export const UnstyledButtonRaw = (props: Props) => {
  const { classes, className, children, ...restProps } = props;

  return (
    <button className={classnames(className, classes.root)} {...restProps}>
      {children}
    </button>
  );
};
