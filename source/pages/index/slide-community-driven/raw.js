// @flow

import React from 'react';
import { ShadowButton } from '~/components/wrappers/shadow-button';
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
          <Paragraph primary light>
            Really simple steps to make a contribution
          </Paragraph>

          <Paragraph light className={classes.description} primary>
            All our guides is provided by our community. Everybody can make a
            contribution. Give some weight to your name with your first
            contribution
          </Paragraph>
          <ShadowButton
            arrowed
            icon={<Icon size={16} icon="Codepen" />}
            className={classes.button}
          >
            Become a contributor now
          </ShadowButton>
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
        <img
          className={classes.image}
          src={require('./assets/man.svg')}
          width="100%"
        />
      </Grid.Column>
    </Grid.Row>
  );
};
