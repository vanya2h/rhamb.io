// @flow

import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { fontInjector } from 'ui.rhamb.io/src/business/font-injector';
import { Switcher } from '~/domains/app/router/react/switcher';
import { RouterProvider } from '~/domains/app/router/react/router-provider';
import { routerService } from '~/domains/app/router';
import { theme, fonts, defaultTheme } from 'ui.rhamb.io';

const helveticaFonts = [
  new FontFace('Helvetica Neue', `url(${fonts.helveticaNeueLight})`, {
    style: 'normal',
    weight: '400',
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
        <button
          onClick={() => {
            routerService.pushHistory('index');
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            routerService.pushHistory('about');
          }}
        >
          About
        </button>
      </RouterProvider>
    </theme.ThemeProvider>
  );
};

export default hot(module)(Root);
