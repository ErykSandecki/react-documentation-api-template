// store
import { EAppInitializerActionsType } from './actionsType';
import { TAnyAction } from '../../types';
import { TAppInitializerState } from './types';

const initialState: TAppInitializerState = {
  isReady: false,
};

const appInitializerSuccess = (
  state: TAppInitializerState
): TAppInitializerState => ({
  ...state,
  isReady: true,
});

const appInitializerReducer = (
  state: TAppInitializerState = initialState,
  action: TAnyAction
): TAppInitializerState => {
  switch (action.type) {
    case EAppInitializerActionsType.APP_INITIALIZER_SUCCESS:
      return appInitializerSuccess(state);
    default:
      return state;
  }
};

export default appInitializerReducer;
