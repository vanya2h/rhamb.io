// @flow

import { client } from '~/domains/app/api-client/client';

export const getPlan = async (query) => {
  const response = await client.instance({
    url: '/plan/one',
    method: 'GET',
    params: query,
  });

  return response.data;
};
