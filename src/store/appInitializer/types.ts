// store
import { EAppInitializerActionsType } from './actionsType';

export type TAppInitializerState = {
  isReady: boolean;
};

export type TAppInitializerSuccess = {
  type: typeof EAppInitializerActionsType.APP_INITIALIZER_SUCCESS;
};
