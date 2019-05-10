// @flow

import React from 'react';
import { Icon, Input, HorizontalMenu, Link } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {|
  classes: JSSObject,
  activeLocation: string,
|};

export const NavigationRaw = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <HorizontalMenu className={classes.menu}>
          <Link href="/tools">
            <HorizontalMenu.Item className={classes.logo}>
              Home
            </HorizontalMenu.Item>
          </Link>
          <Link href="/tools">
            <HorizontalMenu.Item>Explore Javascript</HorizontalMenu.Item>
          </Link>
          <Link href="/paths">
            <HorizontalMenu.Item>Workspaces</HorizontalMenu.Item>
          </Link>
          <Link href="/about">
            <HorizontalMenu.Item>About Rhamb.io</HorizontalMenu.Item>
          </Link>
          <div className={classes.input}>
            <Input
              className={classes.search}
              placeholder="Search for libraries, tools.."
            />
          </div>
        </HorizontalMenu>
      </div>
      <div className={classes.right}>
        <HorizontalMenu className={classes.menu}>
          <Link href="/login">
            <HorizontalMenu.Item>Log in</HorizontalMenu.Item>
          </Link>
          <Link className={classes.signup} href="/signup">
            <HorizontalMenu.Item>
              <span>Sign up</span>
              <Icon className={classes.icon} size={16} icon="ArrowRight" />
            </HorizontalMenu.Item>
          </Link>
        </HorizontalMenu>
      </div>
    </div>
  );
};
