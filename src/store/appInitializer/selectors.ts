// @ts-nocheck
import getFp from 'lodash/fp/get';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TLocationState } from './types';

export const appInitializerSelector: Selector<
  TMainState,
  TLocationState
> = getFp(REDUCER_KEY);

export const isReadySelector: Selector<TMainState, boolean> = createSelector(
  appInitializerSelector,
  getFp('isReady')
);
