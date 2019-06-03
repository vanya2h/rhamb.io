// @flow

import * as React from 'react';
import chroma from 'chroma-js';
import { Button } from 'ui.rhamb.io';

type Props = {|
  children: React.Node,
  theme: Object,
|};

export const ShadowButtonRaw = ({ children, theme, ...rest }: Props) => {
  let color = theme.colors.contrast;

  if (rest.primary) {
    color = theme.colors.primary;
  }

  if (rest.accent) {
    color = theme.colors.accent;
  }

  return (
    <Button
      style={{
        boxShadow: `0 20px 20px rgba(${chroma(color)
          .alpha(0.2)
          .rgba()})`,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
