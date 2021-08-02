// others
import { EFeedbackTypes } from '../../components/Feedback/constants';

// store
import { ENotificationsActionsType } from './actionsType';
import { TAddNotificationAction, TRemoveNotificationAction } from './types';

export const addNotification = (
  children: React.ReactNode | string,
  title: string,
  notificationType: EFeedbackTypes = EFeedbackTypes.INFO,
  hideAfterTime: boolean = true
): TAddNotificationAction => {
  return {
    children,
    notificationType,
    hideAfterTime,
    title,
    type: ENotificationsActionsType.ADD_NOTIFICATION,
  };
};

export const removeNotification = (id: number): TRemoveNotificationAction => {
  return {
    type: ENotificationsActionsType.REMOVE_NOTIFICATION,
    id,
  };
};
