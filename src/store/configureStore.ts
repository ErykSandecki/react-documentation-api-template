// @ts-nocheck
import {
  Action,
  applyMiddleware,
  CombinedState,
  createStore,
  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// store
import reducers from './reducers';
import sagaMiddlewareRuns from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const configureStore = (): Store<CombinedState<any>, Action> => {
  const store = createStore(
    reducers(history),
    {},
    composeWithDevTools(
      applyMiddleware(...[thunk, routerMiddleware(history)], sagaMiddleware)
    )
  );
  sagaMiddlewareRuns(sagaMiddleware);

  return store;
};

export default configureStore;
