// @flow

import React, { useState } from 'react';
import classnames from 'classnames';
import { UnstyledButton } from '~/components/common/unstyled-button';
import { Icon, Input, HorizontalMenu, ProgressiveRender } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {|
  classes: JSSObject,
  activeLocation: string,
|};

export const NavigationRaw = (props: Props) => {
  const { classes } = props;

  const [openBurger, setOpenBurger] = useState(false);

  const Menu = () => (
    <HorizontalMenu className={classes.menu}>
      <HorizontalMenu.Item className={classes.item}>
        Personal feed
      </HorizontalMenu.Item>
      <HorizontalMenu.Item className={classes.item}>
        Explore Javascript
      </HorizontalMenu.Item>
      <div className={classes.search}>
        <ProgressiveRender
          options={{
            handy: {
              render: () => (
                <HorizontalMenu.Item className={classes.item}>
                  <Icon className={classes.icon} icon="Search" size={16} />
                </HorizontalMenu.Item>
              ),
            },
            desktop: {
              render: () => (
                <div className={classes['search-input-wrapper']}>
                  <Icon className={classes.icon} icon="Search" size={16} />
                  <Input
                    className={classes.input}
                    placeholder="Enter search query here.."
                  />
                </div>
              ),
            },
          }}
        />
      </div>
    </HorizontalMenu>
  );

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.left}>
          <ProgressiveRender
            options={{
              handy: {
                render: () => (
                  <UnstyledButton
                    onClick={() => setOpenBurger(!openBurger)}
                    className={classes.burger}
                  >
                    <Icon
                      className={classes.icon}
                      icon={openBurger ? 'X' : 'Menu'}
                      size={20}
                    />
                    {openBurger ? 'Hide' : 'Menu'}
                  </UnstyledButton>
                ),
              },
              mobile: {
                render: Menu,
              },
            }}
          />
        </div>
        <div className={classes.right}>
          <HorizontalMenu className={classes.menu}>
            <HorizontalMenu.Item className={classes.item}>
              <ProgressiveRender
                options={{
                  handy: {
                    render: () => (
                      <React.Fragment>
                        <Icon icon="LogIn" size={16} className={classes.icon} />{' '}
                        Log in
                      </React.Fragment>
                    ),
                  },
                  mobile: {
                    render: () => <React.Fragment>Log in</React.Fragment>,
                  },
                  tablet: {
                    render: () => (
                      <React.Fragment>
                        <Icon icon="LogIn" size={16} className={classes.icon} />{' '}
                        Log in
                      </React.Fragment>
                    ),
                  },
                }}
              />
            </HorizontalMenu.Item>
            <HorizontalMenu.Item
              className={classnames(classes.signup, classes.item)}
            >
              <ProgressiveRender
                options={{
                  handy: {
                    render: () => (
                      <React.Fragment>
                        <Icon
                          icon="UserPlus"
                          size={16}
                          className={classes.icon}
                        />{' '}
                        Sign up
                      </React.Fragment>
                    ),
                  },
                  mobile: {
                    render: () => <React.Fragment>Sign up</React.Fragment>,
                  },
                  tablet: {
                    render: () => (
                      <React.Fragment>
                        <Icon
                          icon="UserPlus"
                          size={16}
                          className={classes.icon}
                        />{' '}
                        Sign up
                      </React.Fragment>
                    ),
                  },
                }}
              />
            </HorizontalMenu.Item>
          </HorizontalMenu>
        </div>
      </div>
      {openBurger && (
        <div className={classes.dropdown}>
          <Menu />
        </div>
      )}
    </div>
  );
};
