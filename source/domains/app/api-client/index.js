// @flow

import { tool } from './tool';
import { collection } from './collection';
import { feedback } from './feedback';

export const api = {
  tool,
  collection,
  feedback,
  resolveImage: (key) => `http://localhost:3001/${key}`,
};
