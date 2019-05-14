// @flow

import { client } from '~/domains/app/api-client/client';

export const getPlans = async (query) => {
  const response = await client.instance({
    url: '/plan/many',
    method: 'GET',
    params: query,
  });

  return response.data;
};
