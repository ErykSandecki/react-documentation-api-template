// store
import { REDUCER_KEY as APP_INITIALIZER_REDUCER_KEY } from './store/appInitializer/actionsType';
import { REDUCER_KEY as CONFIG_REDUCER_KEY } from './store/config/actionsType';
import { REDUCER_KEY as GROUPED_ENDPOINTS_REDUCER_KEY } from './store/groupedEndpoints/actionsType';
import { REDUCER_KEY as NOTIFICATIONS_REDUCER_KEY } from './store/notifications/actionsType';

import { TAppInitializerState } from './store/appInitializer/types';
import { TConfigState } from './store/config/types';
import { TGroupedEndpointsState } from './store/groupedEndpoints/types';
import { TNotificationState } from './store/notifications/types';

export type TMainState = {
  [APP_INITIALIZER_REDUCER_KEY]: TAppInitializerState;
  [CONFIG_REDUCER_KEY]: TConfigState;
  [GROUPED_ENDPOINTS_REDUCER_KEY]: TGroupedEndpointsState;
  [NOTIFICATIONS_REDUCER_KEY]: TNotificationState;
};

export type TAnyAction = {
  type: string;
  payload?: any;
};
