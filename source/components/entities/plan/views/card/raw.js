// @flow

import React from 'react';
import classnames from 'classnames';
import { Button, Heading, Paragraph, Icon, Text } from 'ui.rhamb.io';
import { Shape as PlanShape } from '~/domains/entities/plan/types';
import { getFormattedPrice, getPeriodLabel } from '~/domains/app/plans/utils';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  planData: ?PlanShape,
  classes: JSSObject,
};

export const PlanCardViewRaw = (props: Props) => {
  const { planData, classes } = props;

  const isFree = planData.cost === 0;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Heading mega as="h3" size="h3">
          {planData.title}
        </Heading>
        <Paragraph className={classes.annotation} light>
          {planData.annotation}
        </Paragraph>
      </div>
      <div className={classes.price}>
        <Heading mega as="h3" size="h3">
          <span className={classes['price-number']}>
            {getFormattedPrice(planData.cost)}
          </span>
          <span>{getPeriodLabel(planData.period)}</span>
        </Heading>
      </div>
      <div className={classes.attributes}>
        {planData.attributes.map((attribute, index) => (
          <div key={index} className={classes['attributes-item']}>
            <Icon className={classes['attributes-icon']} icon="Plus" />
            <Text>{attribute}</Text>
          </div>
        ))}
      </div>
      <div className={classes['button-wrapper']}>
        <Button
          className={classnames(classes.button, {
            [classes['button-primary']]: !isFree,
          })}
        >
          {planData.buttonText}
        </Button>
      </div>
    </div>
  );
};
