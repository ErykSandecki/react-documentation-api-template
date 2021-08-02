import React from 'react';

// others
import { EFeedbackTypes } from '../../components/Feedback/constants';

// store
import { ENotificationsActionsType } from './actionsType';

export type TMessageState = {
  children: React.ReactNode | string;
  id: number;
  title: string;
  notificationType?: EFeedbackTypes;
};

export type TNotificationState = {
  messages: Array<TMessageState>;
  globalID: number;
};

export type TAddNotificationAction = {
  children: React.ReactNode | string;
  hideAfterTime: boolean;
  notificationType?: EFeedbackTypes;
  title: string;
  type: typeof ENotificationsActionsType.ADD_NOTIFICATION;
};

export type TRemoveNotificationAction = {
  type: typeof ENotificationsActionsType.REMOVE_NOTIFICATION;
  id: number;
};
