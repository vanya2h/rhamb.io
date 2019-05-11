// @flow

import React from 'react';
import { Heading, Paragraph, Icon, Text } from 'ui.rhamb.io';
import { api } from '~/domains/app/api-client';
import { routerService } from '~/domains/app/router';
import { Shape as ToolShape } from '~/domains/entities/tool/types';
import { Truncate } from '~/components/common/truncate';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  toolData: ?ToolShape,
  classes: JSSObject,
};

export const ToolCardViewRaw = (props: Props) => {
  const { toolData, classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <img src={api.resolveImage(toolData.image)} alt={toolData.title} />
      </div>
      <Heading
        className={classes.title}
        onClick={() => {
          routerService.pushHistory('/#');
        }}
        size="h5"
        as="h3"
      >
        {toolData.title}
      </Heading>
      <Paragraph>
        <Truncate lines={2}>{toolData.annotation}</Truncate>
      </Paragraph>
      <div className={classes.bottom}>
        <div className={classes.pins}>
          <Icon icon="Bookmark" size={17} className={classes.icon} />
          <Text light className={classes.text}>
            {toolData.pinCount} Pins
          </Text>
        </div>
        <Text
          className={classes.category}
          onClick={() => {
            routerService.pushHistory('/#');
          }}
          light
        >
          {toolData.category}
        </Text>
      </div>
    </div>
  );
};
