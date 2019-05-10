// @flow

import React from 'react';
import { Icon, Button, Heading, HorizontalMenu, Paragraph } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
};

export const Slide01Raw = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Paragraph light primary>
          What is rhamb.io?
        </Paragraph>
        <Heading mega className={classes.title} size="h2" as="h2">
          Your personal guide in <span>javascript</span> world
        </Heading>
        <Paragraph light className={classes.paragraph}>
          Learn your favorite tools & frameworks with speed of light. Compose
          your skills like never before. Join us now.
        </Paragraph>
        <HorizontalMenu>
          <Button
            arrowed
            icon={<Icon size={16} icon="Video" />}
            className={classes.button}
          >
            Watch video
          </Button>
        </HorizontalMenu>
      </div>
      <div className={classes.right}>
        <img src={require('./assets/slide_01.svg')} width="100%" />
      </div>
    </div>
  );
};
