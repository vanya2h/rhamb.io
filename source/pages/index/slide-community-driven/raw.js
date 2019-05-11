// @flow

import React from 'react';
import { Heading, Icon, Paragraph } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
};

export const SlideCommunityDrivenRaw = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.content}>
          <Heading as="h3" mega size="h3">
            We are community-driven
          </Heading>
          <Paragraph primary>
            Really simple steps to make a contribution
          </Paragraph>
          <div className={classes.steps}>
            <div className={classes.step}>
              <Icon className={classes.icon} icon="MessageCircle" size={18} />
              <Paragraph>Write draft</Paragraph>
            </div>
            <div className={classes.step}>
              <Icon className={classes.icon} icon="UploadCloud" size={18} />
              <Paragraph>Push changes</Paragraph>
            </div>
            <div className={classes.step}>
              <Icon className={classes.icon} icon="ThumbsUp" size={18} />
              <Paragraph>Be happy</Paragraph>
            </div>
          </div>
          <Paragraph className={classes.description} primary>
            All our guides is provided by our community. Everybody can make a
            contribution to our open source education project - rhamb.io
          </Paragraph>
        </div>
      </div>
      <div className={classes.right}>
        <img src={require('./assets/man.svg')} width="100%" />
      </div>
    </div>
  );
};
