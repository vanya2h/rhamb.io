// @flow

import { useCallback, useReducer } from 'react';

const reducer = (state: boolean): boolean => !state;

export const useForceUpdate = (): (() => void) => {
  const [, dispatch] = useReducer<boolean, null>(reducer, true);

  // Turn dispatch(required_parameter) into dispatch().
  const memoizedDispatch = useCallback((): void => {
    dispatch(null);
  }, [dispatch]);

  return memoizedDispatch;
};
