// store
import { EAppInitializerActionsType } from './actionsType';
import { TAppInitializerSuccess } from './types';

export const appInitializerSuccess = (): TAppInitializerSuccess => ({
  type: EAppInitializerActionsType.APP_INITIALIZER_SUCCESS,
});
