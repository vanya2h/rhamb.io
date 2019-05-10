// @flow

import React from 'react';
import { useTool } from '~/domains/entities/tool/react/use-tool';
import { ToolRaw } from './raw';

import type { View } from '~/components/entities/tool/types';

type Props = {
  toolId: string,
  view: View,
};

const ToolBusinessProvider = (props: Props) => {
  const [tool, error, isHydrating] = useTool(props.toolId);

  return (
    <ToolRaw tool={tool} error={error} isHydrating={isHydrating} {...props} />
  );
};

export const Tool = ToolBusinessProvider;
