// @flow

import React from 'react';
import classnames from 'classnames';
import { SomethingWrong } from '~/components/composite/something-wrong';
import {
  Button,
  Spinner,
  Container,
  Grid,
  Heading,
  Icon,
  Paragraph,
} from 'ui.rhamb.io';
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
      <Container text>
        <div className={classes.heading}>
          <Heading as="h2" size="h2">
            Wait, is this free?
          </Heading>
          <Paragraph primary light>
            Yes, but we have payable subscription. Here you can see our free and
            paid plans.
          </Paragraph>
        </div>
      </Container>
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
    </div>
  );
};
