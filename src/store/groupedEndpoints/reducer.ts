// @ts-nocheck
// others
import {
  TGroupedEndpointsSuccess,
  TAddNewGroup,
  TAddNewEndpoint,
  TUpdateEndpoint,
} from './types';

// store
import { EGroupedEndpointsActionsType } from './actionsType';
import { TAnyAction } from '../../types';
import { TGroupedEndpointsState as TGroupedEndpointsState } from './types';

const initialState: TGroupedEndpointsState = {
  data: [],
  isPending: false,
};

const groupedEndpointsSuccess = (
  state: TGroupedEndpointsState,
  action: TGroupedEndpointsSuccess
): TGroupedEndpointsState => ({
  ...state,
  data: action.payload,
});

const addNewGroup = (state: TGroupedEndpointsState): TAddNewGroup => ({
  ...state,
  isPending: true,
});

const addNewEndpoint = (state: TGroupedEndpointsState): TAddNewEndpoint => ({
  ...state,
  isPending: true,
});

const updateEndpoint = (state: TGroupedEndpointsState): TUpdateEndpoint => ({
  ...state,
  isPending: true,
});

const groupedEndpoints = (
  state: TGroupedEndpointsState = initialState,
  action: TAnyAction
): TGroupedEndpointsState => {
  switch (action.type) {
    case EGroupedEndpointsActionsType.GROUPED_ENDPOINTS_SUCCESS:
      return groupedEndpointsSuccess(state, action);
    case EGroupedEndpointsActionsType.ADD_NEW_GROUP:
      return addNewGroup(state);
    case EGroupedEndpointsActionsType.ADD_NEW_ENDPOINT:
      return addNewEndpoint(state);
    case EGroupedEndpointsActionsType.UPDATE_ENDPOINT:
      return updateEndpoint(state);
    default:
      return state;
  }
};

export default groupedEndpoints;
