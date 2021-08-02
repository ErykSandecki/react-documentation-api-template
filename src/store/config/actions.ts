// others
import { TConfig, TUpdateConfigPayload } from './types';

// store
import { EConfigActionsType } from './actionsType';
import { TConfigSuccess, TUpdateConfig, TUpdateConfigFinished } from './types';

export const configSuccess = (payload: TConfig): TConfigSuccess => ({
  type: EConfigActionsType.CONFIG_SUCCESS,
  payload,
});

export const updateConfig = (payload: TUpdateConfigPayload): TUpdateConfig => ({
  type: EConfigActionsType.UPDATE_CONFIG,
  payload,
});

export const updateConfigFinished = (): TUpdateConfigFinished => ({
  type: EConfigActionsType.UPDATE_CONFIG_FINISHED,
});
