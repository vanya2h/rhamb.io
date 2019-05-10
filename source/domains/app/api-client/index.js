// @flow

import { tool } from './tool';

export const api = {
  tool,
  resolveImage: (key) => `http://localhost:3001/${key}`,
};
