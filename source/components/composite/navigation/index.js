// @flow

import React from 'react';
import { NavigationRaw } from './raw';
import { useReactRouter } from '~/hooks/use-react-router';
import withStyles from 'react-jss';
import { styles } from './styles';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {|
  classes: JSSObject,
|};

const NavigationBusinessProvider = (props: Props) => {
  const { location } = useReactRouter();

  return <NavigationRaw activeLocation={location} {...props} />;
};

export const Navigation = withStyles(styles)(NavigationBusinessProvider);
