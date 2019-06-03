// @flow

import React from 'react';
import classnames from 'classnames';
import { Grid, Heading, Spinner, Icon, Button, Paragraph } from 'ui.rhamb.io';
import { SomethingWrong } from '~/components/composite/something-wrong';
import { ShadowButton } from '~/components/wrappers/shadow-button';
import { Collection } from '~/components/entities/collection';

import type { JSSObject } from '~/domains/app/jss/types';
import type { List } from '~/domains/abstractions/list/constructor';

type Props = {
  classes: JSSObject,
  list: List,
  error: ?Error,
  isHydrating: boolean,
};

export const SlideCollectionsRaw = (props: Props) => {
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
            Reload feedbacks
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

  return (
    <Grid className={classes.root}>
      <Grid.Row>
        <Grid.Column
          options={{
            handy: {
              width: 12,
            },
            tablet: {
              offset: 2,
              width: 8,
            },
          }}
          className={classes.head}
        >
          <div className={classes.image}>
            <img src={require('./assets/guys.svg')} width="100%" />
          </div>
          <Heading className={classes.title} as="h1" size="h1">
            Find your path
          </Heading>
          <Paragraph light primary className={classes.annotation}>
            Still don’t know your favorite tools for best developer experience?
            Explore community recommended personal paths for every kind of
            Javascript developer.
          </Paragraph>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {list.entities.slice(0, 4).map((id) => (
          <Grid.Column
            key={id}
            options={{
              mobile: {
                width: 12,
              },
              tablet: {
                width: 6,
              },
            }}
          >
            <Collection collectionId={id} />
          </Grid.Column>
        ))}
      </Grid.Row>
      <div className={classes['button-wrapper']}>
        <ShadowButton
          className={classes.button}
          arrowed
          icon={<Icon size={16} icon="Compass" />}
        >
          Explore more
        </ShadowButton>
      </div>
    </Grid>
  );
};
