// @ts-nocheck
import getFp from 'lodash/fp/get';
import { createSelector, Selector } from 'reselect';

// others
import { TGroupedEndpoint } from './types';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TLocationState } from './types';

export const groupedEndpointsSelector: Selector<
  TMainState,
  TLocationState
> = getFp(REDUCER_KEY);

export const isPendingSelector: Selector<TMainState, boolean> = createSelector(
  groupedEndpointsSelector,
  getFp('isPending')
);

export const getDataSelector: Selector<
  TMainState,
  Array<TGroupedEndpoint>
> = createSelector(groupedEndpointsSelector, getFp('data'));
