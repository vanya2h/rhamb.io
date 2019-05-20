// @flow

import React from 'react';
import classnames from 'classnames';
import { SomethingWrong } from '~/components/composite/something-wrong';
// import { List } from '~/domains/abstractions/list/constructor';
// import { Slider } from '~/components/composite/slider';

import { Button, Spinner, Grid, Heading, Icon, Paragraph } from 'ui.rhamb.io';

import { Plan } from '~/components/entities/plan';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  onReload: Function,
  plansIds: ?(string[]),
  error: ?Error,
  isHydrating: boolean,
};

export const SlidePlansRaw = (props: Props) => {
  const { classes, plansIds, onReload, error, isHydrating } = props;

  if (error) {
    return (
      <div className={classnames(classes.root, classes.root_error)}>
        <SomethingWrong>
          <Button
            onClick={onReload}
            icon={<Icon icon="RefreshCcw" size={15} />}
          >
            Reload content
          </Button>
        </SomethingWrong>
      </div>
    );
  }

  if (isHydrating || !plansIds) {
    return (
      <div className={classnames(classes.root, classes.root_loader)}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Heading as="h2" size="h2">
          But what about the price? Is this free?
        </Heading>
        <Paragraph primary>
          Yes, but we have payable subscription. See our plans
        </Paragraph>
      </div>
      <Grid.Row>
        {plansIds.map((planId) => (
          <Grid.Column
            key={planId}
            options={{
              handy: {
                width: 12,
                order: 1,
              },
              tablet: {
                width: 6,
                order: 1,
              },
              desktop: {
                width: 4,
              },
            }}
          >
            <Plan planId={planId} />
          </Grid.Column>
        ))}
        <Grid.Column
          options={{
            handy: {
              width: 8,
              offset: 2,
              order: 0,
            },
            mobile: {
              width: 6,
              offset: 3,
              order: 0,
            },
            desktop: {
              width: 4,
            },
          }}
        >
          <img
            className={classes.illustration}
            src={require('./assets/illustration.svg')}
            width="100%"
          />
        </Grid.Column>
      </Grid.Row>
      <div className={classes.footer}>
        <Heading as="h1" size="h1" mega>
          Become a true Javascript-ninja
        </Heading>
        <Paragraph primary>With Rhamb.io</Paragraph>
      </div>
    </div>
  );
};
