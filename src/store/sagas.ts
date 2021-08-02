// @ts-nocheck
import { SagaMiddleware } from 'redux-saga';

// store
import { watchConfig } from './config/watch';
import { watchGroupedEndpoints } from './groupedEndpoints/watch';

const watches = [watchConfig, watchGroupedEndpoints];

const sagaMiddlewareRuns = (sagaMiddleware: SagaMiddleware): void => {
  for (const watch of watches) sagaMiddleware.run(watch);
};

export default sagaMiddlewareRuns;
