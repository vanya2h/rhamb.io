// @flow

import React from 'react';
import { Button, Heading, Icon, Paragraph } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
};

export const Slide04Raw = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img src={require('./assets/man.svg')} width="100%" />
      </div>
      <div className={classes.right}>
        <div className={classes.steps}>
          <div className={classes.step}>
            <Icon className={classes.icon} icon="MessageCircle" size={24} />
            <Paragraph light>Write your draft</Paragraph>
          </div>
          <div className={classes.arrow}>
            <Icon className={classes.icon} size={17} icon="ArrowRight" />
          </div>
          <div className={classes.step}>
            <Icon className={classes.icon} icon="UploadCloud" size={24} />
            <Paragraph light>Push your changes</Paragraph>
          </div>
          <div className={classes.arrow}>
            <Icon className={classes.icon} size={17} icon="ArrowRight" />
          </div>
          <div className={classes.step}>
            <Icon className={classes.icon} icon="ThumbsUp" size={24} />
            <Paragraph light>Be happy</Paragraph>
          </div>
        </div>
        <div className={classes.content}>
          <Heading as="h3" mega size="h3">
            We are community-driven
          </Heading>
          <Paragraph primary light>
            All our guides is provided by our community. Everybody can make a
            contribution to our open source education project - rhamb.io
          </Paragraph>
          <Button className={classes.button} arrowed>
            Contributor guide
          </Button>
        </div>
      </div>
    </div>
  );
};
