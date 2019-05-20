// @flow

import React from 'react';

import {
  Icon,
  Link,
  Text,
  ProgressiveRender,
  HorizontalMenu,
  Button,
  Grid,
  Paragraph,
  Heading,
} from 'ui.rhamb.io';

import { api } from '~/domains/app/api-client';
import { minutesToHumable } from '~/utils/minutes-to-humable';
import { Shape as CollectionShape } from '~/domains/entities/collection/types';
import { getComplexityIcon, getComplexityTitle } from './utils';
import { Truncate } from '~/components/common/truncate';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  collectionData: ?CollectionShape,
  classes: JSSObject,
};

export const CollectionCardViewRaw = (props: Props) => {
  const { collectionData, classes } = props;

  return (
    <Grid className={classes.root}>
      <Grid.Row className={classes.row}>
        <Grid.Column
          options={{
            handy: {
              width: 12,
            },
            desktop: {
              width: 4,
            },
          }}
          className={classes.image}
        >
          <img width="100%" src={api.resolveImage(collectionData.image)} />
          <ProgressiveRender
            options={{
              handy: {
                render: () => null,
              },
              tablet: {
                render: () => (
                  <Text light>
                    {minutesToHumable(collectionData.averageTime)}
                  </Text>
                ),
              },
            }}
          />
        </Grid.Column>
        <Grid.Column
          options={{
            handy: {
              width: 12,
            },
            desktop: {
              width: 8,
            },
          }}
        >
          <HorizontalMenu className={classes['head-menu']}>
            <HorizontalMenu.Item>
              <Icon
                className={classes['head-icon']}
                icon={getComplexityIcon(collectionData.complexity)}
                size={17}
              />
              <Text light>{getComplexityTitle(collectionData.complexity)}</Text>
            </HorizontalMenu.Item>
            <ProgressiveRender
              options={{
                handy: {
                  render: () => (
                    <HorizontalMenu.Item>
                      <Text light>
                        {minutesToHumable(collectionData.averageTime)}
                      </Text>
                    </HorizontalMenu.Item>
                  ),
                },
                tablet: {
                  render: () => null,
                },
              }}
            />
          </HorizontalMenu>
          <div className={classes.content}>
            <Heading className={classes.title} as="h2" size="h6">
              <Link className={classes['title-link']}>
                {collectionData.title}
              </Link>
            </Heading>
            <Paragraph>
              <Truncate lines={2}>{collectionData.annotation}</Truncate>
            </Paragraph>
            <Button className={classes.button} transparent arrowed>
              Start learning
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
