// @flow

import React from 'react';
import classnames from 'classnames';
import { Icon, Link, Text, Paragraph, Heading } from 'ui.rhamb.io';
// import { api } from '~/domains/app/api-client';
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
    <div className={classes.root}>
      <div className={classes.head}>
        <div>
          <div
            className={classnames(
              classes['head-item'],
              classes['head-item_accent'],
            )}
          >
            <Icon className={classes['head-icon']} icon="Bookmark" size={17} />
            <Link as="a" href="/" className={classes['head-link']}>
              {collectionData.category}
            </Link>
          </div>
          <div className={classes['head-item']}>
            <Icon className={classes['head-icon']} icon="Clock" size={17} />
            <Text light>
              Average time {minutesToHumable(collectionData.averageTime)}
            </Text>
          </div>
        </div>
        <div>
          <div className={classes['head-item']}>
            <Icon
              className={classes['head-icon']}
              icon={getComplexityIcon(collectionData.complexity)}
              size={17}
            />
            <Text light>{getComplexityTitle(collectionData.complexity)}</Text>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <Heading className={classes.title} as="h2" size="h5">
          <Link className={classes['title-link']}>{collectionData.title}</Link>
        </Heading>
        <Paragraph light>
          <Truncate lines={2}>{collectionData.annotation}</Truncate>
        </Paragraph>
      </div>
    </div>
  );
};
