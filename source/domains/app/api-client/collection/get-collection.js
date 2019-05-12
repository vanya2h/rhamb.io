// @flow

import { client } from '~/domains/app/api-client/client';

export const getCollection = async (query) => {
  const response = await client.instance({
    url: '/collection/one',
    method: 'GET',
    params: query,
  });

  return response.data;
};
