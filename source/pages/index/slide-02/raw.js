// @flow

import React from 'react';
import {
  Button,
  HorizontalMenu,
  Heading,
  Text,
  Link,
  Paragraph,
} from 'ui.rhamb.io';
import { Tool } from '~/components/entities/tool';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  toolsIds: string[],
  error: ?Error,
  isHydrating: boolean,
};

export const Slide02Raw = (props: Props) => {
  const { classes, toolsIds } = props;

  if (!toolsIds) {
    return null;
  }

  const topTools = toolsIds.slice(0, 3);
  const bottomTools = toolsIds.slice(3, 5);

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Heading className={classes.title} size="h2" as="h2">
          Best libraries
        </Heading>
        <Paragraph light>
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
          <Heading className={classes.title} size="h2" as="h2">
            All modern Javascript tools in one place
          </Heading>
          <Paragraph className={classes.description} light>
            The only fastest way to learn most popular modern tools. All guides
            community-driven and open sourced. Try it for free
          </Paragraph>
          <div className={classes.buttons}>
            <Button arrowed>Start for free</Button>
            <Text>
              <Link href="/prices">Or see our prices</Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
