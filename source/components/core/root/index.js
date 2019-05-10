// @flow

import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import withStyles from 'react-jss';
import { fontInjector } from 'ui.rhamb.io/src/business/font-injector';
import { Switcher } from '~/domains/app/router/react/switcher';
import { RouterProvider } from '~/domains/app/router/react/router-provider';
import { theme, fonts, defaultTheme } from 'ui.rhamb.io';
import { styles } from './styles';

const helveticaFonts = [
  new FontFace('Helvetica Neue', `url(${fonts.helveticaNeueLight})`, {
    style: 'normal',
    weight: '100',
  }),
  new FontFace('Helvetica Neue', `url(${fonts.helveticaNeueBold})`, {
    style: 'normal',
    weight: '800',
  }),
];

export const Root = () => {
  useEffect(() => {
    fontInjector.inject(helveticaFonts);
  }, [0]);

  return (
    <theme.ThemeProvider
      defaultTheme="default"
      themes={{
        default: defaultTheme,
      }}
    >
      <RouterProvider>
        <Switcher />
      </RouterProvider>
    </theme.ThemeProvider>
  );
};

export default hot(module)(withStyles(styles)(Root));
