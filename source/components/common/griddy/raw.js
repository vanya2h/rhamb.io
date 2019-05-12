// @flow

import React from 'react';
import type { JSSObject } from '~/domains/app/jss/types';

type Props = {|
  classes: JSSObject,
  children: any,
  min: number,
|};

export const GriddyRaw = (props: Props) => {
  const { classes, children, min } = props;

  return (
    <div
      className={classes.root}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};
