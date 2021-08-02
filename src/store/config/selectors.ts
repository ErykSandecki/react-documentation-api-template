// @ts-nocheck
import getFp from 'lodash/fp/get';
import { createSelector, Selector } from 'reselect';

// others
import { TConfig } from './types';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TLocationState } from './types';

export const configSelector: Selector<TMainState, TLocationState> = getFp(
  REDUCER_KEY
);

export const isPendingSelector: Selector<TMainState, boolean> = createSelector(
  configSelector,
  getFp('isPending')
);

export const getDataSelector: Selector<TMainState, TConfig> = createSelector(
  configSelector,
  getFp('data')
);
