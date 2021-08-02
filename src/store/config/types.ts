// store
import { EConfigActionsType } from './actionsType';

export type TConfig = {
  baseUrl: string;
};

export type TUpdateConfigPayload = {
  value: boolean | number | string;
  path: string;
};

export type TConfigState = {
  data: TConfig;
  isPending: boolean;
};

export type TConfigSuccess = {
  type: typeof EConfigActionsType.CONFIG_SUCCESS;
  payload: TConfig;
};

export type TUpdateConfig = {
  type: typeof EConfigActionsType.UPDATE_CONFIG;
  payload: TUpdateConfigPayload;
};

export type TUpdateConfigFinished = {
  type: typeof EConfigActionsType.UPDATE_CONFIG_FINISHED;
};
