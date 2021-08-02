// @ts-nocheck
// others
import { TConfigSuccess } from './types';

// store
import { EConfigActionsType } from './actionsType';
import { TAnyAction } from '../../types';
import { TConfigState } from './types';

const initialState: TConfigState = {
  data: null,
  isPending: false,
};

const configSuccess = (
  state: TConfigState,
  action: TConfigSuccess
): TConfigState => ({
  ...state,
  data: action.payload,
});

const updateConfig = (state: TConfigState): TConfigState => ({
  ...state,
  isPending: true,
});

const updateConfigFinished = (state: TConfigState): TConfigState => ({
  ...state,
  isPending: false,
});

const config = (
  state: TConfigState = initialState,
  action: TAnyAction
): TConfigState => {
  switch (action.type) {
    case EConfigActionsType.CONFIG_SUCCESS:
      return configSuccess(state, action);
    case EConfigActionsType.UPDATE_CONFIG:
      return updateConfig(state);
    case EConfigActionsType.UPDATE_CONFIG_FINISHED:
      return updateConfigFinished(state);
    default:
      return state;
  }
};

export default config;
