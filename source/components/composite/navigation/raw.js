// @flow

import React from 'react';
import { Icon, Button, Input, HorizontalMenu, Link } from 'ui.rhamb.io';

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
            <HorizontalMenu.Item>Explore Javascript</HorizontalMenu.Item>
          </Link>
          <Link href="/paths">
            <HorizontalMenu.Item>Explore Workspaces</HorizontalMenu.Item>
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
          <HorizontalMenu.Item>
            <Button icon={<Icon icon="LogIn" size={17} />}>Log in</Button>
          </HorizontalMenu.Item>
          <HorizontalMenu.Item>
            <Button icon={<Icon icon="UserPlus" size={17} />} accent>
              Sign up
            </Button>
          </HorizontalMenu.Item>
        </HorizontalMenu>
      </div>
    </div>
  );
};
