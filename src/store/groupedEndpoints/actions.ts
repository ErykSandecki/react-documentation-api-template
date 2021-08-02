// others
import {
  TGroupedEndpoint,
  TUpdateEndpoint,
  TUpdateEndpointPayload,
} from './types';

// store
import { EGroupedEndpointsActionsType } from './actionsType';
import {
  TGroupedEndpointsSuccess,
  TAddNewGroup,
  TAddNewEndpoint,
  TAddNewEndpointPayload,
} from './types';

export const groupedEndpointsSuccess = (
  payload: Array<TGroupedEndpoint>
): TGroupedEndpointsSuccess => ({
  type: EGroupedEndpointsActionsType.GROUPED_ENDPOINTS_SUCCESS,
  payload,
});

export const addNewGroup = (payload: string): TAddNewGroup => ({
  type: EGroupedEndpointsActionsType.ADD_NEW_GROUP,
  payload,
});

export const addNewEndpoint = (
  payload: TAddNewEndpointPayload
): TAddNewEndpoint => ({
  type: EGroupedEndpointsActionsType.ADD_NEW_ENDPOINT,
  payload,
});

export const updateEndpoint = (
  payload: TUpdateEndpointPayload
): TUpdateEndpoint => ({
  type: EGroupedEndpointsActionsType.UPDATE_ENDPOINT,
  payload,
});
