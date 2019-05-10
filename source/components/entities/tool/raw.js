// @flow

import React from 'react';
import { Tool } from '~/domains/entities/tool/constructor';
import { ToolCardView } from '~/components/entities/tool/views/card';

import type { JSSObject } from '~/domains/app/jss/types';
import type { View } from '~/components/entities/tool/types';

type Props = {
  classes: JSSObject,
  isHydrating: Boolean,
  tool: ?Tool,
  error: ?Error,
  view: View,
};

/**
 * @todo error view
 * @todo hydrating view
 */

export const ToolRaw = (props: Props) => {
  const { tool, view, isHydrating, error } = props;

  if (error) {
    return <div>Error</div>;
  }

  if (isHydrating || !tool) {
    return <div>Hydrating..</div>;
  }

  switch (view) {
    case 'card': {
      return <ToolCardView toolData={tool.data} />;
    }
    default: {
      return <ToolCardView toolData={tool.data} />;
    }
  }
};
