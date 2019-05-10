// @flow

import { client } from '~/domains/app/api-client/client';

export const getFeedbacks = async (query) => {
  const response = await client.instance({
    url: '/feedback/many',
    method: 'GET',
    params: query,
  });

  return response.data;
};
