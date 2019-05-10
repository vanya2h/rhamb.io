// @flow

import { client } from '~/domains/app/api-client/client';

export const getFeedback = async (query) => {
  const response = await client.instance({
    url: '/feedback/one',
    method: 'GET',
    params: query,
  });

  return response.data;
};
