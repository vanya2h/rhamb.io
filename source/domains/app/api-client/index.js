// @flow

import { tool } from './tool';
import { feedback } from './feedback';

export const api = {
  tool,
  feedback,
  resolveImage: (key) => `http://localhost:3001/${key}`,
};
