// @flow

import React from 'react';
import { Slide } from './slide';
import { Slide01 } from './slide-01';
import { Slide02 } from './slide-02';
import { DefaultLayout } from '~/components/composite/default-layout';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {|
  classes: JSSObject,
|};

export const IndexPageRaw = (props: Props) => {
  const { classes } = props;

  return (
    <DefaultLayout>
      <div className={classes.inner}>
        <Slide>
          <Slide01 />
        </Slide>
        <Slide>
          <Slide02 />
        </Slide>
      </div>
    </DefaultLayout>
  );
};
