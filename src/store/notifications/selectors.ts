import getFp from 'lodash/fp/get';
import { createSelector, Selector } from 'reselect';

// store
import { REDUCER_KEY } from './actionsType';
import { TMainState } from '../../types';
import { TNotificationState, TMessageState } from './types';

export const notificationsSelector: Selector<
  TMainState,
  TNotificationState
> = getFp(REDUCER_KEY);

export const messagesSelector: Selector<
  TMainState,
  Array<TMessageState> | undefined
> = createSelector(notificationsSelector, getFp('messages'));
