// @ts-nocheck
// store
import { ENotificationsActionsType } from './actionsType';
import { TAnyAction } from '../../types';
import {
  TAddNotificationAction,
  TRemoveNotificationAction,
  TNotificationState,
} from './types';

const initialState: TNotificationState = {
  messages: [],
  globalID: 0,
};

const addNotification = (
  state: TNotificationState,
  { children, title, notificationType, hideAfterTime }: TAddNotificationAction
): TNotificationState => {
  const id = state.globalID + 1;
  return {
    ...state,
    messages: [
      ...state.messages,
      { children, title, notificationType, id, hideAfterTime },
    ],
    globalID: id,
  };
};

const removeNotification = (
  state: TNotificationState,
  action: TRemoveNotificationAction
) => {
  const messages = state.messages.filter((message) => message.id !== action.id);

  return {
    ...state,
    messages,
  };
};

const notificationReducer = (
  state: TNotificationState = initialState,
  action: TAnyAction
): TNotificationState => {
  switch (action.type) {
    case ENotificationsActionsType.ADD_NOTIFICATION:
      return addNotification(state, action as TAddNotificationAction);
    case ENotificationsActionsType.REMOVE_NOTIFICATION:
      return removeNotification(state, action as TRemoveNotificationAction);
    default:
      return state;
  }
};

export default notificationReducer;
