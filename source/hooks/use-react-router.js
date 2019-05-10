import { useContext, useEffect } from 'react';
import { useForceUpdate } from '~/hooks/use-force-update';
import { __RouterContext } from 'react-router';

export const useReactRouter = () => {
  const forceUpdate = useForceUpdate();
  const routerContext = useContext(__RouterContext);

  if (!routerContext) {
    throw new Error('use-react-router may only be used with react-router@^5.');
  }

  useEffect(() => {
    return routerContext.history.listen(forceUpdate);
  }, [routerContext]);

  return routerContext;
};
