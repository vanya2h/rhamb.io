// @flow

import { Tool } from '~/domains/entities/tool/constructor';

export const toolService = {
  createTool: (props): Tool => new Tool(props),
};
