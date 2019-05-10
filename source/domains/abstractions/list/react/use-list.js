// @flow

import { useState, useEffect } from 'react';
import { listService } from '~/domains/abstractions/list';

export const useList = (loader, initialEntities) => {
  const [list] = useState(
    listService.createList({
      loader,
      entities: initialEntities,
    }),
  );

  useEffect(() => {
    if (list) {
      list.fetch();
    }
  }, [list]);

  const isProcessing = list && list.loaderProcess.state.status === 'processing';
  const error = list && list.loaderProcess.state.error;

  return [list, error, isProcessing];
};
