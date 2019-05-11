// @flow

import React from 'react';
import { Slide } from './slide';
import { SlidePrimary } from './slide-primary';
import { SlideTopTools } from './slide-top-tools';
import { SlideFeedbacks } from './slide-feedbacks';
import { SlideCommunityDriven } from './slide-community-driven';
import { Slide05 } from './slide-05';
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
            <SlidePrimary />
          </Container>
        </Slide>
        <Slide>
          <Container>
            <SlideTopTools />
          </Container>
        </Slide>
        <Slide>
          <Container>
            <SlideCommunityDriven />
          </Container>
        </Slide>
        <Slide black>
          <Container>
            <SlideFeedbacks />
          </Container>
        </Slide>
        <Slide>
          <Container>
            <Slide05 />
          </Container>
        </Slide>
      </div>
    </DefaultLayout>
  );
};
