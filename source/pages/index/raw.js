// @flow

import React from 'react';
import { Slide } from './slide';
import { Slide01 } from './slide-01';
import { Slide02 } from './slide-02';
import { Slide03 } from './slide-03';
import { Slide04 } from './slide-04';
import { Container } from 'ui.rhamb.io';
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
          <Container>
            <Slide01 />
          </Container>
        </Slide>
        <Slide>
          <Container>
            <Slide02 />
          </Container>
        </Slide>
        <Slide>
          <Container>
            <Slide03 />
          </Container>
        </Slide>
        <Slide>
          <Container>
            <Slide04 />
          </Container>
        </Slide>
      </div>
    </DefaultLayout>
  );
};
