// @ts-nocheck
import React, { FunctionComponent, useEffect } from 'react';
import firebase from 'firebase';

// components
import { enhanceFirebase } from './enhanceFirebase';

// others
import { config } from './constants';
import { TConfig } from '../../store/config/types';
import { TDataBase } from '../../store/types';

// services
import databaseHandler from './services/databaseHandler';

export type TInnerProps = {
  appInitializerSuccess: () => void;
  configSuccess: (payload: TConfig) => void;
  groupedEndpointsSuccess: (payload: Array<TGroupedEndpoint>) => void;
};

const Firebase: FunctionComponent<TInnerProps> = ({
  appInitializerSuccess,
  configSuccess,
  groupedEndpointsSuccess,
}) => {
  const actions = (payload: Array<TDataBase>): void => {
    const [config, groupedEndpoints] = payload;

    configSuccess(config);
    groupedEndpointsSuccess(groupedEndpoints);
    appInitializerSuccess();
  };

  useEffect(() => {
    if (config) {
      firebase.initializeApp(config);
      databaseHandler(firebase, actions);
    }
  }, []);

  return null;
};

export default enhanceFirebase(Firebase);
