// @flow

import { client } from '~/domains/app/api-client/client';

export const getCollections = async (query) => {
  const response = await client.instance({
    url: '/collection/many',
    method: 'GET',
    params: query,
  });

  return response.data;
};
