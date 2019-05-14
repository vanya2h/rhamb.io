// @flow

import { tool } from './tool';
import { collection } from './collection';
import { plan } from './plan';
import { feedback } from './feedback';

export const api = {
  tool,
  collection,
  plan,
  feedback,
  resolveImage: (key) => `http://localhost:3001/${key}`,
};
