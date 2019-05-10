// @flow

import { useState, useEffect } from 'react';
import { listService } from '~/domains/abstractions/list';

export const useList = (loader, initialEntities) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const list = listService.createList({
      loader,
      entities: initialEntities,
    });

    setList(list);
  }, [0]);

  useEffect(() => {
    if (list) {
      list.fetch();
    }
  }, [list]);

  const isProcessing = list && list.loaderProcess.state.status === 'processing';
  const error = list && list.loaderProcess.state.error;
  const entities = list && list.entities;

  return [entities, error, isProcessing];
};
