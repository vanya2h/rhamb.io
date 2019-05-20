// @flow

import React from 'react';

import {
  Text,
  Icon,
  Heading,
  Container,
  VerticalMenu,
  Paragraph,
  Grid,
} from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {|
  classes: JSSObject,
  children: any,
|};

export const FooterRaw = (props: Props) => {
  const { classes } = props;

  return (
    <Container className={classes.root}>
      <Grid.Row>
        <Grid.Column
          options={{
            handy: {
              width: 6,
            },
            desktop: {
              width: 2,
            },
          }}
        >
          <Heading mega className={classes.heading} as="h5" size="h5">
            Follow us
          </Heading>
          <VerticalMenu>
            <VerticalMenu.Item>Vk.com</VerticalMenu.Item>
            <VerticalMenu.Item>Twitter</VerticalMenu.Item>
            <VerticalMenu.Item>Github</VerticalMenu.Item>
            <VerticalMenu.Item>Instagram</VerticalMenu.Item>
          </VerticalMenu>
        </Grid.Column>
        <Grid.Column
          options={{
            handy: {
              width: 6,
            },
            tablet: {
              width: 6,
            },
            desktop: {
              width: 2,
            },
          }}
        >
          <Heading mega className={classes.heading} as="h5" size="h5">
            Company
          </Heading>
          <VerticalMenu>
            <VerticalMenu.Item>About rhamb</VerticalMenu.Item>
            <VerticalMenu.Item>Tech blog</VerticalMenu.Item>
            <VerticalMenu.Item>Careers</VerticalMenu.Item>
            <VerticalMenu.Item>For investors</VerticalMenu.Item>
          </VerticalMenu>
        </Grid.Column>
        <Grid.Column
          options={{
            handy: {
              width: 6,
            },
            tablet: {
              width: 6,
            },
            desktop: {
              width: 2,
            },
          }}
        >
          <Heading mega className={classes.heading} as="h5" size="h5">
            Legal
          </Heading>
          <VerticalMenu>
            <VerticalMenu.Item>Privacy policy</VerticalMenu.Item>
            <VerticalMenu.Item>Terms of use</VerticalMenu.Item>
          </VerticalMenu>
        </Grid.Column>
        <Grid.Column
          options={{
            handy: {
              width: 6,
            },
            tablet: {
              width: 6,
            },
            desktop: {
              width: 2,
            },
          }}
        >
          <Heading mega className={classes.heading} as="h5" size="h5">
            Support
          </Heading>
          <VerticalMenu>
            <VerticalMenu.Item>FAQ</VerticalMenu.Item>
            <VerticalMenu.Item>Contact us</VerticalMenu.Item>
            <VerticalMenu.Item>Help desk</VerticalMenu.Item>
          </VerticalMenu>
        </Grid.Column>
        <Grid.Column
          className={classes['block-logo']}
          options={{
            handy: {
              width: 12,
              offset: 0,
            },
            mobile: {
              width: 12,
            },
            tablet: {
              width: 6,
            },
            desktop: {
              width: 3,
              offset: 1,
            },
          }}
        >
          <Paragraph light primary className={classes.subtitle}>
            Explore Javascript on your pace with ease
          </Paragraph>
          <div className={classes.language}>
            <Text light>
              English <Icon size="16" icon="ChevronDown" />
            </Text>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};
