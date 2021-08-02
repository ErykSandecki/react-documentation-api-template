// @ts-nocheck
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// store
import appInitializer from './appInitializer/reducer';
import config from './config/reducer';
import groupedEndpoints from './groupedEndpoints/reducer';
import notifications from './notifications/reducer';

const reducers = { appInitializer, config, groupedEndpoints, notifications };

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export default createRootReducer;
