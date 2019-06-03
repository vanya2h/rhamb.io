// @flow

import React from 'react';
import classnames from 'classnames';
import { SomethingWrong } from '~/components/composite/something-wrong';
import { List } from '~/domains/abstractions/list/constructor';
import { Slider } from '~/components/composite/slider';
import { ShadowButton } from '~/components/wrappers/shadow-button';

import {
  Button,
  Spinner,
  HorizontalMenu,
  Container,
  Heading,
  Icon,
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

export const SlideTopToolsRaw = (props: Props) => {
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

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.head}>
          <Heading className={classes.title} size="h3" as="h3">
            {"Master's toolsbelt"}
          </Heading>
          <Paragraph primary light>
            Learn wide Javascript ecosystem just in one place
          </Paragraph>
        </div>
        <div className={classes.top}>
          <Slider
            className={classes.list}
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 574,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {list.entities.map((toolId) => (
              <div key={toolId} className={classes.item}>
                <Tool toolId={toolId} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
      <Container text className={classes.bottom}>
        <Paragraph primary light>
          The only fastest way to learn most popular modern tools. All guides
          community-driven and open sourced. Try it for free
        </Paragraph>
        <HorizontalMenu className={classes.buttons}>
          <ShadowButton icon={<Icon icon="Coffee" size={17} />}>
            Start for free
          </ShadowButton>
          <Button transparent icon={<Icon icon="Clipboard" size={17} />}>
            Or see our prices
          </Button>
        </HorizontalMenu>
      </Container>
    </div>
  );
};
