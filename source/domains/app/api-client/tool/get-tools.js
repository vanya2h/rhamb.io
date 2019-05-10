// @flow

import { client } from '~/domains/app/api-client/client';

export const getTools = async (query) => {
  const response = await client.instance({
    url: '/tool/many',
    method: 'GET',
    params: query,
  });

  return response.data;
};
