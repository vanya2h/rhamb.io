// @flow

import React from 'react';
import { Slide } from './slide';
import { Container } from 'ui.rhamb.io';
import { SlidePrimary } from './slide-primary';
import { SlideTopTools } from './slide-top-tools';
import { SlidePlans } from './slide-plans';
import { SlideFeedbacks } from './slide-feedbacks';
import { SlideCommunityDriven } from './slide-community-driven';
import { SlideCollections } from './slide-collections';
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
            <SlideCollections />
          </Container>
        </Slide>
        <Slide>
          <Container>
            <SlidePlans />
          </Container>
        </Slide>
      </div>
    </DefaultLayout>
  );
};
