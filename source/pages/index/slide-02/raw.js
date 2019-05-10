// @flow

import React from 'react';
import classnames from 'classnames';
import { SomethingWrong } from '~/components/composite/something-wrong';
import { List } from '~/domains/abstractions/list/constructor';

import {
  Button,
  Spinner,
  HorizontalMenu,
  Heading,
  Icon,
  Text,
  Link,
  Paragraph,
} from 'ui.rhamb.io';

import { Tool } from '~/components/entities/tool';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  list: List,
  error: ?Error,
  isHydrating: boolean,
};

export const Slide02Raw = (props: Props) => {
  const { classes, list, error, isHydrating } = props;

  const reloadHandler = () => {
    list.fetch({
      delay: 1000,
    });
  };

  if (error) {
    return (
      <div className={classnames(classes.root, classes.root_error)}>
        <SomethingWrong>
          <Button
            onClick={reloadHandler}
            icon={<Icon icon="RefreshCcw" size={15} />}
          >
            Reload content
          </Button>
        </SomethingWrong>
      </div>
    );
  }

  if (isHydrating) {
    return (
      <div className={classnames(classes.root, classes.root_loader)}>
        <Spinner />
      </div>
    );
  }

  const topTools = list.entities.slice(0, 3);
  const bottomTools = list.entities.slice(3, 5);

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Heading mega className={classes.title} size="h2" as="h2">
          Best libraries
        </Heading>
        <Paragraph light primary>
          Fast references on every major Javascript library
        </Paragraph>
      </div>
      <div className={classes.top}>
        <HorizontalMenu as="div">
          {topTools.map((toolId) => (
            <div key={toolId} className={classes.item}>
              <Tool toolId={toolId} />
            </div>
          ))}
        </HorizontalMenu>
      </div>
      <div className={classes.bottom}>
        <div className={classes.right}>
          <HorizontalMenu className={classes['horizontal-list']} as="div">
            {bottomTools.map((toolId) => (
              <div key={toolId} className={classes.item}>
                <Tool toolId={toolId} />
              </div>
            ))}
          </HorizontalMenu>
        </div>
        <div className={classes.content}>
          <Heading mega className={classes.title} size="h3" as="h3">
            All modern Javascript tools in one place
          </Heading>
          <Paragraph className={classes.description} primary light>
            The only fastest way to learn most popular modern tools. All guides
            community-driven and open sourced. Try it for free
          </Paragraph>
          <div className={classes.buttons}>
            <Button icon={<Icon icon="Coffee" size={17} />}>
              Start for free
            </Button>
            <Text>
              <Link href="/prices">Or see our prices</Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
