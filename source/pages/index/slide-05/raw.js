// @flow

import React from 'react';
// import { Button, Heading, Icon, Paragraph } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
};

export const Slide05Raw = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <div className={classes.image}>
          <img src={require('./assets/guys.svg')} width="100%" />
        </div>
      </div>
    </div>
  );
};
