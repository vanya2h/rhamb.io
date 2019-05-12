// @flow

import React from 'react';
import { Heading, Icon, Paragraph, Grid } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
};

export const SlideCommunityDrivenRaw = (props: Props) => {
  const { classes } = props;

  return (
    <Grid.Row className={classes.root}>
      <Grid.Column
        options={{
          mobile: {
            width: 12,
            order: 2,
          },
          desktop: {
            width: 8,
            order: 1,
          },
        }}
      >
        <div className={classes.content}>
          <Heading as="h2" size="h2">
            We are community-driven
          </Heading>
          <Paragraph primary>
            Really simple steps to make a contribution
          </Paragraph>
          <Grid.Row className={classes.steps}>
            <Grid.Column
              options={{
                mobile: {
                  width: 12,
                },
                tablet: {
                  width: 4,
                },
              }}
            >
              <div className={classes.step}>
                <Icon className={classes.icon} icon="MessageCircle" size={18} />
                Write drafts
              </div>
            </Grid.Column>
            <Grid.Column
              options={{
                mobile: {
                  width: 12,
                },
                tablet: {
                  width: 4,
                },
              }}
            >
              <div className={classes.step}>
                <Icon className={classes.icon} icon="UploadCloud" size={18} />
                Push changes
              </div>
            </Grid.Column>
            <Grid.Column
              options={{
                mobile: {
                  width: 12,
                },
                tablet: {
                  width: 4,
                },
              }}
            >
              <div className={classes.step}>
                <Icon className={classes.icon} icon="ThumbsUp" size={18} />
                Be contributor
              </div>
            </Grid.Column>
          </Grid.Row>
          <Paragraph className={classes.description} primary>
            All our guides is provided by our community. Everybody can make a
            contribution to our open source education project - rhamb.io
          </Paragraph>
        </div>
      </Grid.Column>
      <Grid.Column
        options={{
          mobile: {
            width: 12,
            order: 1,
          },
          tablet: {
            width: 7,
            order: 1,
          },
          desktop: {
            width: 4,
            order: 2,
          },
        }}
      >
        <img src={require('./assets/man.svg')} width="100%" />
      </Grid.Column>
    </Grid.Row>
  );
};
