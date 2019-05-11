// @flow

import React from 'react';
import classnames from 'classnames';
import SliderComponent from 'react-slick';
import { Icon } from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

const NextArrow = (props: { className: string, onClick: Function }) => {
  const { onClick, className } = props;

  return (
    <div className={className} onClick={onClick}>
      <Icon icon="ArrowRight" size={20} />
    </div>
  );
};

const PrevArrow = (props: { className: string, onClick: Function }) => {
  const { onClick, className } = props;

  return (
    <div className={className} onClick={onClick}>
      <Icon icon="ArrowLeft" size={20} />
    </div>
  );
};

type Props = {
  children: any,
  classes: JSSObject,
  className?: string,
};

export const SliderRaw = (props: Props) => {
  const { children, classes, className, ...restProps } = props;

  return (
    <div className={classnames(classes.root, className)}>
      <SliderComponent
        dots
        infinite={false}
        slidesToShow={4}
        slidesToScroll={4}
        nextArrow={
          <NextArrow
            className={classnames(classes.arrow, classes.arrow_right)}
          />
        }
        prevArrow={
          <PrevArrow
            className={classnames(classes.arrow, classes.arrow_left)}
          />
        }
        {...restProps}
      >
        {children}
      </SliderComponent>
    </div>
  );
};
