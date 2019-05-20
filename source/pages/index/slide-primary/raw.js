// @flow

import React from 'react';

import {
  Icon,
  Button,
  Heading,
  Grid,
  HorizontalMenu,
  Paragraph,
} from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
};

export const SlidePrimaryRaw = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid>
        <Grid.Row className={classes.row}>
          <Grid.Column
            options={{
              mobile: {
                width: 12,
              },
              tablet: {
                width: 6,
              },
            }}
          >
            <img src={require('./assets/slide_01.svg')} width="90%" />
          </Grid.Column>
          <Grid.Column
            options={{
              mobile: {
                width: 12,
              },
              tablet: {
                width: 6,
              },
            }}
          >
            <Paragraph light primary>
              What is rhamb.io?
            </Paragraph>
            <Heading className={classes.title} size="h2" as="h2">
              Your personal guide in <span>javascript</span> world
            </Heading>
            <Paragraph light primary className={classes.paragraph}>
              Learn your favorite tools & frameworks with speed of light.
              Compose your skills like never before. Join us now.
            </Paragraph>
            <HorizontalMenu className={classes.actions}>
              <Button
                arrowed
                icon={<Icon size={16} icon="Video" />}
                className={classes.button}
              >
                Watch video
              </Button>
              <Button arrowed accent className={classes.button}>
                Sign up
              </Button>
            </HorizontalMenu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
