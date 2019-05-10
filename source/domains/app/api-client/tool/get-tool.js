// @flow

import { client } from '~/domains/app/api-client/client';

export const getTool = async (query) => {
  const response = await client.instance({
    url: '/tool/one',
    method: 'GET',
    params: query,
  });

  return response.data;
};
